//pode-se usar Array<T> ou T[]
const arrayNumbers1: Array<number> = [1, 2, 3, 4];
const arrayNumbers2: number[] = [1, 2, 3, 4];

function SomaNumbers(...args: number[]) {
  return args.reduce((prev, atual) => prev + atual);
}
const result = SomaNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

function ToUpparArray(...args: Array<string>) {
  return args.map((atual) => atual.toUpperCase());
}
const result2 = ToUpparArray('a', 'b', 'c');
console.log(result2);