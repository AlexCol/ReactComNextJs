//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!
//! Filter sempre retorna um array, com a mesma quantidade de elementos ou menos, e nunca altera o array original
//! E os elementos retornados para o novo array serão os mesmos do array filtrado
//! 
//! Retorno: Sempre retorna um novo array.
//! Quantidade de elementos: O array resultante pode ter a mesma quantidade de elementos ou menos, dependendo da condição fornecida.
//! Alteração do array original: Nunca altera o array original.
//! Elementos do novo array: São os mesmos do array original, mas apenas aqueles que passam no teste da função de callback.
//!
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//? primeira forma, criando a função de callback fora da chamada do filter
function callbackFilter(valorItem, indice, arrayCompleto) {
  return valorItem > 10;
}
const filtrado = numeros.filter(callbackFilter);
console.log(filtrado);

//? segunda forma, criando a função como arrow function dentro da chamada do filter
const filtrado2 = numeros.filter(function (valor) {
  return valor > 10;
});
console.log(filtrado2);

//? terceira forma, criando a função como arrow function dentro da chamada do filter
const filtrado3 = numeros.filter(valorItem => valorItem > 10);
console.log(filtrado3);

//!outro exemplo, com console.log na função para entendimento
const filtrado4 = numeros.filter((value, index, array) => {
  const retorno = value > 10;

  console.log('Array original:', array);
  console.log('Valor atual:', value);
  console.log('Indice atual:', index);
  console.log(`Vai se manter no array: ${retorno ? 'Sim' : 'Não'}`);

  return retorno;
});
console.log(filtrado4);

console.log('----------------------------------------------------------------');
//! filtro com array de objetos
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

const pessoaComCincoLetrasOuMais = pessoas.filter(pess => pess.nome.length >= 5);
console.log(pessoaComCincoLetrasOuMais);

const pessoaComMaisDe50Anos = pessoas.filter(pess => pess.idade > 50);
console.log(pessoaComMaisDe50Anos);

//!forma 1
//const pessoaCujoNomeTerminaComA = pessoas.filter(pess => pess.nome.charAt(pess.nome.length - 1).toLowerCase() === 'a');

//!forma 2
// const pessoaCujoNomeTerminaComA = pessoas.filter(pess => {
//   const tamNome = pess.nome.length;
//   const ultimaLetra = pess.nome.charAt(tamNome - 1);
//   return 'a' === ultimaLetra.toLowerCase();
// });

//!forma 3
const pessoaCujoNomeTerminaComA = pessoas.filter(pess => pess.nome.toLowerCase().endsWith('a'));
console.log(pessoaCujoNomeTerminaComA);