import { GameEntryData } from "../../../types"

const dataWithNoMapEntry: GameEntryData = [
    []
]

// adventurers
export const incompleteAdventurerDataset: GameEntryData = [
    ["A", "2", "3"]
]

export const nonNumberXAxisAdventurerDataset: GameEntryData = [
    ["A", "Spike", "A", "5", "S", "AAA"]
]

export const nonNumberYAxisAdventurerDataset: GameEntryData = [
    ["A", "Jet", "2", "Z", "S", "AAGA"]
]

export const nonCardinalAdventurerDataset: GameEntryData = [
    ["A", "Jet", "2", "1", "R", "AAGA"]
]
// endregion

// mountains
export const incompleteMountainDataset: GameEntryData = [
    ["M", "3"]
]

export const nonNumberXAxisMountainDataset: GameEntryData = [
    ["M", "A", "5"]
]

export const nonNumberYAxisMountainDataset: GameEntryData = [
    ["M", "2", "Y"]
]
// endregion

// treasures
export const incompleteTreasureDataset: GameEntryData = [
    ["T", "2"]
]

export const nonNumberXAxisTreasureDataset: GameEntryData = [
    ["T", "A", "5", "1"]
]

export const nonNumberYAxisTreasureDataset: GameEntryData = [
    ["T", "2", "Y", "1"]
]

export const nonNumberCountTreasureDataset: GameEntryData = [
    ["T", "2", "1", "V"]
]
// endregion