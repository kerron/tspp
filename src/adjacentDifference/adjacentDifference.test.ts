import { adjacentDifference } from "./adjacentDifference";

describe("adjacentDifference", () => {
  test("when first is >= to last it returns an empty list ", () => {
    const result = adjacentDifference(0, 5, []);
    expect(result).toEqual([]);
  });
  test("when called with an empty list it returns an empty list ", () => {
    const result = adjacentDifference(0, 5, []);
    expect(result).toEqual([]);
  });
  test("when given valid arguments it returns adjacent difference", () => {
    const result = adjacentDifference(0, 5, [1, 9, 3, 4, 5, 6]);
    expect(result).toEqual([0, 8, -6, 1, 1]);
  });
});
