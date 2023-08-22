import { readFile } from "node:fs/promises";
import {path_dirData} from '../../url'

async function codifyBase64 (url: string): Promise<string> {
    const data = await readFile(`${url}`);
    const base64 = data.toString("base64")
    return base64;
}

export {codifyBase64}