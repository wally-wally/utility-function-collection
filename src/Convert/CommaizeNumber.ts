export const getCommaizeNumber = (value: number) => {
  const isNegativeNumber = value < 0;
  const absoluteNumber = Math.abs(value);
  const digitCount = String(absoluteNumber).length;
  const reversedStringizeNumber = String(absoluteNumber).split('').reverse();
  let groupedNumbers = [];
  for (let i = 0; i < digitCount; i += 3) {
    groupedNumbers.unshift(reversedStringizeNumber.slice(i, i + 3).reverse().join(''));
  }
  return (isNegativeNumber ? '-' : '') + groupedNumbers.join(',');
}