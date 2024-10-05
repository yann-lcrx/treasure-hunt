import { incompleteAdventurerErrorMessage, incompleteMountainErrorMessage, nonCardinalAdventurerErrorMessage, nonNumberAxisAdventurerErrorMessage, nonNumberAxisMountainErrorMessage } from "../../../constants/errors"
import { validateEntry } from "../../../services/validation"
import { incompleteAdventurerDataset, incompleteMountainDataset, nonCardinalAdventurerDataset, nonNumberXAxisAdventurerDataset, nonNumberXAxisMountainDataset, nonNumberYAxisAdventurerDataset, nonNumberYAxisMountainDataset } from "./mocks"

describe("the validation service - adventurers", () => {
    it("should throw an error if an adventurer's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteAdventurerDataset)).toThrow(incompleteAdventurerErrorMessage)
    })

    it("should throw an error if a mountain x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisAdventurerDataset)).toThrow(nonNumberAxisAdventurerErrorMessage)
    })

    it("should throw an error if a mountain y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisAdventurerDataset)).toThrow(nonNumberAxisAdventurerErrorMessage)
    })

    it("should throw an error if adventurer direction is not a cardinal point", () => {
        expect(() => validateEntry(nonCardinalAdventurerDataset)).toThrow(nonCardinalAdventurerErrorMessage)
    })
})

describe("the validation service - mountains", () => {
    it("should throw an error if a mountain's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteMountainDataset)).toThrow(incompleteMountainErrorMessage)
    })

    it("should throw an error if a mountain x axis is not a number", () => {
        expect(() => validateEntry(nonNumberXAxisMountainDataset)).toThrow(nonNumberAxisMountainErrorMessage)
    })

    it("should throw an error if a mountain y axis is not a number", () => {
        expect(() => validateEntry(nonNumberYAxisMountainDataset)).toThrow(nonNumberAxisMountainErrorMessage)
    })
})