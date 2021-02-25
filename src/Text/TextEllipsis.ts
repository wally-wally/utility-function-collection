export const makeTextEllipsis = (text: string, maxRange: number) => {
  return text.length <= maxRange ? text : `${text.slice(0, maxRange - 1)}...`;
}