import { validateEntry } from "../../../services/validation"
import { incompleteAdventurerDataset, incompleteAdventurerError, incompleteMountainDataset, incompleteMountainError, incompleteTreasureDataset, incompleteTreasureError, multiMapDataset, multiMapError, noMapDataset, noMapError, nonCardinalAdventurerDataset, nonCardinalAdventurerError, nonNumberCountTreasureDataset, nonNumberCountTreasureError, nonNumberXAxisAdventurerDataset, nonNumberXAxisAdventurerError, nonNumberXAxisMapDataset, nonNumberXAxisMapError, nonNumberXAxisMountainDataset, nonNumberXAxisMountainError, nonNumberXAxisTreasureDataset, nonNumberXAxisTreasureError, nonNumberYAxisAdventurerDataset, nonNumberYAxisAdventurerError, nonNumberYAxisMapDataset, nonNumberYAxisMapError, nonNumberYAxisMountainDataset, nonNumberYAxisMountainError, nonNumberYAxisTreasureDataset, nonNumberYAxisTreasureError, smallMapDataset, smallMapError } from "./mocks"

describe("the validation service - map", () => {

    it("should throw an error if there is no map line", () => {
        expect(validateEntry(noMapDataset)).toEqual(expect.arrayContaining([noMapError]))
    })

    it("should throw an error if there are more than one map lines", () => {
        expect(validateEntry(multiMapDataset)).toEqual(expect.arrayContaining([multiMapError]))
    })

    it("should throw an error if x axis is not a number", () => {
        expect(validateEntry(nonNumberXAxisMapDataset)).toEqual(expect.arrayContaining([nonNumberXAxisMapError]))
    })

    it("should throw an error if y axis is not a number", () => {
        expect(validateEntry(nonNumberYAxisMapDataset)).toEqual(expect.arrayContaining([nonNumberYAxisMapError]))
    })

    it("should throw an error if map size is inferior to 2x2", () => {
        expect(validateEntry(smallMapDataset)).toEqual(expect.arrayContaining([smallMapError]))
    })
})

describe("the validation service - adventurers", () => {
    it("should throw an error if an adventurer's line doesn't have all values", () => {
        expect(validateEntry(incompleteAdventurerDataset)).toEqual(expect.arrayContaining([incompleteAdventurerError]))
    })

    it("should throw an error if x axis is not a number", () => {
        expect(validateEntry(nonNumberXAxisAdventurerDataset)).toEqual(expect.arrayContaining([nonNumberXAxisAdventurerError]))
    })

    it("should throw an error if y axis is not a number", () => {
        expect(validateEntry(nonNumberYAxisAdventurerDataset)).toEqual(expect.arrayContaining([nonNumberYAxisAdventurerError]))
    })

    it("should throw an error if adventurer direction is not a cardinal point", () => {
        expect(validateEntry(nonCardinalAdventurerDataset)).toEqual(expect.arrayContaining([nonCardinalAdventurerError]))
    })
})

describe("the validation service - treasures", () => {
    it("should throw an error if an treasure's line doesn't have all values", () => {
        expect(validateEntry(incompleteTreasureDataset)).toEqual(expect.arrayContaining([incompleteTreasureError]))
    })

    it("should throw an error if x axis is not a number", () => {
        expect(validateEntry(nonNumberXAxisTreasureDataset)).toEqual(expect.arrayContaining([nonNumberXAxisTreasureError]))
    })

    it("should throw an error if y axis is not a number", () => {
        expect(validateEntry(nonNumberYAxisTreasureDataset)).toEqual(expect.arrayContaining([nonNumberYAxisTreasureError]))
    })

    it("should throw an error if treasure count is not a number", () => {
        expect(validateEntry(nonNumberCountTreasureDataset)).toEqual(expect.arrayContaining([nonNumberCountTreasureError]))
    })
})

describe("the validation service - mountains", () => {
    it("should throw an error if a mountain's line doesn't have all values", () => {
        expect(validateEntry(incompleteMountainDataset)).toEqual(expect.arrayContaining([incompleteMountainError]))
    })

    it("should throw an error if a mountain x axis is not a number", () => {
        expect(validateEntry(nonNumberXAxisMountainDataset)).toEqual(expect.arrayContaining([nonNumberXAxisMountainError]))
    })

    it("should throw an error if a mountain y axis is not a number", () => {
        expect(validateEntry(nonNumberYAxisMountainDataset)).toEqual(expect.arrayContaining([nonNumberYAxisMountainError]))
    })
})