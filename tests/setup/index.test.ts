import { setupGame } from "../../services/setup"
import { adventurerData, dataset, mapData, mountainData, treasureData } from "./mocks"

describe("the setup game service", () => {
    it("should create a list of adventurers", () => {
        expect(setupGame(dataset)).toEqual(expect.objectContaining(adventurerData))
    })

    it("should create a list of mountains", () => {
        expect(setupGame(dataset)).toEqual(expect.objectContaining(mountainData))
    })

    it("should create a list of treasures", () => {
        expect(setupGame(dataset)).toEqual(expect.objectContaining(treasureData))
    })

    it("should create a map", () => {
        expect(setupGame(dataset)).toEqual(expect.objectContaining(mapData))
    })
})

