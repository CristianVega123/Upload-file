import { Router, Request, Response } from "express";
import { Storage_Local } from "../models/entity/Storage/Storage";
import { AppDataSource } from "../models/data-source";

export async function getDataAll(req: Request, res: Response) {
  if ((process.env.NODE_MODE as string).toLowerCase() === "production") {
    
  } else {
    const data = await AppDataSource.getRepository(Storage_Local)
      .createQueryBuilder("Storage")
      .getMany();
    res.json({
      data,
    });
  }
}
