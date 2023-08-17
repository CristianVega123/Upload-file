import 'reflect-metadata'
import { config } from "dotenv";
import Express from 'express'           
import cors from 'cors'

import Router from "./routes/upload.api";

// import {storage} from '../config/multer.config'

const app = Express()
config()
app.use(cors({
    origin: "*"
}))
app.use(Express.json())
app.use(Express.urlencoded({extended: false}))


// Routes

app.use("/api", Router)


const PORT = process.env.PORT || 3120;
app.listen(PORT, () => {
    console.log("El servidor esta encendido en el puesto " + PORT)
})
