function rand(min = 0, max = 3) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO, VALOR INCORRETO: ' + msg);
        return; //!O return dentro do bloco onde a Promise é rejeitada ou um erro é lançado é crucial. Sem ele, o código abaixo do reject ou throw ainda será executado, o que pode levar a comportamentos inesperados.
      };

      resolve(`${msg} - Passei na promisse.`);
      return; //!mesmo do reject acima
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    //const errFase = await esperaAi(5, rand());

    console.log(`Finalizado na: ${fase3}`)
  } catch (err) {
    console.log(err);
  }
}

//? A função assíncrona 'executa' é iniciada. Como ela contém 'await', a execução da função é pausada em cada 'await' 
//? até que a promessa seja resolvida, mas a thread principal continua a execução do código seguinte.
executa();

//? Este 'console.log' é executado imediatamente após a chamada a 'executa()', porque 'executa()' retorna uma promessa imediatamente, 
//? antes de qualquer 'await' ser resolvido.
console.log('oi');

//resumo
/*
Execução de Funções Assíncronas:
Funções assíncronas (async) e await não criam novas threads. Elas usam a mesma thread principal de JavaScript (single-threaded), 
mas permitem que o código assíncrono (promessas) seja executado de forma não bloqueante. Quando uma promessa é aguardada (await), 
a função assíncrona é pausada até que a promessa seja resolvida, mas o thread principal continua executando outros códigos.

Execução de executa():
A chamada para executa() inicia a execução da função assíncrona. Como a função executa() contém await para promessas, ela 
é pausada até que cada promessa seja resolvida. Entretanto, a chamada inicial a executa() retorna uma promessa imediatamente, 
permitindo que o código seguinte (console.log('oi')) seja executado imediatamente.
*/