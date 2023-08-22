import { Router, Request, Response } from "express";
import { Storage } from "../models/entity/Storage/Storage";
import { AppDataSource } from "../models/data-source";

export async function getDataAll(req: Request, res: Response) {
  const data = await AppDataSource.getRepository(Storage)
    .createQueryBuilder("Storage")
    .getMany();
  res.json({
    data,
  });
}
