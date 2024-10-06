import { parseFile } from "../../../services/file"
import { result } from "./mocks"

describe("the file service", () => {
    it("should return an array of data", async () => {
        expect(await parseFile("tests/services/file/file.csv")).toEqual(expect.arrayContaining(result))
    })
})