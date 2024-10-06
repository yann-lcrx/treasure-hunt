import { GameEntryErrorMessage } from "../../../constants/errors"
import { validateEntry } from "../../../services/validation"
import { incompleteAdventurerDataset, incompleteMountainDataset, incompleteTreasureDataset, multiMapDataset, noMapDataset, nonCardinalAdventurerDataset, nonNumberCountTreasureDataset, nonNumberXAxisAdventurerDataset, nonNumberXAxisMapDataset, nonNumberXAxisMountainDataset, nonNumberXAxisTreasureDataset, nonNumberYAxisAdventurerDataset, nonNumberYAxisMapDataset, nonNumberYAxisMountainDataset, nonNumberYAxisTreasureDataset, smallMapDataset } from "./mocks"

describe("the validation service - map", () => {
    it("should throw an error if there is no map line", () => {
        expect(() => validateEntry(noMapDataset)).toThrow(GameEntryErrorMessage.INVALID_MAP)
    })

    it("should throw an error if there are more than one map lines", () => {
        expect(() => validateEntry(multiMapDataset)).toThrow(GameEntryErrorMessage.MULTI_MAP)
    })

    it("should throw an error if x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisMapDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_COORDINATES)
    })

    it("should throw an error if y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisMapDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_COORDINATES)
    })

    it("should throw an error if map size is inferior to 2x2", () => {
        expect(() => validateEntry(smallMapDataset)).toThrow(GameEntryErrorMessage.SMALL_MAP)
    })
})

describe("the validation service - adventurers", () => {
    it("should throw an error if an adventurer's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteAdventurerDataset)).toThrow(GameEntryErrorMessage.INVALID_ADVENTURER)
    })

    it("should throw an error if x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisAdventurerDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_COORDINATES)
    })

    it("should throw an error if y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisAdventurerDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_COORDINATES)
    })

    it("should throw an error if adventurer direction is not a cardinal point", () => {
        expect(() => validateEntry(nonCardinalAdventurerDataset)).toThrow(GameEntryErrorMessage.NON_CARDINAL_DIRECTION)
    })
})

describe("the validation service - treasures", () => {
    it("should throw an error if an treasure's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteTreasureDataset)).toThrow(GameEntryErrorMessage.INVALID_TREASURE)
    })

    it("should throw an error if x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisTreasureDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_COORDINATES)
    })

    it("should throw an error if y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisTreasureDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_COORDINATES)
    })

    it("should throw an error if treasure count is not a number", () => {
        expect(() => validateEntry(nonNumberCountTreasureDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_TREASURE_QUANTITY)
    })
})

describe("the validation service - mountains", () => {
    it("should throw an error if a mountain's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteMountainDataset)).toThrow(GameEntryErrorMessage.INVALID_MOUNTAIN)
    })

    it("should throw an error if a mountain x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisMountainDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_COORDINATES)
    })

    it("should throw an error if a mountain y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisMountainDataset)).toThrow(GameEntryErrorMessage.NON_NUMBER_COORDINATES)
    })
})