import { parseFile } from "./services/file"
import { runGame } from "./services/game"
import { setupGame } from "./services/setup"

const playGame = async () => {
    const path = process.argv[2]

    const data = await parseFile(path)

    const gameData = setupGame(data)

    const finalGameData = runGame(gameData)

    console.log(finalGameData)
}

playGame()