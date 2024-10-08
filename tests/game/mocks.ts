import { CardinalPoint, Instruction } from "../../constants/constants";
import { GameState } from "../../types";

export const moveSouthInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.SOUTH,
            coordinates: {
                x: 0,
                y: 0,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const moveSouthOutput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.SOUTH,
            coordinates: {
                x: 0,
                y: 1,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const moveNorthInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.NORTH,
            coordinates: {
                x: 3,
                y: 3,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const moveNorthOutput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.NORTH,
            coordinates: {
                x: 3,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const moveWestInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.WEST,
            coordinates: {
                x: 4,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const moveWestOutput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.WEST,
            coordinates: {
                x: 3,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const moveEastInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.EAST,
            coordinates: {
                x: 4,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const moveEastOutput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.EAST,
            coordinates: {
                x: 5,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const OOBNorthInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.NORTH,
            coordinates: {
                x: 5,
                y: 0,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const OOBNorthOutput: GameState = OOBNorthInput

export const OOBSouthInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.SOUTH,
            coordinates: {
                x: 0,
                y: 9,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const OOBSouthOutput: GameState = OOBSouthInput

export const OOBWestInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.WEST,
            coordinates: {
                x: 0,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const OOBWestOutput: GameState = OOBWestInput

export const OOBEastInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.EAST,
            coordinates: {
                x: 9,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const OOBEastOutput: GameState = OOBEastInput

export const CrossingMountainSouthInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.SOUTH,
            coordinates: {
                x: 9,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [
        {
            coordinates: {
                x: 9,
                y: 3
            }
        }
    ],
    treasures: [],
}

export const CrossingMountainSouthOutput: GameState = CrossingMountainSouthInput


export const CrossingMountainNorthInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.NORTH,
            coordinates: {
                x: 2,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [
        {
            coordinates: {
                x: 2,
                y: 1
            }
        }
    ],
    treasures: [],
}

export const CrossingMountainNorthOutput: GameState = CrossingMountainNorthInput

export const CrossingAdventurerWestInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.WEST,
            coordinates: {
                x: 6,
                y: 2,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        },
        {
            name: "Mario",
            direction: CardinalPoint.WEST,
            coordinates: {
                x: 5,
                y: 2,
            },
            instructions: [],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const CrossingAdventurerWestOutput: GameState = CrossingAdventurerWestInput

export const CrossingAdventurerEastInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.WEST,
            coordinates: {
                x: 9,
                y: 1,
            },
            instructions: [],
            treasureCount: 0
        },
        {
            name: "Mario",
            direction: CardinalPoint.EAST,
            coordinates: {
                x: 8,
                y: 1,
            },
            instructions: [Instruction.FORWARD],
            treasureCount: 0
        }
    ],
    mountains: [],
    treasures: [],
}

export const CrossingAdventurerEastOutput = CrossingAdventurerEastInput

export const turnRightInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.WEST,
            coordinates: {
                x: 9,
                y: 1,
            },
            instructions: [Instruction.RIGHT],
            treasureCount: 0
        },
    ],
    mountains: [],
    treasures: [],
}

export const turnRightOutput: GameState = {
    ...turnRightInput,
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.NORTH,
            coordinates: {
                x: 9,
                y: 1,
            },
            instructions: [Instruction.RIGHT],
            treasureCount: 0
        },
    ],
}

export const turnLeftInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.SOUTH,
            coordinates: {
                x: 9,
                y: 1,
            },
            instructions: [Instruction.LEFT],
            treasureCount: 0
        },
    ],
    mountains: [],
    treasures: [],
}

export const turnLeftOutput: GameState = {
    ...turnRightInput,
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.EAST,
            coordinates: {
                x: 9,
                y: 1,
            },
            instructions: [Instruction.LEFT],
            treasureCount: 0
        },
    ],
}

export const collectTreasureInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.EAST,
            coordinates: {
                x: 4,
                y: 5,
            },
            instructions: [
                Instruction.FORWARD,
                Instruction.FORWARD,
                Instruction.RIGHT,
                Instruction.RIGHT,
                Instruction.FORWARD,
                Instruction.FORWARD,
                Instruction.RIGHT,
                Instruction.RIGHT,
                Instruction.FORWARD,
            ],
            treasureCount: 0
        },
    ],
    mountains: [],
    treasures: [{
        coordinates: {
            x: 5,
            y: 5,
        },
        quantity: 2
    }],
}

export const collectTreasureOutput: GameState = {
    ...collectTreasureInput,
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.EAST,
            coordinates: {
                x: 5,
                y: 5,
            },
            instructions: [
                Instruction.FORWARD,
                Instruction.FORWARD,
                Instruction.RIGHT,
                Instruction.RIGHT,
                Instruction.FORWARD,
                Instruction.FORWARD,
                Instruction.RIGHT,
                Instruction.RIGHT,
                Instruction.FORWARD,
            ],
            treasureCount: 2
        },
    ],
    mountains: [],
    treasures: [{
        coordinates: {
            x: 5,
            y: 5,
        },
        quantity: 0
    }],
}

export const conflictingMovementsInput: GameState = {
    map: {
        width: 10,
        height: 10,
    },
    adventurers: [
        {
            name: "Link",
            direction: CardinalPoint.EAST,
            coordinates: {
                x: 4,
                y: 5,
            },
            instructions: [
                Instruction.FORWARD,
            ],
            treasureCount: 0
        },
        {
            name: "Indiana",
            direction: CardinalPoint.WEST,
            coordinates: {
                x: 6,
                y: 5,
            },
            instructions: [
                Instruction.FORWARD,
            ],
            treasureCount: 0
        },
        {
            name: "Lara",
            direction: CardinalPoint.SOUTH,
            coordinates: {
                x: 5,
                y: 4,
            },
            instructions: [
                Instruction.FORWARD,
            ],
            treasureCount: 0
        },
    ],
    mountains: [],
    treasures: [],
}

export const conflictingMovementsOutput = {
    ...conflictingMovementsInput,
    adventurers: conflictingMovementsInput.adventurers.map((adventurer) => {
        return adventurer.name === "Link" ? {
            ...adventurer,
            coordinates: { x: 5, y: 5 }
        } : adventurer
    })
}