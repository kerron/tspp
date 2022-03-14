import { lesser } from "./lesser";

describe("lesser", () => {
  test("when given valid arguments it returns lesser value", () => {
    const result = lesser(0, 4);
    expect(result).toBeTruthy();
  });
});
