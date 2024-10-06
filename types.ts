import { CardinalPoint, Instruction } from "./constants/constants"
import { GameEntryErrorMessage, GameSetupErrorMessage } from "./constants/errors"

interface MapElement {
    xAxis: number
    yAxis: number
}

export interface Adventurer extends MapElement {
    name: string,
    orientation: CardinalPoint,
    treasureCount: number,
}

export interface Mountain extends MapElement { }

export interface Treasure extends MapElement {
    count: number,
}

export interface Map {
    width: number,
    height: number,
}

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

export interface GameState {
    map: InGameMap
    adventurers: InGameAdventurer[]
    mountains: InGameMountain[]
    treasures: InGameTreasure[]
    errors: GameSetupError[]
}