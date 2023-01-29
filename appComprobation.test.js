import {generateMatriz} from "./generateMatriz.js"

describe ("Given generate array"), () => {
  describe("When we have dimensional array", () => {
  test("Its length is three", () => {
      const r = generateArray(3);
      expect(r).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ])
    });
  });
});


