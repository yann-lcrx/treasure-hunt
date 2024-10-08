import { runGame } from "../../services/game"
import { collectTreasureInput, collectTreasureOutput, conflictingMovementsInput, conflictingMovementsOutput, CrossingAdventurerEastInput, CrossingAdventurerEastOutput, CrossingAdventurerWestInput, CrossingAdventurerWestOutput, CrossingMountainNorthInput, CrossingMountainNorthOutput, CrossingMountainSouthInput, CrossingMountainSouthOutput, moveEastInput, moveEastOutput, moveNorthInput, moveNorthOutput, moveSouthInput, moveSouthOutput, moveWestInput, moveWestOutput, OOBEastInput, OOBEastOutput, OOBNorthInput, OOBNorthOutput, OOBSouthInput, OOBSouthOutput, OOBWestInput, OOBWestOutput, turnLeftInput, turnLeftOutput, turnRightInput, turnRightOutput } from "./mocks"

describe("the game service", () => {
    it("should move the adventurer south", () => {
        expect(runGame(moveSouthInput)).toEqual(moveSouthOutput)
    })

    it("should move the adventurer north", () => {
        expect(runGame(moveNorthInput)).toEqual(moveNorthOutput)
    })

    it("should move the adventurer west", () => {
        expect(runGame(moveWestInput)).toEqual(moveWestOutput)
    })

    it("should move the adventurer east", () => {
        expect(runGame(moveEastInput)).toEqual(moveEastOutput)
    })

    it("should prevent movement if adventurer were to go out of bounds to the north", () => {
        expect(runGame(OOBNorthInput)).toEqual(OOBNorthOutput)
    })

    it("should prevent movement if adventurer were to go out of bounds to the south", () => {
        expect(runGame(OOBSouthInput)).toEqual(OOBSouthOutput)
    })

    it("should prevent movement if adventurer were to go out of bounds to the west", () => {
        expect(runGame(OOBWestInput)).toEqual(OOBWestOutput)
    })

    it("should prevent movement if adventurer were to go out of bounds to the east", () => {
        expect(runGame(OOBEastInput)).toEqual(OOBEastOutput)
    })

    it("should prevent movement if adventurer were to cross a mountain south", () => {
        expect(runGame(CrossingMountainSouthInput)).toEqual(CrossingMountainSouthOutput)
    })

    it("should prevent movement if adventurer were to cross a mountain north", () => {
        expect(runGame(CrossingMountainNorthInput)).toEqual(CrossingMountainNorthOutput)
    })

    it("should prevent movement if adventurer were to cross an adventurer west", () => {
        expect(runGame(CrossingAdventurerWestInput)).toEqual(CrossingAdventurerWestOutput)
    })

    it("should prevent movement if adventurer were to cross an adventurer east", () => {
        expect(runGame(CrossingAdventurerEastInput)).toEqual(CrossingAdventurerEastOutput)
    })

    it("should turn player to the right", () => {
        expect(runGame(turnRightInput)).toEqual(turnRightOutput)
    })

    it("should turn player to the left", () => {
        expect(runGame(turnLeftInput)).toEqual(turnLeftOutput)
    })

    it("should pick up the treasure twice", () => {
        expect(runGame(collectTreasureInput)).toEqual(collectTreasureOutput)
    })

    it("should only move the first player", () => {
        expect(runGame(conflictingMovementsInput)).toEqual(conflictingMovementsOutput)
    })
})