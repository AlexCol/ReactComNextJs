const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av. Brasil',
    numero: 320
  }
}

//? colocar ':' permite mudar o nome da variavel, como mudar de nome para apelido ou destruturar um objeto de outro objeto
const { nome, sobrenome, endereco: { rua } } = pessoa;
console.log(nome, rua);

const { nome: apelido } = pessoa;
console.log(apelido);