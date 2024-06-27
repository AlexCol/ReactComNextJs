const objectA = {
  chaveA: 'ChaveA',
  chaveB: 'ChaveB'
}

//não pode
//objectA.chaveC = 'a';

//forma pra conseguir criar 'campo qualquer'
//mas não é ba pratica, pois a IDE não vai conseguir ajudar com intelissense
const objectB: {
  chaveA: string,
  readonly chaveB: string,
  [key: string]: unknown
} = {
  chaveA: 'ChaveA',
  chaveB: 'ChaveB'
}

objectB.minhaNovaChave = 'aaa';

console.log(objectB);

console.log(objectB.banana); //não dá erro, pois o objeto tem [key: string]: unknown, então pra ter segurança, evitar

//objectB.chaveB = 'outro valor'; //não deixa, pois a chaveB está como readonly