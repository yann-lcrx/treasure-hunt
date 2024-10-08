import { CardinalPoint, Instruction } from "./constants/constants"
import { GameEntryErrorMessage, GameSetupErrorMessage } from "./constants/errors"

export type GameEntryLine = string[]

export type GameEntryData = GameEntryLine[]

export interface GameEntryError extends Error {
    line?: GameEntryLine
    message: GameEntryErrorMessage
}

export interface GameSetupError extends Error {
    message: GameSetupErrorMessage
}

export interface Coordinates {
    x: number
    y: number
}

interface InGameElement {
    coordinates: Coordinates
}
export interface InGameAdventurer extends InGameElement {
    name: string
    direction: CardinalPoint
    treasureCount: number
    instructions: Instruction[]
}

export interface InGameMountain extends InGameElement { }

export interface InGameTreasure extends InGameElement {
    quantity: number
}

export interface InGameMap {
    width: number,
    height: number
}

export interface MovementData {
    adventurer: InGameAdventurer,
    collectedTreasure?: InGameTreasure
}

export interface GameState {
    map: InGameMap
    adventurers: InGameAdventurer[]
    mountains: InGameMountain[]
    treasures: InGameTreasure[]
}