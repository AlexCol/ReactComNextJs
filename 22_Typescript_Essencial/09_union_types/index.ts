type numeroOuString = number | string;

function addOrConcat(a: numeroOuString, b: numeroOuString): numeroOuString {
  if (typeof (a) === 'number' && typeof (b) === 'number')
    return a + b;
  return `${a}${b}`
}

console.log(addOrConcat(1, 1));
console.log(addOrConcat('1', 'b'));
console.log(addOrConcat(1, '1'));