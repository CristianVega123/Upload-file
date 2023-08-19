import {Request, Response} from 'express'
import {path_dirData, path_dirname} from '../../url'
import {readdir} from 'node:fs/promises'
import {codifyBase64} from '../utils/utlis.codify'

interface dataJson {
    [file: string] : string
}

export async function sentData(req: Request, res: Response) {
    const files = await readdir(path_dirData);
    let hashMapFiles: dataJson =  {};
    let count = 0;

    for (const file of files) {
        hashMapFiles[`file-${count}`] = await codifyBase64(file)
        count++;
    }
    res.json(hashMapFiles).status(201)
    // res.send("")
}
