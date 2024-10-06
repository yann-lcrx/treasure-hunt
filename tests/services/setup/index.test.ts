import { setupGame } from "../../../services/setup"
import { twoAdventurerData, dataset, twoMountainData } from "./mocks"

describe("the setup game service", () => {
    it("should create a list of adventurers", () => {
        expect(setupGame(dataset)).toEqual(expect.objectContaining(twoAdventurerData))
    })

    it("should create a list of mountains", () => {
        expect(setupGame(dataset)).toEqual(expect.objectContaining(twoMountainData))
    })
})