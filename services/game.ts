import { CardinalPoint, Instruction } from "../constants/constants"
import { Coordinates, GameState, InGameAdventurer, InGameMap, InGameMountain, InGameTreasure, MovementData, Treasure } from "../types"

export const playGame = (gameData: GameState) => {
    // determining the number of turns based on the adventurer with the highest number of instructions
    const totalTurns = Math.max(...(gameData.adventurers.map(adventurer => adventurer.instructions.length)))

    const turnArray = Array.apply(null, Array(totalTurns))

    const endGameData = turnArray.reduce<GameState>((gameState, curr, turn) => {
        gameState.adventurers.map((adventurer) => {
            playAdventurerTurn(adventurer, gameState, turn)
        })

        return gameState

    }, gameData)

    return endGameData
}

const playAdventurerTurn = (adventurer: InGameAdventurer, gameState: GameState, turn: number) => {
    const movementData = handleInstructions(adventurer, gameState, turn)

    updateGameData(gameState, movementData)
}

const updateGameData = (gameState: GameState, movementData: MovementData) => {
    const { collectedTreasure, adventurer: movedAdventurer } = movementData

    gameState.treasures = gameState.treasures.map((treasure) => {
        return collectedTreasure?.coordinates === treasure.coordinates
            ? collectedTreasure
            : treasure
    })

    gameState.adventurers = gameState.adventurers.map((adventurer) => {
        return movedAdventurer.name === adventurer.name
            ? movedAdventurer
            : adventurer
    })
}

const handleInstructions = (
    adventurer: InGameAdventurer,
    gameState: GameState,
    turn: number) => {
    if (adventurer.instructions[turn] === Instruction.FORWARD) {
        return attemptMoveForward(adventurer, gameState)
    }

    if (adventurer.instructions[turn] === Instruction.RIGHT) {
        return turnRight(adventurer)
    }

    if (adventurer.instructions[turn] === Instruction.LEFT) {
        return turnLeft(adventurer)
    }

    return { adventurer }
}

const turnRight = (adventurer: InGameAdventurer): MovementData => {
    const clockwiseCardinalPoints = Object.values(CardinalPoint)
    const directionIndex = clockwiseCardinalPoints.indexOf(adventurer.direction)

    return {
        adventurer: {
            ...adventurer,
            direction: (directionIndex < clockwiseCardinalPoints.length - 1)
                ? clockwiseCardinalPoints[directionIndex + 1]
                : clockwiseCardinalPoints[0]
        }
    }
}

const turnLeft = (adventurer: InGameAdventurer): MovementData => {
    const clockwiseCardinalPoints = Object.values(CardinalPoint)
    const directionIndex = clockwiseCardinalPoints.indexOf(adventurer.direction)

    return {
        adventurer: {
            ...adventurer,
            direction: (directionIndex > 0)
                ? clockwiseCardinalPoints[directionIndex - 1]
                : clockwiseCardinalPoints[clockwiseCardinalPoints.length - 1]
        }
    }
}

const moveAdventurer = (adventurer: InGameAdventurer, coordinates: Coordinates, treasures: InGameTreasure[]): MovementData => {
    const collectedTreasure = treasures.find((treasure) =>
        treasure.coordinates.x === adventurer.coordinates.x
        && treasure.coordinates.y === adventurer.coordinates.y
        && treasure.quantity > 0
    )

    if (collectedTreasure) {
        return {
            adventurer: {
                ...adventurer,
                treasureCount: adventurer.treasureCount + 1,
                coordinates
            },
            collectedTreasure: {
                ...collectedTreasure,
                quantity: collectedTreasure.quantity - 1
            }
        }
    }

    return {
        adventurer: {
            ...adventurer,
            coordinates
        }
    }
}

const attemptMoveSouth = (
    adventurer: InGameAdventurer,
    gameState: GameState
) => {
    const { coordinates } = adventurer
    const { x, y } = coordinates
    const { mountains, adventurers, map, treasures } = gameState

    const expectedCoordinates = {
        x, y: y + 1
    }

    if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers) || y >= map.height - 1) {
        return { adventurer }
    }

    return moveAdventurer(adventurer, expectedCoordinates, treasures)
}

const attemptMoveNorth = (
    adventurer: InGameAdventurer,
    gameState: GameState
) => {
    const { coordinates } = adventurer
    const { x, y } = coordinates
    const { mountains, adventurers, treasures } = gameState

    const expectedCoordinates = {
        x, y: y - 1
    }

    if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers) || y === 0) {
        return { adventurer }
    }

    return moveAdventurer(adventurer, expectedCoordinates, treasures)
}

const attemptMoveEast = (
    adventurer: InGameAdventurer,
    gameState: GameState
) => {
    const { coordinates } = adventurer
    const { x, y } = coordinates
    const { mountains, adventurers, map, treasures } = gameState

    const expectedCoordinates = {
        x: x + 1, y
    }

    if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers) || x >= map.width - 1) {
        return { adventurer }
    }

    return moveAdventurer(adventurer, expectedCoordinates, treasures)
}

const attemptMoveWest = (
    adventurer: InGameAdventurer,
    gameState: GameState
) => {
    const { coordinates } = adventurer
    const { x, y } = coordinates
    const { mountains, adventurers, treasures } = gameState

    const expectedCoordinates = {
        x: x - 1, y
    }

    if (isPositionOccupied(expectedCoordinates, adventurer.name, mountains, adventurers) || x === 0) {
        return { adventurer }
    }

    return moveAdventurer(adventurer, expectedCoordinates, treasures)
}

const attemptMoveForward = (
    adventurer: InGameAdventurer,
    gameState: GameState,
): MovementData => {
    const { direction } = adventurer

    if (direction === CardinalPoint.SOUTH) {
        return attemptMoveSouth(adventurer, gameState)
    }

    if (direction === CardinalPoint.NORTH) {
        return attemptMoveNorth(adventurer, gameState)
    }

    if (direction === CardinalPoint.EAST) {
        return attemptMoveEast(adventurer, gameState)
    }

    if (direction === CardinalPoint.WEST) {
        return attemptMoveWest(adventurer, gameState)
    }

    return { adventurer }
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