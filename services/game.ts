import { CardinalPoint, Instruction } from "../constants/constants"
import { Coordinates, GameState, InGameAdventurer, InGameMap, InGameMountain } from "../types"

export const playGame = (gameData: GameState) => {
    // determining the number of turns based on the adventurer with the highest number of instructions
    const totalTurns = Math.max(...(gameData.adventurers.map(adventurer => adventurer.instructions.length)))

    const turnArray = Array.apply(null, Array(totalTurns))

    const endGameData = (new Array(turnArray)).reduce<GameState>((gameState, curr, turn) => {
        const { adventurers } = gameState

        const updatedAdventurers = adventurers.map((adventurer) => {
            return handleInstructions(adventurer, gameState, turn)
        })

        return { ...gameState, adventurers: updatedAdventurers }
    }, gameData)

    return endGameData
}

const handleInstructions = (
    adventurer: InGameAdventurer,
    gameState: GameState,
    turn: number) => {
    if (adventurer.instructions[turn] === Instruction.FORWARD) {
        return attemptMoveForward(adventurer, gameState.map, gameState.mountains, gameState.adventurers)
    }

    if (adventurer.instructions[turn] === Instruction.RIGHT) {
        return turnRight(adventurer)
    }

    if (adventurer.instructions[turn] === Instruction.LEFT) {
        return turnLeft(adventurer)
    }

    return adventurer
}

const turnRight = (adventurer: InGameAdventurer): InGameAdventurer => {
    const clockwiseCardinalPoints = Object.values(CardinalPoint)
    const directionIndex = clockwiseCardinalPoints.indexOf(adventurer.direction)

    return {
        ...adventurer,
        direction: (directionIndex < clockwiseCardinalPoints.length - 1)
            ? clockwiseCardinalPoints[directionIndex + 1]
            : clockwiseCardinalPoints[0]
    }
}

const turnLeft = (adventurer: InGameAdventurer): InGameAdventurer => {
    const clockwiseCardinalPoints = Object.values(CardinalPoint)
    const directionIndex = clockwiseCardinalPoints.indexOf(adventurer.direction)

    return {
        ...adventurer,
        direction: (directionIndex > 0)
            ? clockwiseCardinalPoints[directionIndex - 1]
            : clockwiseCardinalPoints[clockwiseCardinalPoints.length - 1]
    }
}

const moveAdventurer = (adventurer: InGameAdventurer, coordinates: Coordinates) => {
    return {
        ...adventurer,
        coordinates
    }
}

const attemptMoveSouth = (
    adventurer: InGameAdventurer,
    map: InGameMap,
    mountains: InGameMountain[],
    adventurers: InGameAdventurer[],
) => {
    const { coordinates } = adventurer
    const { x, y } = coordinates

    const expectedCoordinates = {
        x, y: y + 1
    }

    if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers) || y >= map.height - 1) {
        return adventurer
    }

    return moveAdventurer(adventurer, expectedCoordinates)
}

const attemptMoveNorth = (
    adventurer: InGameAdventurer,
    mountains: InGameMountain[],
    adventurers: InGameAdventurer[],
) => {
    const { coordinates: { x, y } } = adventurer

    const expectedCoordinates = {
        x, y: y - 1
    }

    if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers) || y === 0) {
        return adventurer
    }

    return moveAdventurer(adventurer, expectedCoordinates)
}

const attemptMoveEast = (
    adventurer: InGameAdventurer,
    map: InGameMap,
    mountains: InGameMountain[],
    adventurers: InGameAdventurer[]
) => {
    const { coordinates: { x, y } } = adventurer

    const expectedCoordinates = {
        x: x + 1, y
    }

    if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers) || x >= map.width - 1) {
        return adventurer
    }

    return moveAdventurer(adventurer, expectedCoordinates)
}

const attemptMoveWest = (
    adventurer: InGameAdventurer,
    mountains: InGameMountain[],
    adventurers: InGameAdventurer[]
) => {
    const { coordinates: { x, y } } = adventurer

    const expectedCoordinates = {
        x: x - 1, y
    }

    if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers) || x === 0) {
        return adventurer
    }

    return moveAdventurer(adventurer, expectedCoordinates)
}

const attemptMoveForward = (
    adventurer: InGameAdventurer,
    map: InGameMap,
    mountains: InGameMountain[],
    adventurers: InGameAdventurer[]
): InGameAdventurer => {
    const { direction } = adventurer

    if (direction === CardinalPoint.SOUTH) {
        return attemptMoveSouth(adventurer, map, mountains, adventurers)
    }

    if (direction === CardinalPoint.NORTH) {
        return attemptMoveNorth(adventurer, mountains, adventurers)
    }

    if (direction === CardinalPoint.EAST) {
        return attemptMoveEast(adventurer, map, mountains, adventurers)
    }

    if (direction === CardinalPoint.WEST) {
        return attemptMoveWest(adventurer, mountains, adventurers)
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