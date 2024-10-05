import { GameEntryData } from "../../../types"

const dataWithNoMapEntry: GameEntryData = [
    []
]

export const incompleteAdventurerDataset: GameEntryData = [
    ["A", "2", "3"]
]

export const incompleteMountainDataset: GameEntryData = [
    ["M", "3"]
]

export const nonNumberXAxisMountainDataset: GameEntryData = [
    ["M", "A", "5"]
]

export const nonNumberYAxisMountainDataset: GameEntryData = [
    ["M", "2", "Y"]
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

