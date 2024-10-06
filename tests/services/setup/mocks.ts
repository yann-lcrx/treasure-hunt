import { CardinalPoint, FileElement, Instruction } from "../../../constants/constants";
import { GameEntryData, GameState, InGameAdventurer } from "../../../types";

export const twoAdventurerEntryDataset: GameEntryData = [
    ["C​", "3", "4"],
    ["M​", "1", "0"],
    ["M​", "2", "1"],
    ["T​", "0", "3", "2"],
    ["T​", "1", "3", "3"],
    [FileElement.ADVENTURER, "Lara", "1", "1", "S", "ADA"],
    [FileElement.ADVENTURER, "Indiana", "2", "2", "W", "GAA"]
]

export const twoAdventurerData: Pick<GameState, "adventurers"> = {
    adventurers: [
        {
            name: "Lara",
            coordinates: {
                x: 1,
                y: 1,
            },
            direction: CardinalPoint.SOUTH,
            treasureCount: 0,
            instructions: [
                Instruction.FORWARD,
                Instruction.RIGHT,
                Instruction.FORWARD,
            ]
        },
        {
            name: "Indiana",
            coordinates: {
                x: 2,
                y: 2,
            },
            direction: CardinalPoint.WEST,
            treasureCount: 0,
            instructions: [
                Instruction.LEFT,
                Instruction.FORWARD,
                Instruction.FORWARD,
            ]
        },
    ]
}