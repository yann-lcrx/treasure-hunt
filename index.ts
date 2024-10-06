import { parseFile } from "./services/file"

const playGame = async () => {
    // logic
    console.log("hello world")

    const data = await parseFile("file.csv")

    return data
}

playGame()