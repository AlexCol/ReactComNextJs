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
    const fase1 = esperaAi('Fase 1', 1000);
    console.log(fase1); //ainda vai estar pendente

    setTimeout(() => {
      console.log(fase1); //vai estar resolvida
    }, 1100); //colocado um tempo maior que o que sei que vai demorar pra esperaAi resolver

  } catch (err) {
    console.log(err);
  }
}

executa();