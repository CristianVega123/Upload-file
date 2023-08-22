import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Storage } from './entity/Storage/Storage'

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD as string,
  database: process.env.DATABASE_NAME as string,
  synchronize: true,
  logging: true,
  entities: [Storage],
  subscribers: [],
  migrations: [],
});
