import { incompleteAdventurerErrorMessage, incompleteMountainErrorMessage, incompleteTreasureErrorMessage, invalidMapErrorMessage, multiMapErrorMessage, nonCardinalAdventurerErrorMessage, nonNumberCoordinatesErrorMessage, nonNumberCountTreasureErrorMessage, smallMapErrorMessage } from "../../../constants/errors"
import { validateEntry } from "../../../services/validation"
import { incompleteAdventurerDataset, incompleteMountainDataset, incompleteTreasureDataset, multiMapDataset, noMapDataset, nonCardinalAdventurerDataset, nonNumberCountTreasureDataset, nonNumberXAxisAdventurerDataset, nonNumberXAxisMapDataset, nonNumberXAxisMountainDataset, nonNumberXAxisTreasureDataset, nonNumberYAxisAdventurerDataset, nonNumberYAxisMapDataset, nonNumberYAxisMountainDataset, nonNumberYAxisTreasureDataset, smallMapDataset } from "./mocks"

describe("the validation service - map", () => {
    it("should throw an error if there is no map line", () => {
        expect(() => validateEntry(noMapDataset)).toThrow(invalidMapErrorMessage)
    })

    it("should throw an error if there are more than one map lines", () => {
        expect(() => validateEntry(multiMapDataset)).toThrow(multiMapErrorMessage)
    })

    it("should throw an error if x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisMapDataset)).toThrow(nonNumberCoordinatesErrorMessage)
    })

    it("should throw an error if y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisMapDataset)).toThrow(nonNumberCoordinatesErrorMessage)
    })

    it("should throw an error if map size is inferior to 2x2", () => {
        expect(() => validateEntry(smallMapDataset)).toThrow(smallMapErrorMessage)
    })
})

describe("the validation service - adventurers", () => {
    it("should throw an error if an adventurer's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteAdventurerDataset)).toThrow(incompleteAdventurerErrorMessage)
    })

    it("should throw an error if x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisAdventurerDataset)).toThrow(nonNumberCoordinatesErrorMessage)
    })

    it("should throw an error if y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisAdventurerDataset)).toThrow(nonNumberCoordinatesErrorMessage)
    })

    it("should throw an error if adventurer direction is not a cardinal point", () => {
        expect(() => validateEntry(nonCardinalAdventurerDataset)).toThrow(nonCardinalAdventurerErrorMessage)
    })
})

describe("the validation service - treasures", () => {
    it("should throw an error if an treasure's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteTreasureDataset)).toThrow(incompleteTreasureErrorMessage)
    })

    it("should throw an error if x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisTreasureDataset)).toThrow(nonNumberCoordinatesErrorMessage)
    })

    it("should throw an error if y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisTreasureDataset)).toThrow(nonNumberCoordinatesErrorMessage)
    })

    it("should throw an error if treasure count is not a number", () => {
        expect(() => validateEntry(nonNumberCountTreasureDataset)).toThrow(nonNumberCountTreasureErrorMessage)
    })
})

describe("the validation service - mountains", () => {
    it("should throw an error if a mountain's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteMountainDataset)).toThrow(incompleteMountainErrorMessage)
    })

    it("should throw an error if a mountain x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisMountainDataset)).toThrow(nonNumberCoordinatesErrorMessage)
    })

    it("should throw an error if a mountain y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisMountainDataset)).toThrow(nonNumberCoordinatesErrorMessage)
    })
})