import { Request, Response } from "express";
import { AppDataSource } from "../models/data-source";
import { userRepository } from '../models/entity/Storage/Storage.repository'
import { path_dirname } from '../../url'

async function CreateDataUpload(req: Request, res: Response) {
    if (req.body && req.file) {  
      let { filename, path, originalname }  = req.file
      let { idFile }  = req.body;

       await userRepository.insert({
            id_storage: idFile,
            name_file_before: originalname,
            name_file_save: filename,
            url: `${path_dirname}\\${path}`
       }) 
    }

    res.send(200)
}

export { CreateDataUpload };
