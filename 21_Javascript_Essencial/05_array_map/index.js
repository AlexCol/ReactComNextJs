//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!
//! Map sempre retorna um array com a mesma quantidade de elementos, e nunca altera o array original
//! E os elementos retornados para o novo array podem ser diferentes do array mapeado
//!
//! Retorno: Sempre retorna um novo array.
//! Quantidade de elementos: O array resultante sempre terá a mesma quantidade de elementos que o array original.
//! Alteração do array original: Nunca altera o array original.
//! Elementos do novo array: Podem ser diferentes dos elementos do array original, dependendo da função de callback fornecida.
//!
//! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map(item => item * 2);
console.log(dobro);

// console.log('----------------------------------------------------------------');
// //! map com array de objetos
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

const somenteNomes = pessoas.map(pess => pess.nome);
console.log(somenteNomes);

const somenteIdades = pessoas.map(pess => pess.idade);
console.log(somenteIdades);

//! pra converter em objeto, o uso de {} gera problema, pois serão consideradas como a aabertura de bloco da função
//! para uso em arrow fucntion, o obj precisa ser empacotado com parenteses
//? forma 1 (principalmente pra typescript)
const adicionaIdPraPessoa = pessoas.map((pessoa, indice) => ({ id: indice + 1, ...pessoa }));

//? forma 2, devido a não tipagem é possível (nesse metodo, o array original tbm é modificado, pois é passado objeto por referencia)
// const adicionaIdPraPessoa = pessoas.map((pessoa, indice) => {
//   pessoa.id = indice + 1;
//   return pessoa;
// });
console.log(pessoas);
console.log(adicionaIdPraPessoa);
