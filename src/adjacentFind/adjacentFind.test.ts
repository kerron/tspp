import { adjacentFind } from "./adjacentFind";
import { lesser } from "../lesser/lesser";

describe("adjacentFind", () => {
  test("when given valid arguments it returns adjacent difference", () => {
    const result = adjacentFind(0, 4, [0, 1, 2, 4, 3, 2, 4, 4], lesser);
    expect(result).toEqual(1);
  });
});
