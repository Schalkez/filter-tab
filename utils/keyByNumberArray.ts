export const keyByNumberArray = (array: number[]) => {
  const result = array.reduce((acc: Record<number, number>, currentValue) => {
    acc[currentValue] = currentValue;
    return acc;
  }, {});

  return result;
};
