let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

//!
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [n1, n2] = numeros; //? será atribuido na ordem, ou seja numeros[0] ira para a pos do 'array' criado, ou seja, n1
console.log(n1, n2);

//? mesma coisa q antes, mas o que não for mapeado (a1, a2, a3), vai para a variavel final com ...
const [a1, a2, a3, ...demaisValores] = numeros;
console.log(a1, a2, a3);
console.log(demaisValores);

//? mesma coisa q antes, mas o que for 'pulado' (vazio), se perde
const [x1, , x3, , ...demaisValores2] = numeros;
console.log(x1, x3);
console.log(demaisValores2);