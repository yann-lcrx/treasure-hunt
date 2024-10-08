import { getCsvString, getPostGameData } from "../../../services/postGame"
import { gameData, lines, stringResult } from "./mocks"

describe("the post game service", () => {
    it("should write the post game data as lines", () => {
        expect(getPostGameData(gameData)).toEqual(expect.arrayContaining(lines))
    })

    it("should return the string to be written to csv", () => {
        expect(getCsvString(gameData)).toEqual(stringResult)
    })
})