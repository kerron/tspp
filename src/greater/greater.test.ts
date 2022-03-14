import { greater } from "./greater";

describe("greater", () => {
  test("when given valid arguments it returns greater value", () => {
    const result = greater(0, 4);
    expect(result).toEqual(4);
  });
});
