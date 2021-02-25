export const getFileSizeCalculation = (size: number, digit: number) => {
  if (size < 0) {
    size = 0;
    return `${size.toFixed(digit)} KB`;
  }

  if (size < Math.pow(1024, 2)) {
    return `${(size / 1024).toFixed(digit)} KB`;
  } else if (Math.pow(1024, 2) <= size && size < Math.pow(1024, 3)) {
    return `${(size / Math.pow(1024, 2)).toFixed(digit)} MB`;
  } else {
    return `${(size / Math.pow(1024, 3)).toFixed(digit)} GB`;
  } 
}