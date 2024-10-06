import { parseFile } from "./services/file"

const playGame = async () => {
    // logic
    console.log("hello world")

    const path = process.argv[2]

    const data = await parseFile(path)

    console.log(data)

    return data
}

playGame()