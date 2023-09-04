import { Request, Response } from "express";
import { userRepository } from "../models/entity/Storage/Storage.repository";
import { StorageProductRepository } from "../models/entity/Storage_production/StorageProduct.respository";
import { path_dirname } from "../../url";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.API_KEY_CLOUD as string,
  api_secret: process.env.API_SECRET_CLOUD as string,
});

async function CreateDataUpload(req: Request, res: Response) {
  try {
    if (req.file) {
      let { filename, path, originalname, buffer } = req.file;
      let { idFile } = req.body;

      if ((process.env.NODE_MODE as string).toLowerCase() === "production") {
        console.log(buffer)
        const response: UploadApiResponse | undefined = await new Promise(
          (resolve, reject) => {
            cloudinary.uploader
              .upload_stream({}, (err, result) => {
                if (err) {
                  reject(err);
                }

                resolve(result);
              })
              .end(buffer);
          }
        );
          console.log(response)
        if (response) {
          await StorageProductRepository.insert({
            assets_id: response.asset_id,
            format: response.format,
            url: response.url,
            secure_url: response.secure_url,
            name_file_current: response.original_filename
          });
        }

      } else {

        await userRepository.insert({
          id_storage: idFile,
          name_file_before: originalname,
          name_file_save: filename,
          url: `${path_dirname}\\${path}`,
        });

      }
    }
  } catch (error) {}

  res.send(200);
}

export { CreateDataUpload };
