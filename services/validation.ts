import { CardinalPoint, FileElement } from "../constants/constants"
import { GameEntryErrorMessage, GameEntryErrorName } from "../constants/errors"
import { Coordinates, GameEntryError, GameEntryLine } from "../types"
import { getAllItemsOfType } from "../utils"
import { addError, buildNonNumberCoordinatesError, buildOutOfBoundsError } from "./error"

export const validateEntry = (mapElements: GameEntryLine[]): GameEntryError[] => {
    const mountains = getAllItemsOfType(mapElements, FileElement.MOUNTAIN)
    const adventurers = getAllItemsOfType(mapElements, FileElement.ADVENTURER)
    const treasures = getAllItemsOfType(mapElements, FileElement.TREASURE)
    const maps = getAllItemsOfType(mapElements, FileElement.MAP)

    const mapErrors = validateMap(maps)

    if (mapErrors.length > 0) {
        return mapErrors
    }

    const map = maps[0]

    const adventurerErrors = validateAdventurers(adventurers, map)
    const treasureErrors = validateTreasures(treasures, map)
    const mountainErrors = validateMountains(mountains, map)
    const placementErrors = validatePlacements([...mountains, ...adventurers])

    return [...mapErrors, ...adventurerErrors, ...treasureErrors, ...mountainErrors, ...placementErrors]
}

const isElementInBounds = (coordinates: Coordinates, map: GameEntryLine) => {
    const { x, y } = coordinates

    return x >= 0
        && y >= 0
        && x < parseFloat(map[1])
        && y < parseFloat(map[2])
}

const validateMap = (maps: GameEntryLine[]): GameEntryError[] => {
    if (!maps.length) {
        return [{
            name: GameEntryErrorName.INVALID_MAP,
            message: GameEntryErrorMessage.INVALID_MAP,
        }]
    }

    if (maps.length > 1) {
        return [{
            name: GameEntryErrorName.MULTI_MAP,
            message: GameEntryErrorMessage.MULTI_MAP,
        }]
    }

    const errors: GameEntryError[] = []

    const map = maps[0]

    const xAxis = map[1]
    const yAxis = map[2]

    if (isNaN(parseFloat(xAxis)) || isNaN(parseFloat(yAxis))) {
        buildNonNumberCoordinatesError(errors, map)
    }

    if (parseFloat(xAxis) < 2 || parseFloat(yAxis) < 2) {
        addError(errors, {
            message: GameEntryErrorMessage.SMALL_MAP,
            name: GameEntryErrorName.SMALL_MAP,
            line: map
        })
    }

    return errors
}

const validateAdventurers = (adventurers: GameEntryLine[], map: GameEntryLine): GameEntryError[] => {
    const errors: GameEntryError[] = []

    adventurers.forEach((adventurer) => {
        if (adventurer.length !== 6) {
            addError(errors, {
                message: GameEntryErrorMessage.INVALID_ADVENTURER,
                name: GameEntryErrorName.INVALID_ADVENTURER,
                line: adventurer
            })
            return
        }

        const x = parseFloat(adventurer[2])
        const y = parseFloat(adventurer[3])
        const direction = adventurer[4]

        if (isNaN(x) || isNaN(y)) {
            buildNonNumberCoordinatesError(errors, adventurer)
        }

        if (!Object.values<string>(CardinalPoint).includes(direction)) {
            addError(errors, {
                message: GameEntryErrorMessage.NON_CARDINAL_DIRECTION,
                name: GameEntryErrorName.NON_CARDINAL_DIRECTION,
                line: adventurer
            })
        }

        if (!isElementInBounds({ x, y }, map)) {
            buildOutOfBoundsError(errors, adventurer)
        }

    })
    return errors
}

const validateMountains = (mountains: GameEntryLine[], map: GameEntryLine) => {
    const errors: GameEntryError[] = []

    mountains.forEach((mountain) => {
        if (mountain.length !== 3) {
            return addError(errors, {
                name: GameEntryErrorName.INVALID_MOUNTAIN,
                message: GameEntryErrorMessage.INVALID_MOUNTAIN,
                line: mountain
            })
        }

        const x = parseFloat(mountain[1])
        const y = parseFloat(mountain[2])

        if (isNaN(x) || isNaN(y)) {
            buildNonNumberCoordinatesError(errors, mountain)
        }

        if (!isElementInBounds({ x, y }, map)) {
            buildOutOfBoundsError(errors, mountain)
        }
    })


    return errors
}

const validateTreasures = (treasures: GameEntryLine[], map: GameEntryLine): GameEntryError[] => {
    const errors: GameEntryError[] = []

    treasures.forEach((treasure) => {
        if (treasure.length !== 4) {
            return addError(errors, {
                name: GameEntryErrorName.INVALID_TREASURE,
                message: GameEntryErrorMessage.INVALID_TREASURE,
                line: treasure
            })
        }

        const x = parseFloat(treasure[1])
        const y = parseFloat(treasure[2])
        const count = treasure[3]

        if (isNaN(x) || isNaN(y)) {
            buildNonNumberCoordinatesError(errors, treasure)
        }

        if (isNaN(parseFloat(count))) {
            addError(errors, {
                name: GameEntryErrorName.NON_NUMBER_TREASURE_QUANTITY,
                message: GameEntryErrorMessage.NON_NUMBER_TREASURE_QUANTITY,
                line: treasure
            })
        }

        if (!isElementInBounds({ x, y }, map)) {
            buildOutOfBoundsError(errors, treasure)
        }
    })

    return errors
}

const validatePlacements = (elements: GameEntryLine[]): GameEntryError[] => {
    const errorsAndOccupiedSpots = (elements.reduce<{
        errors: GameEntryError[]
        occupiedSpots: Coordinates[]
    }>((acc, element) => {
        const elementType = element[0]

        if (elementType === FileElement.ADVENTURER
            || elementType === FileElement.MOUNTAIN) {
            const coordinates = elementType === FileElement.ADVENTURER
                ? { x: parseFloat(element[2]), y: parseFloat(element[3]) }
                : { x: parseFloat(element[1]), y: parseFloat(element[2]) }

            if (acc.occupiedSpots.find((spot) => spot.x === coordinates.x && spot.y === coordinates.y)) {
                return {
                    errors: [...acc.errors,
                    {
                        line: element,
                        name: GameEntryErrorName.CONFLICTING_PLACEMENT,
                        message: GameEntryErrorMessage.CONFLICTING_PLACEMENT,
                    }
                    ],
                    occupiedSpots: [...acc.occupiedSpots, coordinates]
                }
            }

            return {
                ...acc,
                occupiedSpots: [...acc.occupiedSpots, coordinates]
            }
        }

        return acc

    }, { errors: [], occupiedSpots: [] }))

    return errorsAndOccupiedSpots.errors
}