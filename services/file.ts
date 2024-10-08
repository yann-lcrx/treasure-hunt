import fs from "fs";
import { parse, Parser } from "csv-parse"

const getParser = (path: fs.PathLike) => {
    return fs.createReadStream(path).pipe(parse({ delimiter: " - ", relax_column_count: true }))
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

export const writeFile = async (data: string) => {
    return fs.writeFile("output.csv", data, "utf-8", (err) => {
        if (err) {
            throw err
        }

        console.info("File saved to output.csv")
    })
}