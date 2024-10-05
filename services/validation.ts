import { CardinalPoint, FileElement } from "../constants/constants"
import { incompleteAdventurerErrorMessage, incompleteMountainErrorMessage, nonCardinalAdventurerErrorMessage, nonNumberAxisAdventurerErrorMessage, nonNumberAxisMountainErrorMessage } from "../constants/errors"

export const validateEntry = (mapElements: string[][]) => {
    const mountains = getAllItemsOfType(mapElements, FileElement.MOUNTAIN)
    const adventurers = getAllItemsOfType(mapElements, FileElement.ADVENTURER)

    validateMountains(mountains)
    validateAdventurers(adventurers)

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
            throw nonNumberAxisAdventurerErrorMessage
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
            throw nonNumberAxisMountainErrorMessage
        }
    })
}

const getAllItemsOfType = (mapElements: string[][], item: FileElement) => {
    return mapElements.filter((element) => element[0] === item)
}