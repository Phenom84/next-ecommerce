import { descendingBubbleSort } from "./descendingBubbleSort";
describe("descendingBubbleSort()", () => {
  const testArr = [1, 2, 4, -5, 100, 3.3, 23543, -4, 4];
  const sortedArr = [23543, 100, 4, 4, 3.3, 2, 1, -4, -5];
  test("sorted array", () => {
    expect(descendingBubbleSort(testArr)).toEqual(sortedArr);
  });
});
