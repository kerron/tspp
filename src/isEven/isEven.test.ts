import { isEven } from "./isEven";

describe("isEven", () => {
  test("when given an even number it should return true", () => {
    const result = isEven(2);
    expect(result).toBeTruthy();
  });

  test("when given a number that is not even, it should return false", () => {
    const result = isEven(3);
    expect(result).toBeFalsy();
  });
});
