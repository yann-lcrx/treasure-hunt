import { GameEntryData } from "../../../types"

// map
export const noMapDataset: GameEntryData = [
    ["A", "Spike", "5", "5", "S", "AAA"],
    ["M", "3", "2"],
    ["T", "4", "5", "1"],
]

export const multiMapDataset: GameEntryData = [
    ["C", "2", "3"],
    ["C", "6", "4"],
    ["A", "Spike", "5", "5", "S", "AAA"],
    ["M", "3", "2"],
    ["T", "4", "5", "1"],
]

export const nonNumberXAxisMapDataset: GameEntryData = [
    ["C", "A", "2"]
]

export const nonNumberYAxisMapDataset: GameEntryData = [
    ["C", "4", "E"]
]

export const smallMapDataset: GameEntryData = [
    ["C", "1", "2"]
]

// adventurers
export const incompleteAdventurerDataset: GameEntryData = [
    ["C", "2", "3"],
    ["A", "2", "3"]
]

export const nonNumberXAxisAdventurerDataset: GameEntryData = [
    ["C", "2", "3"],
    ["A", "Spike", "A", "5", "S", "AAA"]
]

export const nonNumberYAxisAdventurerDataset: GameEntryData = [
    ["C", "2", "3"],
    ["A", "Jet", "2", "Z", "S", "AAGA"]
]

export const nonCardinalAdventurerDataset: GameEntryData = [
    ["C", "2", "3"],
    ["A", "Jet", "2", "1", "R", "AAGA"]
]
// endregion

// mountains
export const incompleteMountainDataset: GameEntryData = [
    ["C", "2", "3"],
    ["M", "3"]
]

export const nonNumberXAxisMountainDataset: GameEntryData = [
    ["C", "2", "3"],
    ["M", "A", "5"]
]

export const nonNumberYAxisMountainDataset: GameEntryData = [
    ["C", "2", "3"],
    ["M", "2", "Y"]
]
// endregion

// treasures
export const incompleteTreasureDataset: GameEntryData = [
    ["C", "2", "3"],
    ["T", "2"]
]

export const nonNumberXAxisTreasureDataset: GameEntryData = [
    ["C", "2", "3"],
    ["T", "A", "5", "1"]
]

export const nonNumberYAxisTreasureDataset: GameEntryData = [
    ["C", "2", "3"],
    ["T", "2", "Y", "1"]
]

export const nonNumberCountTreasureDataset: GameEntryData = [
    ["C", "2", "3"],
    ["T", "2", "1", "V"]
]
// endregion