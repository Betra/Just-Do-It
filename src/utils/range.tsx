export const range = (start:number = 1, end:number, step:number = 1) => {
  const array: number[] = [];

  for (start; start <= end; start += step ) array.push(start);

  return array;
}