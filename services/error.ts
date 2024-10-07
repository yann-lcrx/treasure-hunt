import { GameEntryErrorMessage, GameEntryErrorName } from "../constants/errors";
import { GameEntryError, GameEntryLine } from "../types";

export const addError = (previousErrors: GameEntryError[], newError: GameEntryError) => {
    previousErrors.push(newError)
}

export const buildNonNumberCoordinatesError = (errors: GameEntryError[], line: GameEntryLine) => {
    return addError(errors, {
        message: GameEntryErrorMessage.NON_NUMBER_COORDINATES,
        name: GameEntryErrorName.NON_NUMBER_COORDINATES,
        line
    })
}

export const buildOutOfBoundsError = (errors: GameEntryError[], line: GameEntryLine) => {
    return addError(errors, {
        message: GameEntryErrorMessage.ELEMENT_OUT_OF_BOUNDS,
        name: GameEntryErrorName.ELEMENT_OUT_OF_BOUNDS,
        line
    })
}