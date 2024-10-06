import { setupGame } from "../../../services/setup"
import { twoAdventurerData, twoAdventurerEntryDataset } from "./mocks"

describe("the setup game service", () => {
    it("should create a list of players", () => {
        expect(setupGame(twoAdventurerEntryDataset)).toEqual(expect.objectContaining(twoAdventurerData))
    })
})