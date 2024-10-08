import { CardinalPoint, FileElement } from "../../../constants/constants"
import { GameEntryData, GameState } from "../../../types"

export const gameData: GameState = {
    map: { width: 3, height: 4 },
    adventurers: [
        {
            name: 'Lara',
            coordinates: { x: 0, y: 3 },
            direction: CardinalPoint.SOUTH,
            treasureCount: 3,
            instructions: []
        }
    ],
    mountains: [{ coordinates: { x: 1, y: 0 } }, { coordinates: { x: 2, y: 1 } }],
    treasures: [
        { coordinates: { x: 1, y: 3 }, quantity: 0 },
        { coordinates: { x: 0, y: 3 }, quantity: 2 }
    ]
}

export const lines = [
    [FileElement.MAP, "3", "4"],
    [FileElement.ADVENTURER, "Lara", "0", "3", "3"],
    [FileElement.MOUNTAIN, "1", "0"],
    [FileElement.MOUNTAIN, "2", "1"],
    [FileElement.TREASURE, "0", "3", "2"],
]

export const stringResult = `${FileElement.MAP} - 3 - 4
${FileElement.MOUNTAIN} - 1 - 0
${FileElement.MOUNTAIN} - 2 - 1
${FileElement.TREASURE} - 0 - 3 - 2
${FileElement.ADVENTURER} - Lara - 0 - 3 - 3`