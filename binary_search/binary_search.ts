const getRand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createArray = (length: number): Array<number> => {
  const a = new Set<number>();
  while (a.size < length) {
    a.add(getRand(1, length * 10));
  }
  return Array.from(a);
};

export const binarySearch = (randomIndex: number, length: number) => {
  const arr = createArray(length).sort((a, b) => a - b);
  const target = arr[randomIndex];

  let modArr = arr;
  let timesRun = 0;
  let found = false;

  while (found === false) {
    timesRun++;
    const middleIndex = Math.floor(modArr.length / 2);
    if (modArr[middleIndex] === target) {
      found = true;
    } else if (modArr[middleIndex] < target) {
      modArr = modArr.slice(middleIndex);
    } else {
      modArr = modArr.slice(0, middleIndex);
    }
  }

  return {
    found,
    timesRun,
  };
};
