import { CardinalPoint, FileElement } from "../constants/constants"
import { incompleteAdventurerErrorMessage, incompleteMountainErrorMessage, incompleteTreasureErrorMessage, nonCardinalAdventurerErrorMessage, nonNumberCoordinatesErrorMessage, nonNumberCountTreasureErrorMessage } from "../constants/errors"

export const validateEntry = (mapElements: string[][]) => {
    const mountains = getAllItemsOfType(mapElements, FileElement.MOUNTAIN)
    const adventurers = getAllItemsOfType(mapElements, FileElement.ADVENTURER)
    const treasures = getAllItemsOfType(mapElements, FileElement.TREASURE)

    validateMountains(mountains)
    validateAdventurers(adventurers)
    validateTreasures(treasures)
}

const validateAdventurers = (adventurers: string[][]) => {
    adventurers.forEach((adventurer) => {
        if (adventurer.length !== 6) {
            throw incompleteAdventurerErrorMessage
        }

        const xAxis = adventurer[2]
        const yAxis = adventurer[3]
        const direction = adventurer[4]
        const steps = adventurer[5]

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