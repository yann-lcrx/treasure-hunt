import { GameEntryErrorMessage, GameEntryErrorName } from "../constants/errors";
import { GameEntryError, GameEntryLine } from "../types";

export const addError = (previousErrors: GameEntryError[], newError: GameEntryError) => {
    previousErrors.push(newError)
}