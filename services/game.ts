import { CardinalPoint, Instruction } from "../constants/constants"
import { Coordinates, GameState, InGameAdventurer, InGameMap, InGameMountain, InGameTreasure, MovementData } from "../types"

export const runGame = (gameData: GameState) => {
    // determining the number of turns based on the adventurer with the highest number of instructions
    const totalTurns = Math.max(...(gameData.adventurers.map(adventurer => adventurer.instructions.length)))

    const turnArray = Array.apply(null, Array(totalTurns))

    // iterating on the number of turns
    const endGameData = turnArray.reduce<GameState>((gameState, curr, turn) => {
        gameState.adventurers.forEach((adventurer) => {
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
        treasure.coordinates.x === coordinates.x
        && treasure.coordinates.y === coordinates.y
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

    const newCoordinates = {
        x, y: y + 1
    }

    return attemptMove(adventurer, newCoordinates, gameState)
}

const attemptMoveNorth = (
    adventurer: InGameAdventurer,
    gameState: GameState
) => {
    const { coordinates } = adventurer
    const { x, y } = coordinates

    const newCoordinates = {
        x, y: y - 1
    }

    return attemptMove(adventurer, newCoordinates, gameState)
}

const attemptMoveEast = (
    adventurer: InGameAdventurer,
    gameState: GameState
) => {
    const { coordinates } = adventurer
    const { x, y } = coordinates

    const newCoordinates = {
        x: x + 1, y
    }

    return attemptMove(adventurer, newCoordinates, gameState)
}

const attemptMoveWest = (
    adventurer: InGameAdventurer,
    gameState: GameState
) => {
    const { coordinates } = adventurer
    const { x, y } = coordinates

    const newCoordinates = {
        x: x - 1, y
    }

    return attemptMove(adventurer, newCoordinates, gameState)
}

const attemptMove = (
    adventurer: InGameAdventurer,
    newCoordinates: Coordinates,
    gameState: GameState,
) => {

    const { mountains, adventurers, treasures, map } = gameState

    if (isPositionOccupied(newCoordinates, adventurer.name, mountains, adventurers)
        || !isCoordinatesInbound(newCoordinates, map)
    ) {
        return { adventurer }
    }

    return moveAdventurer(adventurer, newCoordinates, treasures)
}

const isCoordinatesInbound = (coordinates: Coordinates, map: InGameMap) => {
    return isCoordinateInbound(coordinates.x, map.width)
        && isCoordinateInbound(coordinates.y, map.height)
}

const isCoordinateInbound = (coordinate: number, maxValue: number) => coordinate >= 0 && coordinate < maxValue

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