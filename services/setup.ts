import { FileElement } from "../constants/constants"
import { getAllItemsOfType } from "../utils"

export const setupGame = (data: string[][]) => {
    return {
        adventurers: createAdventurers(data),
        mountains: createMountains(data)
    }
}

const createMountains = (data: string[][]) => {
    const mountains = getAllItemsOfType(data, FileElement.MOUNTAIN)

    return mountains.map((mountain) => ({
        coordinates: { x: parseFloat(mountain[1]), y: parseFloat(mountain[2]) },
    }))
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