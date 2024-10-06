import { FileElement } from "./constants/constants"

export const getAllItemsOfType = (mapElements: string[][], item: FileElement) => {
    return mapElements.filter((line) => line[0] === item)
}