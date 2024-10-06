import { CardinalPoint, Instruction } from "./constants/constants"
import { GameEntryErrorMessage } from "./constants/errors"

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

export interface InGameAdventurer {
    name: string
    coordinates: {
        x: number
        y: number
    }
    direction: CardinalPoint
    treasureCount: number
    instructions: Instruction[]
}

export interface GameState {
    adventurers: InGameAdventurer[]
}