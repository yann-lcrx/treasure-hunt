import { FileElement } from "../constants/constants";
import { GameEntryData, GameState, InGameAdventurer, InGameMap, InGameMountain, InGameTreasure } from "../types";

export const getCsvString = (gameData: GameState) => {
    const data = getPostGameData(gameData)

    return data.reduce((acc, curr) => {
        return `${acc}\n${curr.join(" - ")}`
    }, "")
}

export const getPostGameData = (gameData: GameState): GameEntryData => {
    const { adventurers, treasures, mountains, map } = gameData

    const nonCollectedTreasures = treasures.filter((treasure) => treasure.quantity > 0)

    const adventurerLines = adventurers.map(getAdventurerLine)
    const mountainLines = mountains.map(getMountainLine)
    const treasureLines = nonCollectedTreasures.map(getTreasureLine)

    const mapLine = getMapLine(map)

    return [mapLine, ...mountainLines, ...treasureLines, ...adventurerLines]
}

const getAdventurerLine = (adventurer: InGameAdventurer) => {
    const { coordinates, name, treasureCount } = adventurer

    return [FileElement.ADVENTURER, name, coordinates.x.toString(), coordinates.y.toString(), treasureCount.toString()]
}

const getTreasureLine = (treasure: InGameTreasure) => {
    const { coordinates, quantity } = treasure

    return [FileElement.TREASURE, coordinates.x.toString(), coordinates.y.toString(), quantity.toString()]
}

const getMountainLine = (mountain: InGameMountain) => {
    const { coordinates } = mountain

    return [FileElement.MOUNTAIN, coordinates.x.toString(), coordinates.y.toString()]
}

const getMapLine = (map: InGameMap) => {
    return [FileElement.MAP, map.width.toString(), map.height.toString()]
}