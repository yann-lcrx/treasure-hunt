import { GameEntryErrorMessage, GameEntryErrorName } from "../../../constants/errors"
import { GameEntryData, GameEntryError } from "../../../types"

// map
export const noMapDataset: GameEntryData = [
    ["A", "Spike", "5", "5", "S", "AAA"],
    ["M", "3", "2"],
    ["T", "4", "5", "1"],
]

export const noMapError: GameEntryError = {
    message: GameEntryErrorMessage.INVALID_MAP,
    name: GameEntryErrorName.INVALID_MAP
}
export const multiMapDataset: GameEntryData = [
    ["C", "2", "3"],
    ["C", "6", "4"],
    ["A", "Spike", "5", "5", "S", "AAA"],
    ["M", "3", "2"],
    ["T", "4", "5", "1"],
]

export const multiMapError: GameEntryError = {
    message: GameEntryErrorMessage.MULTI_MAP,
    name: GameEntryErrorName.MULTI_MAP,
}

const nonNumberXAxisMapLine = ["C", "A", "2"]

export const nonNumberXAxisMapDataset: GameEntryData = [
    nonNumberXAxisMapLine
]

export const nonNumberXAxisMapError: GameEntryError = {
    line: nonNumberXAxisMapLine,
    message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
    name: GameEntryErrorName.NON_NUMBER_COORDINATES
}

const nonNumberYAxisMapLine = ["C", "4", "E"]

export const nonNumberYAxisMapDataset: GameEntryData = [
    ["C", "4", "E"]
]

export const nonNumberYAxisMapError: GameEntryError = {
    line: nonNumberYAxisMapLine,
    message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
    name: GameEntryErrorName.NON_NUMBER_COORDINATES
}

const smallMapLine = ["C", "1", "2"]

export const smallMapDataset: GameEntryData = [
    smallMapLine
]

export const smallMapError: GameEntryError = {
    line: smallMapLine,
    message: GameEntryErrorMessage.SMALL_MAP,
    name: GameEntryErrorName.SMALL_MAP
}

// adventurers

const regularMap = ["C", "2", "3"]

const incompleteAdventurer = ["A", "2", "3"]

export const incompleteAdventurerDataset: GameEntryData = [
    regularMap,
    incompleteAdventurer
]

export const incompleteAdventurerError: GameEntryError = {
    line: incompleteAdventurer,
    message: GameEntryErrorMessage.INVALID_ADVENTURER,
    name: GameEntryErrorName.INVALID_ADVENTURER
}

const nonNumberXAxisAdventurer = ["A", "Spike", "A", "5", "S", "AAA"]

export const nonNumberXAxisAdventurerDataset: GameEntryData = [
    regularMap,
    nonNumberXAxisAdventurer
]

export const nonNumberXAxisAdventurerError: GameEntryError = {
    line: nonNumberXAxisAdventurer,
    message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
    name: GameEntryErrorName.NON_NUMBER_COORDINATES
}

const nonNumberYAxisAdventurer = ["A", "Jet", "2", "Z", "S", "AAGA"]

export const nonNumberYAxisAdventurerDataset: GameEntryData = [
    regularMap,
    ["A", "Jet", "2", "Z", "S", "AAGA"]
]

export const nonNumberYAxisAdventurerError: GameEntryError = {
    line: nonNumberYAxisAdventurer,
    message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
    name: GameEntryErrorName.NON_NUMBER_COORDINATES
}

const nonCardinalAdventurer = ["A", "Jet", "2", "1", "R", "AAGA"]

export const nonCardinalAdventurerDataset: GameEntryData = [
    regularMap,
    nonCardinalAdventurer
]

export const nonCardinalAdventurerError: GameEntryError = {
    line: nonCardinalAdventurer,
    message: GameEntryErrorMessage.NON_CARDINAL_DIRECTION,
    name: GameEntryErrorName.NON_CARDINAL_DIRECTION
}

// mountains
const incompleteMountain = ["M", "3"]

export const incompleteMountainDataset: GameEntryData = [
    regularMap,
    incompleteMountain
]

export const incompleteMountainError: GameEntryError = {
    line: incompleteMountain,
    message: GameEntryErrorMessage.INVALID_MOUNTAIN,
    name: GameEntryErrorName.INVALID_MOUNTAIN
}

const nonNumberXAxisMountain = ["M", "A", "5"]

export const nonNumberXAxisMountainDataset: GameEntryData = [
    regularMap,
    nonNumberXAxisMountain
]

export const nonNumberXAxisMountainError: GameEntryError = {
    line: nonNumberXAxisMountain,
    message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
    name: GameEntryErrorName.NON_NUMBER_COORDINATES
}

const nonNumberYAxisMountain = ["M", "2", "Y"]

export const nonNumberYAxisMountainDataset: GameEntryData = [
    regularMap,
    nonNumberYAxisMountain
]

export const nonNumberYAxisMountainError: GameEntryError = {
    line: nonNumberYAxisMountain,
    message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
    name: GameEntryErrorName.NON_NUMBER_COORDINATES
}

// endregion

// treasures
const incompleteTreasure = ["T", "2"]

export const incompleteTreasureDataset: GameEntryData = [
    regularMap,
    incompleteTreasure
]

export const incompleteTreasureError: GameEntryError = {
    line: incompleteTreasure,
    message: GameEntryErrorMessage.INVALID_TREASURE,
    name: GameEntryErrorName.INVALID_TREASURE
}

const nonNumberXAxisTreasure = ["T", "A", "5", "1"]

export const nonNumberXAxisTreasureDataset: GameEntryData = [
    regularMap,
    nonNumberXAxisTreasure
]

export const nonNumberXAxisTreasureError: GameEntryError = {
    line: nonNumberXAxisTreasure,
    message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
    name: GameEntryErrorName.NON_NUMBER_COORDINATES
}

const nonNumberYAxisTreasure = ["T", "2", "Y", "1"]

export const nonNumberYAxisTreasureDataset: GameEntryData = [
    regularMap,
    nonNumberYAxisTreasure
]

export const nonNumberYAxisTreasureError: GameEntryError = {
    line: nonNumberYAxisTreasure,
    message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
    name: GameEntryErrorName.NON_NUMBER_COORDINATES
}

const nonNumberTreasureCount = ["T", "2", "1", "V"]

export const nonNumberCountTreasureDataset: GameEntryData = [
    regularMap,
    nonNumberTreasureCount
]

export const nonNumberCountTreasureError: GameEntryError = {
    line: nonNumberTreasureCount,
    message: GameEntryErrorMessage.NON_NUMBER_TREASURE_QUANTITY,
    name: GameEntryErrorName.NON_NUMBER_TREASURE_QUANTITY
}

// endregion

export const validEntryDataset = [
    ['C​', '3', '4'],
    ['M​', '1', '0'],
    ['M​', '2', '1'],
    ['T​', '0', '3', '2'],
    ['T​', '1', '3', '3'],
    ['A​', 'Lara', '1', '1', 'S', 'AADADAGGA']
]