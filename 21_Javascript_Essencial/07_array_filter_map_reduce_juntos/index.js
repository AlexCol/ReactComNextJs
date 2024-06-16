//! a soma do dobro de todos os pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaDobroPares = numeros.filter(item => item % 2 === 0).map(item => item * 2).reduce((acc, valor) => acc += valor);

console.log(somaDobroPares);
