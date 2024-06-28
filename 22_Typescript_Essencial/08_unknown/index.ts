let x: unknown; //é inferido o tipo conforme o dado que ela conter

x = 100; //agora x é number
console.log(typeof x);

x = 'a'; //agora x é string
console.log(typeof x);

x = true; //agora x é booleano
console.log(typeof x);

const y = 5;

//com tipo unknown, vai ser forçado a realizar checagem, pois any permitiria o processo abaixo, mesmo com x sendo boolean ou string
//com tipo unknown, não importa o tipo de x atual, é preciso validar ele pra usar
if (typeof x === 'number') //?com esse if posso realizar a operação abaixo sem o typescript reclamar
  console.log(x + y);