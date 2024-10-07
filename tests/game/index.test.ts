import { playGame } from "../../services/game"
import { collectTreasureInput, collectTreasureOutput, CrossingAdventurerEastInput, CrossingAdventurerEastOutput, CrossingAdventurerWestInput, CrossingAdventurerWestOutput, CrossingMountainNorthInput, CrossingMountainNorthOutput, CrossingMountainSouthInput, CrossingMountainSouthOutput, moveEastInput, moveEastOutput, moveNorthInput, moveNorthOutput, moveSouthInput, moveSouthOutput, moveWestInput, moveWestOutput, OOBEastInput, OOBEastOutput, OOBNorthInput, OOBNorthOutput, OOBSouthInput, OOBSouthOutput, OOBWestInput, OOBWestOutput, turnLeftInput, turnLeftOutput, turnRightInput, turnRightOutput } from "./mocks"

describe("the game service", () => {
    it("should move the adventurer south", () => {
        expect(playGame(moveSouthInput)).toEqual(moveSouthOutput)
    })

    it("should move the adventurer north", () => {
        expect(playGame(moveNorthInput)).toEqual(moveNorthOutput)
    })

    it("should move the adventurer west", () => {
        expect(playGame(moveWestInput)).toEqual(moveWestOutput)
    })

    it("should move the adventurer east", () => {
        expect(playGame(moveEastInput)).toEqual(moveEastOutput)
    })

    it("should prevent movement if adventurer were to go out of bounds to the north", () => {
        expect(playGame(OOBNorthInput)).toEqual(OOBNorthOutput)
    })

    it("should prevent movement if adventurer were to go out of bounds to the south", () => {
        expect(playGame(OOBSouthInput)).toEqual(OOBSouthOutput)
    })

    it("should prevent movement if adventurer were to go out of bounds to the west", () => {
        expect(playGame(OOBWestInput)).toEqual(OOBWestOutput)
    })

    it("should prevent movement if adventurer were to go out of bounds to the east", () => {
        expect(playGame(OOBEastInput)).toEqual(OOBEastOutput)
    })

    it("should prevent movement if adventurer were to cross a mountain south", () => {
        expect(playGame(CrossingMountainSouthInput)).toEqual(CrossingMountainSouthOutput)
    })

    it("should prevent movement if adventurer were to cross a mountain north", () => {
        expect(playGame(CrossingMountainNorthInput)).toEqual(CrossingMountainNorthOutput)
    })

    it("should prevent movement if adventurer were to cross an adventurer west", () => {
        expect(playGame(CrossingAdventurerWestInput)).toEqual(CrossingAdventurerWestOutput)
    })

    it("should prevent movement if adventurer were to cross an adventurer east", () => {
        expect(playGame(CrossingAdventurerEastInput)).toEqual(CrossingAdventurerEastOutput)
    })

    it("should turn player to the right", () => {
        expect(playGame(turnRightInput)).toEqual(turnRightOutput)
    })

    it("should turn player to the left", () => {
        expect(playGame(turnLeftInput)).toEqual(turnLeftOutput)
    })

    it.skip("should pick up the treasure twice", () => {
        expect(playGame(collectTreasureInput)).toEqual(collectTreasureOutput)
    })
})