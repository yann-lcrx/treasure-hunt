import { CardinalPoint, FileElement, Instruction } from "../../constants/constants"
import { GameEntryData, GameState } from "../../types"

export const dataset: GameEntryData = [
    [FileElement.MAP, "3", "4"],
    [FileElement.MOUNTAIN, "1", "0"],
    [FileElement.MOUNTAIN, "2", "1"],
    [FileElement.TREASURE, "0", "3", "2"],
    [FileElement.TREASURE, "1", "3", "3"],
    [FileElement.ADVENTURER, "Lara", "1", "1", CardinalPoint.SOUTH, "ADA"],
    [FileElement.ADVENTURER, "Indiana", "2", "2", CardinalPoint.WEST, "GAA"]
]

export const mapData: Pick<GameState, "map"> = {
    map: {
        width: 3,
        height: 4,
    }
}

export const treasureData: Pick<GameState, "treasures"> = {
    treasures: [
        {
            coordinates: {
                x: 0,
                y: 3,
            },
            quantity: 2
        },
        {
            coordinates: {
                x: 1,
                y: 3,
            },
            quantity: 3
        },
    ]
}

export const mountainData: Pick<GameState, "mountains"> = {
    mountains: [
        {
            coordinates: {
                x: 1,
                y: 0,
            },
        },
        {
            coordinates: {
                x: 2,
                y: 1,
            },
        },
    ]
}

export const adventurerData: Pick<GameState, "adventurers"> = {
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

