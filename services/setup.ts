import { CardinalPoint, FileElement, Instruction } from "../constants/constants"
import { GameSetupErrorMessage, GameSetupErrorName } from "../constants/errors"
import { GameEntryData, GameSetupError, GameState, InGameAdventurer, InGameMap, InGameMountain, InGameTreasure } from "../types"
import { getAllItemsOfType } from "../utils"

export const setupGame = (data: GameEntryData): GameState | Pick<GameState, "errors"> => {
    const map = createMap(data)
    const errors: GameSetupError[] = []

    if (!map) {
        return {
            errors: [
                {
                    name: GameSetupErrorName.INVALID_MAP,
                    message: GameSetupErrorMessage.INVALID_MAP
                }
            ]
        }
    }

    return {
        map,
        adventurers: createAdventurers(data),
        mountains: createMountains(data),
        treasures: createTreasures(data),
        errors
    }
}

const createMap = (data: GameEntryData): InGameMap | undefined => {
    const map = data.find(line => line[0] === FileElement.MAP)

    if (map) {
        return {
            width: parseFloat(map[1]),
            height: parseFloat(map[2])
        }
    }
}

const createTreasures = (data: GameEntryData): InGameTreasure[] => {
    const treasures = getAllItemsOfType(data, FileElement.TREASURE)

    return treasures.map((treasure) => ({
        coordinates: { x: parseFloat(treasure[1]), y: parseFloat(treasure[2]) },
        quantity: parseFloat(treasure[3])
    }))
}

const createMountains = (data: GameEntryData): InGameMountain[] => {
    const mountains = getAllItemsOfType(data, FileElement.MOUNTAIN)

    return mountains.map((mountain) => ({
        coordinates: { x: parseFloat(mountain[1]), y: parseFloat(mountain[2]) },
    }))
}

const createAdventurers = (data: GameEntryData): InGameAdventurer[] => {
    const adventurers = getAllItemsOfType(data, FileElement.ADVENTURER)

    return adventurers.map((adventurer) => ({
        name: adventurer[1],
        coordinates: { x: parseFloat(adventurer[2]), y: parseFloat(adventurer[3]) },
        direction: adventurer[4] as CardinalPoint,
        treasureCount: 0,
        instructions: createInstructions(adventurer[5])
    }))
}

const createInstructions = (string: string): Instruction[] => {
    return string.split("") as Instruction[]
}