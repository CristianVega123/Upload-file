import "reflect-metadata";
import { config } from "dotenv";
import Express from "express";
import cors from "cors";

import Router from "./routes/upload.api";
import Data from "./routes/uploadData.api";
import AllData from "./routes/giveData.api";
import { AppDataSource } from "./models/data-source";

// import {storage} from '../config/multer.config'

const app = Express();
config();
app.use(
  cors({
    origin: "*",
  })
);
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

// Routes
app.use("/api", Router);
app.use("/api", Data);
app.use("/api", AllData)

const PORT = process.env.PORT || 3120;

AppDataSource.initialize().then(() => {
    console.log("Conectado la base de datos")
}).catch( err => console.log(err))

app.listen(PORT, () => {
  console.log("El servidor esta encendido en el puesto " + PORT);
});
