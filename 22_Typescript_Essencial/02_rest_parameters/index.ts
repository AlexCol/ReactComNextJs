function Maior(...args: number[]): number {
  return args.reduce((prev, atual) => {
    return prev > atual ? prev : atual;
  }, 0)
}

console.log(Maior(1, 2, 3, 4, 5, 6, 7));