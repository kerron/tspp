import { end } from "./end";

describe("end", () => {
  test("when given an empty list it returns 0", () => {
    expect(end([])).toBe(0);
  });
  test("when given a non empty list it returns the length of the list", () => {
    expect(end([2, 10, 13])).toBe(3);
  });
});
