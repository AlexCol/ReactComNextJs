type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callBackFn: MapStringsCallback): string[] {
  const newArray: Array<string> = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callBackFn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapStrings(abc, item => item.toUpperCase());
console.log(abcMapped);