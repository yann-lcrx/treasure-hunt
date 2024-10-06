import { FileElement } from "../constants/constants"
import { getAllItemsOfType } from "../utils"

export const setupGame = (data: string[][]) => {
    return {
        map: createMap(data),
        adventurers: createAdventurers(data),
        mountains: createMountains(data),
        treasures: createTreasures(data)
    }
}

const createMap = (data: string[][]) => {
    const map = data.find(line => line[0] === FileElement.MAP)

    if (map) {
        return {
            width: parseFloat(map[1]),
            height: parseFloat(map[2])
        }
    }
}

const createTreasures = (data: string[][]) => {
    const treasures = getAllItemsOfType(data, FileElement.TREASURE)

    return treasures.map((treasure) => ({
        coordinates: { x: parseFloat(treasure[1]), y: parseFloat(treasure[2]) },
        quantity: parseFloat(treasure[3])
    }))
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