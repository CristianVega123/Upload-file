import 'reflect-metadata'
import { config } from "dotenv";
import Express, { Request, Response } from 'express'           
import cors from 'cors'
import multer from 'multer'
// import {storage} from '../config/multer.config'

const app = Express()
const upload = multer({
    dest: "upload",
})
config()
app.use(cors({
    origin: "*"
}))
app.use(Express.json())
app.use(Express.urlencoded({extended: false}))

app.post("/upload",upload.single("file") ,(req: Request, res: Response) => {
    console.log(req.file)
    console.log(req.body)
    res.send(200)
})


const PORT = process.env.PORT || 3120;
app.listen(PORT, () => {
    console.log("El servidor esta encendido en el puesto " + PORT)
})
