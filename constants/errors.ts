export enum GameEntryErrorMessage {
    NON_NUMBER_COORDINATES = "Please express coordinates in numbers",
    INVALID_MAP = 'Please specify the following values for map creation: "C - x-axis length - y-axis length"',
    MULTI_MAP = "Please specify only one map line",
    SMALL_MAP = "Please specify map dimensions at least equal to 2x2",
    INVALID_ADVENTURER = 'Please specify the following values for adventurers: "A - name - x-axis value - y-axis value"',
    NON_CARDINAL_DIRECTION = "Please specify a cardinal direction between these values: N - E - S - W",
    INVALID_MOUNTAIN = 'Please specify the following values for mountains: "A - x-axis value - y-axis value"',
    INVALID_TREASURE = 'Please specify the following values for treasures: "A - x-axis value - y-axis value - quantity"',
    NON_NUMBER_TREASURE_QUANTITY = "Please specify a number for treasure quantity"
}

export enum GameEntryErrorName {
    NON_NUMBER_COORDINATES = "NonNumberCoordinates",
    INVALID_MAP = "InvalidMap",
    MULTI_MAP = "MultiMap",
    SMALL_MAP = "SmallMap",
    INVALID_ADVENTURER = "InvalidAdventurer",
    NON_CARDINAL_DIRECTION = "NonCardinalDirection",
    INVALID_MOUNTAIN = "InvalidMountain",
    INVALID_TREASURE = "InvalidTreasure",
    NON_NUMBER_TREASURE_QUANTITY = "NonNumberTreasureQuantity"
}