import { CardinalPoint, FileElement } from "../constants/constants"
import { GameEntryErrorMessage, GameEntryErrorName } from "../constants/errors"
import { GameEntryError } from "../types"
import { addError } from "./error"

export const validateEntry = (mapElements: string[][]): GameEntryError[] => {
    const mountains = getAllItemsOfType(mapElements, FileElement.MOUNTAIN)
    const adventurers = getAllItemsOfType(mapElements, FileElement.ADVENTURER)
    const treasures = getAllItemsOfType(mapElements, FileElement.TREASURE)
    const maps = getAllItemsOfType(mapElements, FileElement.MAP)

    const mapErrors = validateMap(maps)
    const mountainErrors = validateMountains(mountains)
    const adventurerErrors = validateAdventurers(adventurers)
    const treasureErrors = validateTreasures(treasures)

    return [...mapErrors]
}

const validateMap = (maps: string[][]): GameEntryError[] => {

    if (!maps.length) {
        return [{
            name: GameEntryErrorName.INVALID_MAP,
            message: GameEntryErrorMessage.INVALID_MAP,
        }]
    }

    if (maps.length > 1) {
        return [{
            name: GameEntryErrorName.MULTI_MAP,
            message: GameEntryErrorMessage.MULTI_MAP,
        }]
    }

    const errors: GameEntryError[] = []

    const map = maps[0]

    const xAxis = map[1]
    const yAxis = map[2]

    if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
        addError(errors, {
            message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
            name: GameEntryErrorName.NON_NUMBER_COORDINATES,
            line: map
        })
    }

    if (parseFloat(xAxis) < 2 || parseFloat(yAxis) < 2) {
        addError(errors, {
            message: GameEntryErrorMessage.SMALL_MAP,
            name: GameEntryErrorName.SMALL_MAP,
            line: map
        })
    }

    return errors
}

const validateAdventurers = (adventurers: string[][]) => {
    adventurers.forEach((adventurer) => {
        if (adventurer.length !== 6) {
            throw GameEntryErrorMessage.INVALID_ADVENTURER
        }

        const xAxis = adventurer[2]
        const yAxis = adventurer[3]
        const direction = adventurer[4]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            throw GameEntryErrorMessage.NON_NUMBER_COORDINATES
        }

        if (!Object.values<string>(CardinalPoint).includes(direction)) {
            throw GameEntryErrorMessage.NON_CARDINAL_DIRECTION
        }
    })
}

const validateMountains = (mountains: string[][]) => {
    mountains.forEach((mountain) => {

        if (mountain.length !== 3) {
            throw GameEntryErrorMessage.INVALID_MOUNTAIN
        }

        const xAxis = mountain[1]
        const yAxis = mountain[2]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            throw GameEntryErrorMessage.NON_NUMBER_COORDINATES
        }
    })
}

const validateTreasures = (treasures: string[][]) => {
    treasures.forEach((treasure) => {

        if (treasure.length !== 4) {
            throw GameEntryErrorMessage.INVALID_TREASURE
        }

        const xAxis = treasure[1]
        const yAxis = treasure[2]
        const count = treasure[3]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            throw GameEntryErrorMessage.NON_NUMBER_COORDINATES
        }

        if (isNaN(parseFloat(count))) {
            throw GameEntryErrorMessage.NON_NUMBER_TREASURE_QUANTITY
        }
    })
}

const getAllItemsOfType = (mapElements: string[][], item: FileElement) => {
    return mapElements.filter((element) => element[0] === item)
}