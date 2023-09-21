import { Request, Response } from "express";
import { userRepository } from "../models/entity/Storage/Storage.repository";
import { StorageProductRepository } from "../models/entity/Storage_production/StorageProduct.respository";
import { path_dirname } from "../../url";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { isArray } from "util";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.API_KEY_CLOUD as string,
  api_secret: process.env.API_SECRET_CLOUD as string,
});

async function CreateDataUpload(req: Request, res: Response) {
  try {

      if ((process.env.NODE_MODE as string).toLowerCase() === "production"  && req.files) {

        const ArrayFiles = req.files

        if (isArray(ArrayFiles)) {
          for (const file of ArrayFiles) {
            const { originalname } = file
            const response: UploadApiResponse | undefined = await new Promise(
              (resolve, reject) => {
                cloudinary.uploader
                  .upload_stream({}, (err, result) => {
                    if (err) {
                      reject(err);
                    }
    
                    resolve(result);
                  })
                  .end(file.buffer);
              }
              );
              if (response) {
                console.log(response);
                
                const dataSave = await StorageProductRepository.insert({
                  assets_id: response.asset_id,
                  format: response.format,
                  url: response.url,
                  secure_url: response.secure_url,
                  name_file_current: originalname,
                });
                

                res.json(dataSave.identifiers[0])
              }
            
          }
        }


      } else {
        if (req.file) {
          let { filename, path, originalname, buffer } = req.file;
          let { idFile } = req.body;
  
          await userRepository.insert({
            id_storage: idFile,
            name_file_before: originalname,
            name_file_save: filename,
            url: `${path_dirname}\\${path}`,
          });
          
        }
      }
  } catch (error) {}

  // res.sendStatus(200);
}

export { CreateDataUpload };
