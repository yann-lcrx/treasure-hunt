import { GameEntryErrorMessage } from "../constants/errors";
import { GameEntryLine } from "../types";

export const buildError = (line: GameEntryLine, message: GameEntryErrorMessage) => {
    return {
        line,
        message
    }
}