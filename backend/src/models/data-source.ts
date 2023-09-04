import { DataSource } from "typeorm";
import { Storage_Local } from './entity/Storage/Storage'
import { Storage_Production } from './entity/Storage_production/StorageProduc'


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD as string,
  database: process.env.DATABASE_NAME as string,
  synchronize: true,
  logging: true,
  entities: [Storage_Local, Storage_Production],
  subscribers: [],
  migrations: [],
});
