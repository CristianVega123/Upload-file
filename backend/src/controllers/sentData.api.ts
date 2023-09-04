import { Request, Response } from "express";
import { userRepository } from '../models/entity/Storage/Storage.repository'
import { codifyBase64 } from "../utils/utlis.codify";



export async function sentData(req: Request, res: Response) {

    if ((process.env.NODE_MODE as string).toLowerCase() === "production") {
        
    } else {
        try {
            let { id } = req.params;
            console.log(id)
            let dataCodify;
              const data = await userRepository.findOne({
                  where: {
                      id_storage: id
                  }
              })
              console.log(data)
              if (data) {
                   dataCodify = await codifyBase64(data.url)       
                   return res.json({
                     "file-0" : dataCodify
                   }).status(200)
              }
            
        } catch (error) {
           res.status(404) 
        }

    }


}
