import { FileElement } from "./constants/constants"
import { GameEntryData } from "./types"

export const getAllItemsOfType = (mapElements: GameEntryData, item: FileElement) => {
    return mapElements.filter((line) => line[0] === item)
}