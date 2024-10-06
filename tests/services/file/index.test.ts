import { parseFile } from "../../../services/file"
import { evenDatasetResult, unevenDatasetResult } from "./mocks"

describe("the file service", () => {
    it("should return an array of data (even dataset)", async () => {
        expect(await parseFile("tests/services/file/file.csv")).toEqual(expect.arrayContaining(evenDatasetResult))
    })

    it("should return an array of data (uneven dataset)", async () => {
        expect(await parseFile("tests/services/file/game-file.csv")).toEqual(expect.arrayContaining(unevenDatasetResult))
    })
})