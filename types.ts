import { CardinalPoint } from "./constants/constants"

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

export type GameEntryData = string[][]