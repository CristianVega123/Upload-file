import { Request, Response, Router } from 'express'

const router = Router()


router.get("/", (req: Request, res: Response) => {
    console.log(process.env.NODE_MODE)
    res.sendStatus(200)
})

export default router

