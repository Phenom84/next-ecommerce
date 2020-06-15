export const descendingBubbleSort = (arr) => {
  const sortedArr = [...arr];
  const loop = sortedArr.length;
  let swaped = false;
  for (let i = 0; i < loop - 1; i++) {
    swaped = false;
    for (let j = 0; j < loop - 1; j++) {
      if (sortedArr[j] < sortedArr[j + 1]) {
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
        swaped = true;
      }
    }
    if (!swaped) {
      break;
    }
  }
  return sortedArr;
}