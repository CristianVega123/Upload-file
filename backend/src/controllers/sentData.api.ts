import { Request, Response } from "express";
import { userRepository } from '../models/entity/Storage/Storage.repository'
import { StorageProductRepository } from '../models/entity/Storage_production/StorageProduct.respository'

import { codifyBase64 } from "../utils/utlis.codify";



export async function sentData(req: Request, res: Response) {

    if ((process.env.NODE_MODE as string).toLowerCase() === "production") { 
        let { id } = req.params;

        const data = await StorageProductRepository.findOne({
            where: {
                assets_id: id
            }
        })

        if (data) {
            res.json({
                url: data.url
            })
        } else {
            res.sendStatus(404)
        }

        console.log(data?.url)
        
        
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
