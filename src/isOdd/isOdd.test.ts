import { isOdd } from "./isOdd";

describe("isOdd", () => {
  test("when given an odd number it should return true", () => {
    const result = isOdd(3);
    expect(result).toBeTruthy();
  });

  test("when given a number that is not odd, it should return false", () => {
    const result = isOdd(2);
    expect(result).toBeFalsy();
  });
});
