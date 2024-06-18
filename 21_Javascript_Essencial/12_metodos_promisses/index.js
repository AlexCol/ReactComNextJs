function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('CAI NO ERRO');
      return; //!O return dentro do bloco onde a Promise é rejeitada ou um erro é lançado é crucial. Sem ele, o código abaixo do reject ou throw ainda será executado, o que pode levar a comportamentos inesperados.
    };
    setTimeout(() => {
      resolve('Finalizada: ' + msg);
      return; //!mesmo do reject acima
    }, tempo);
  });
}

//!exemplos de execução de multiplas promisses
const promisses = [
  //'Primeiro Valor', //valores assim, são considerados 'promisses já resolvidas', então retornam imediatamente no all, race, etc
  esperaAi('Promisse 1', rand(1, 3)),
  esperaAi('Promisse 2', rand(1, 3)),
  esperaAi('Promisse 3', rand(1, 3)),
  //esperaAi(1, rand(1, 3)),
  //'Outro valor'
];

//!Promisse.all - passa um array de promessas, e retorna um array com os retornos
// Promise.all(promisses)
//   .then(resp => {
//     console.log(resp);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//!Promisse.race - passa um array de promessas, e retorna a primeira que finalizar
// Promise.race(promisses)
//   .then(resp => {
//     console.log(resp);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

//!Promisse.resolve - serve pra mandar um resolve numa função, sem precisar esperar outra que execute a promisse (por exemplo pra mandar mais rapido uma pagina em cache)
function baixaPagina(emCache) {
  if (emCache)
    return Promise.resolve("Página em cache");
  else {
    return esperaAi('Baixei a pagina', 3000);
  }
}

baixaPagina(false)
  .then(resp => {
    console.log("resolveu: " + resp);
  })
  .catch(err => {
    console.log("Erro: " + err);
  })

//!Promisse.reject - mesmo que pro resolve, mas pra devolver rapidamente a rejeição
function verificaSeJaCadastro(cadastrado) {
  if (cadastrado)
    return Promise.reject("Já cadastrado");
  else {
    return esperaAi('Cadastrando', 3000);
  }
}

verificaSeJaCadastro(false)
  .then(resp => {
    console.log("resolveu: " + resp);
  })
  .catch(err => {
    console.log("Erro: " + err);
  })