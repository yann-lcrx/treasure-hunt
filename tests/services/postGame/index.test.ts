import { getPostGameData } from "../../../services/postGame"
import { gameData, lines } from "./mocks"

describe("the post game service", () => {
    it("should write the post game data", () => {
        expect(getPostGameData(gameData)).toEqual(expect.arrayContaining(lines))
    })
})