import { parseFile, writeFile } from "./services/file"
import { runGame } from "./services/game"
import { getCsvString } from "./services/postGame"
import { setupGame } from "./services/setup"

const playGame = async () => {
    const path = process.argv[2]

    const data = await parseFile(path)

    const startupData = setupGame(data)

    const finalGameData = runGame(startupData)

    const csvString = getCsvString(finalGameData)

    const result = await writeFile(csvString)

    console.log(result)
}

playGame()