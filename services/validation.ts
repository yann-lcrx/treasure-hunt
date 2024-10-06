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
    const adventurerErrors = validateAdventurers(adventurers)
    const treasureErrors = validateTreasures(treasures)
    const mountainErrors = validateMountains(mountains)

    return [...mapErrors, ...adventurerErrors, ...treasureErrors, ...mountainErrors]
}

const validateMap = (maps: string[][]): GameEntryError[] => {
    console.log(maps)

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

const validateAdventurers = (adventurers: string[][]): GameEntryError[] => {
    const errors: GameEntryError[] = []

    adventurers.forEach((adventurer) => {
        if (adventurer.length !== 6) {
            addError(errors, {
                message: GameEntryErrorMessage.INVALID_ADVENTURER,
                name: GameEntryErrorName.INVALID_ADVENTURER,
                line: adventurer
            })
            return
        }

        const xAxis = adventurer[2]
        const yAxis = adventurer[3]
        const direction = adventurer[4]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            addError(errors, {
                message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
                name: GameEntryErrorName.NON_NUMBER_COORDINATES,
                line: adventurer
            })
        }

        if (!Object.values<string>(CardinalPoint).includes(direction)) {
            addError(errors, {
                message: GameEntryErrorMessage.NON_CARDINAL_DIRECTION,
                name: GameEntryErrorName.NON_CARDINAL_DIRECTION,
                line: adventurer
            })
        }

    })
    return errors
}

const validateMountains = (mountains: string[][]) => {
    const errors: GameEntryError[] = []

    mountains.forEach((mountain) => {
        if (mountain.length !== 3) {
            return addError(errors, {
                name: GameEntryErrorName.INVALID_MOUNTAIN,
                message: GameEntryErrorMessage.INVALID_MOUNTAIN,
                line: mountain
            })
        }

        const xAxis = mountain[1]
        const yAxis = mountain[2]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            addError(errors, {
                name: GameEntryErrorName.NON_NUMBER_COORDINATES,
                message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
                line: mountain
            })
        }
    })

    return errors
}

const validateTreasures = (treasures: string[][]): GameEntryError[] => {
    const errors: GameEntryError[] = []

    treasures.forEach((treasure) => {
        if (treasure.length !== 4) {
            return addError(errors, {
                name: GameEntryErrorName.INVALID_TREASURE,
                message: GameEntryErrorMessage.INVALID_TREASURE,
                line: treasure
            })
        }

        const xAxis = treasure[1]
        const yAxis = treasure[2]
        const count = treasure[3]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            addError(errors, {
                name: GameEntryErrorName.NON_NUMBER_COORDINATES,
                message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
                line: treasure
            })
        }

        if (isNaN(parseFloat(count))) {
            addError(errors, {
                name: GameEntryErrorName.NON_NUMBER_TREASURE_QUANTITY,
                message: GameEntryErrorMessage.NON_NUMBER_TREASURE_QUANTITY,
                line: treasure
            })
        }
    })

    return errors
}

const getAllItemsOfType = (mapElements: string[][], item: FileElement) => {
    return mapElements.filter((element) => { return element[0] === item })
}