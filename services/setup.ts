import { FileElement } from "../constants/constants"
import { getAllItemsOfType } from "../utils"

export const setupGame = (data: string[][]) => {
    return {
        adventurers: createAdventurers(data)
    }
}

const createAdventurers = (data: string[][]) => {
    const adventurers = getAllItemsOfType(data, FileElement.ADVENTURER)

    return adventurers.map((adventurer) => ({
        name: adventurer[1],
        coordinates: { x: parseFloat(adventurer[2]), y: parseFloat(adventurer[3]) },
        direction: adventurer[4],
        treasureCount: 0,
        instructions: createInstructions(adventurer[5])
    }))
}

const createInstructions = (string: string) => {
    return string.split("")
}