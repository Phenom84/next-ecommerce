import { ascendingBubbleSort } from "./ascendingBubbleSort ";
describe("ascendingBubbleSort()", () => {
  const testArr = [1, 2, 4, -5, 100, 3.3, 23543, -4, 4];
  const sortedArr = [-5, -4, 1, 2, 3.3, 4, 4, 100, 23543];
  test("sorted array", () => {
    expect(ascendingBubbleSort(testArr)).toEqual(sortedArr);
  });
});
