function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('Mensagem precissa ser string.')
      return; //O return dentro do bloco onde a Promise é rejeitada ou um erro é lançado é crucial. Sem ele, o código abaixo do reject ou throw ainda será executado, o que pode levar a comportamentos inesperados.
    };
    console.log("Iniciando: " + msg);
    setTimeout(() => {
      resolve('Finalizada: ' + msg);
    }, tempo);
  });
}

//! forma de concatenar promisses (pra que uma só rode depois da anterior)
esperaAi('Conexão com o BD', rand(1, 3))
  .then((res) => {
    console.log(res);
    return esperaAi('Buscando dados da Base', rand(1, 3))
  })
  .then((res) => {
    console.log(res);
    return esperaAi('Tratando dados da Base', rand(1, 3))
  })
  .then((res) => {
    console.log(res);
  })
  .then(() => {
    console.log("finalizou tudo");
    return esperaAi(1, rand(1, 3)) //vai gerar um reject
    //throw new Error("Essa é uma excessão"); //cai como uma excessão no catch
  })
  .catch((err) => {
    if (err instanceof Error) {
      console.log("Excessão: ", err.message);
    } else {
      console.log("Reject: ", err);
    }
  });