import fs from 'fs'
import path from 'path'

const root = path.join(__dirname, `../../src`)

export const readFile = (filename: string) => {
    return fs.readFileSync(`${root}${filename}`).toString()
}