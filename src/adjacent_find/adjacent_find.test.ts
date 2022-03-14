import { adjacent_find } from "./adjacent_find";
import { lesser } from "../lesser/lesser";

describe("adjacent_find", () => {
  test("when given valid arguments it returns adjacent difference", () => {
    const result = adjacent_find(0, 4, [0, 1, 2, 4, 3, 2, 4, 4], lesser);
    expect(result).toEqual(1);
  });
});
