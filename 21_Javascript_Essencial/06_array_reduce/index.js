//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!
//! Filter sempre retorna um array, com a mesma quantidade de elementos ou menos, e nunca altera o array original
//! E os elementos retornados para o novo array serão os mesmos do array filtrado
//!
//! Retorno: Pode ser qualquer tipo de valor (número, string, objeto, etc.).
//! Quantidade de elementos: O valor retornado é único, resultado da acumulação.
//! Alteração do array original: Nunca altera o array original.
//! Uso principal: Reduzir um array a um único valor acumulado com base em uma função de callback.
//!
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackReduce(acumulador, valor, indice, array) {
  console.log('-----------------------------------------------');
  console.log(`Acumulador: ${acumulador}`);
  console.log(`Valor: ${valor}`);
  console.log(`Indice: ${indice}`);
  console.log(`Array: ${array}`);
  return acumulador + valor;
}

//!valor inicial é um valor inical para o acumulador, se não informado, ele assume o primeiro elemento do array e já pula a análise pro segundo
const soma = numeros.reduce(callbackReduce, 0);
console.log(soma);

//! exemplo em que muda o valor se passar o valor incial ou não
//? se informar nada, ele já coloca o 5 no acumulador, o que pode gerar valor incorreto no final, 
//? por isso é bom sempre analisar bem se precisa de  um valor inicial
const somaPares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}, 0);
console.log(`Soma pares: ${somaPares}`);

//!retornando um array só com numeros pares (nesse caso, seria 'mais correto' usar o filter)
const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);

//!retornando um array igual ao original, mas com seus valores dobrados (nesse caso, seria 'mais correto' usar o map)
const dobro = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobro);

console.log('----------------------------------------------------------------');
// //! reduce com array de objetos
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 47 }
];

//? aqui é um exemplo que não precisa informar um valor inicial para o acumulador
//*mudado o nome do acumulador para 'maisVelho' para melhorar o entendimento, o nome pode se qualquer coisa
const pessoaMaisVelha = pessoas.reduce((maisVelho, pessoa) => {
  if (pessoa.idade > maisVelho.idade) maisVelho = pessoa;
  return maisVelho;
});
console.log(pessoaMaisVelha);