import fs from "fs";
import { parse, Parser } from "csv-parse"

const getParser = (path: fs.PathLike) => {
    return fs.createReadStream(path).pipe(parse({ delimiter: " - " }))
}

const parseCsv = async (parser: Parser) => {
    const data: string[][] = []

    await parser.forEach((record) => {
        data.push(record)
    })

    return data
}

export const parseFile = async (path: fs.PathLike): Promise<string[][]> => {
    const parser = getParser(path)

    const data = await parseCsv(parser)

    return data
}