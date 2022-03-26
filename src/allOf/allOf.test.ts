import { begin } from "../begin/begin";
import { end } from "../end/end";
import { isEven } from "../isEven/isEven";
import { isOdd } from "../isOdd/isOdd";
import { allOf } from "./allOf";

describe("allOf", () => {
  test("when given a list of all even numbers it should return true", () => {
    const list = [2, 4, 6, 8];
    const result = allOf(begin(), end(list), list, isEven);
    expect(result).toBeTruthy();
  });
  test("when given a list of all odd numbers it should return true", () => {
    const list = [1, 3, 5, 7];
    const result = allOf(begin(), end(list), list, isOdd);
    expect(result).toBeTruthy();
  });
  test("when given a list of and an end, it should only check up to end", () => {
    const list = [1, 3, 2, 8];
    const result = allOf(begin(), 2, list, isOdd);
    expect(result).toBeTruthy();
  });
});
