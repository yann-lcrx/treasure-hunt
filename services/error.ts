import { GameEntryError } from "../types";

export const addError = (previousErrors: GameEntryError[], newError: GameEntryError) => {
    previousErrors.push(newError)
}