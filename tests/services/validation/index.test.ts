import { incompleteAdventurerErrorMessage, incompleteMountainErrorMessage, nonNumberAxisMountainErrorMessage } from "../../../constants/errors"
import { validateEntry } from "../../../services/validation"
import { incompleteAdventurerDataset, incompleteMountainDataset, nonNumberXAxisMountainDataset, nonNumberYAxisMountainDataset } from "./mocks"

describe("the validation service", () => {
    it("should throw an error if an adventurer's line doesn't have all values", () => {
        expect(() => validateEntry(incompleteAdventurerDataset)).toThrow(incompleteAdventurerErrorMessage)
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