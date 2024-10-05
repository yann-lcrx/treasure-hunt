import { FileElement } from "../constants/constants"
import { incompleteAdventurerErrorMessage, incompleteMountainErrorMessage, nonNumberAxisMountainErrorMessage } from "../constants/errors"

export const validateEntry = (mapElements: string[][]) => {
    console.log("hello world")

    const mountains = getMountains(mapElements)

    validateMountains(mountains)

    throw incompleteAdventurerErrorMessage
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

const getMountains = (mapElements: string[][]) => {
    return mapElements.filter((element) => element[0] === FileElement.MOUNTAIN)
}