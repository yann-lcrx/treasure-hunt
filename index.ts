import { parseFile } from "./services/file"
import { setupGame } from "./services/setup"

const playGame = async () => {
    // logic
    console.log("hello world")

    const path = process.argv[2]

    const data = await parseFile(path)

    const gameData = setupGame(data)

    return gameData
}

playGame()