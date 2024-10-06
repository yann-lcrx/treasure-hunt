import { CardinalPoint, FileElement } from "../constants/constants"
import { incompleteAdventurerErrorMessage, incompleteMountainErrorMessage, incompleteTreasureErrorMessage, invalidMapErrorMessage, multiMapErrorMessage, nonCardinalAdventurerErrorMessage, nonNumberCoordinatesErrorMessage, nonNumberCountTreasureErrorMessage, smallMapErrorMessage } from "../constants/errors"

export const validateEntry = (mapElements: string[][]) => {
    const mountains = getAllItemsOfType(mapElements, FileElement.MOUNTAIN)
    const adventurers = getAllItemsOfType(mapElements, FileElement.ADVENTURER)
    const treasures = getAllItemsOfType(mapElements, FileElement.TREASURE)
    const maps = getAllItemsOfType(mapElements, FileElement.MAP)

    validateMap(maps)
    validateMountains(mountains)
    validateAdventurers(adventurers)
    validateTreasures(treasures)
}

const validateMap = (maps: string[][]) => {
    if (!maps.length) {
        throw invalidMapErrorMessage
    }

    if (maps.length > 1) {
        throw multiMapErrorMessage
    }

    const xAxis = maps[0][1]
    const yAxis = maps[0][2]

    if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
        throw nonNumberCoordinatesErrorMessage
    }

    if (parseFloat(xAxis) < 2 || parseFloat(yAxis) < 2) {
        throw smallMapErrorMessage
    }
}

const validateAdventurers = (adventurers: string[][]) => {
    adventurers.forEach((adventurer) => {
        if (adventurer.length !== 6) {
            throw incompleteAdventurerErrorMessage
        }

        const xAxis = adventurer[2]
        const yAxis = adventurer[3]
        const direction = adventurer[4]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            throw nonNumberCoordinatesErrorMessage
        }

        if (!Object.values<string>(CardinalPoint).includes(direction)) {
            throw nonCardinalAdventurerErrorMessage
        }
    })
}

const validateMountains = (mountains: string[][]) => {
    mountains.forEach((mountain) => {

        if (mountain.length !== 3) {
            throw incompleteMountainErrorMessage
        }

        const xAxis = mountain[1]
        const yAxis = mountain[2]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            throw nonNumberCoordinatesErrorMessage
        }
    })
}

const validateTreasures = (treasures: string[][]) => {
    treasures.forEach((treasure) => {

        if (treasure.length !== 4) {
            throw incompleteTreasureErrorMessage
        }

        const xAxis = treasure[1]
        const yAxis = treasure[2]
        const count = treasure[3]

        if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
            throw nonNumberCoordinatesErrorMessage
        }

        if (isNaN(parseFloat(count))) {
            throw nonNumberCountTreasureErrorMessage
        }
    })
}

const getAllItemsOfType = (mapElements: string[][], item: FileElement) => {
    return mapElements.filter((element) => element[0] === item)
}