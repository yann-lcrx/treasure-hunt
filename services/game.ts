import { CardinalPoint, Instruction } from "../constants/constants"
import { Coordinates, GameState, InGameAdventurer, InGameMap, InGameMountain } from "../types"

export const playGame = (gameData: GameState) => {
    const { map, mountains } = gameData

    // determining the number of turns based on the adventurer with the highest number of instructions
    const totalTurns = Math.max(...(gameData.adventurers.map(adventurer => adventurer.instructions.length)))

    const turnArray = Array.apply(null, Array(totalTurns))

    const endGameData = (new Array(turnArray)).reduce<GameState>((gameState, curr, turn) => {
        const { adventurers } = gameState

        const updatedAdventurers = adventurers.map((adventurer) => {
            if (adventurer.instructions[turn] === Instruction.FORWARD) {
                return attemptMoveForward(adventurer, map, mountains, adventurers)
            }

            return adventurer
        })

        return { ...gameState, adventurers: updatedAdventurers }
    }, gameData)

    return endGameData
}



const turnRight = () => {

}

const turnLeft = () => {

}

const attemptMoveForward = (
    adventurer: InGameAdventurer,
    map: InGameMap,
    mountains: InGameMountain[],
    adventurers: InGameAdventurer[]
): InGameAdventurer => {
    const { direction, coordinates } = adventurer
    const { x, y } = coordinates

    if (direction === CardinalPoint.SOUTH) {
        const expectedCoordinates = {
            x, y: y + 1
        }

        if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers)) {
            return adventurer
        }

        return {
            ...adventurer,
            coordinates: {
                ...coordinates,
                y: (y < map.height - 1 ? y + 1 : y)
            }
        }
    }

    if (direction === CardinalPoint.NORTH) {
        const expectedCoordinates = {
            x, y: y - 1
        }

        if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers)) {
            return adventurer
        }

        return {
            ...adventurer,
            coordinates: {
                ...coordinates,
                y: (y > 0 ? y - 1 : y)
            }
        }
    }

    if (direction === CardinalPoint.EAST) {
        const expectedCoordinates = {
            x: x + 1, y
        }

        if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers)) {
            return adventurer
        }

        return {
            ...adventurer,
            coordinates: {
                ...coordinates,
                x: x < map.width - 1 ? x + 1 : x
            }
        }
    }

    if (direction === CardinalPoint.WEST) {
        const expectedCoordinates = {
            x: x - 1, y
        }

        if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers)) {
            return adventurer
        }

        return {
            ...adventurer,
            coordinates: {
                ...coordinates,
                x: x > 0 ? x - 1 : x
            }
        }
    }

    return adventurer
}

const isPositionOccupied = (
    coordinates: Coordinates,
    adventurerName: string,
    mountains: InGameMountain[],
    adventurers: InGameAdventurer[]) => {
    return mountains.find((mountain) => {
        return mountain.coordinates.x === coordinates.x && mountain.coordinates.y === coordinates.y
    }) || adventurers.find((adventurer) => {
        return adventurer.name !== adventurerName
            && adventurer.coordinates.x === coordinates.x
            && adventurer.coordinates.y === coordinates.y
    })
}