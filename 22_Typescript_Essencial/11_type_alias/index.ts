type Idade = number;

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

type Pessoa = {
  name: string,
  idade: Idade,
  salario: number,
  corPreferida?: CorPreferida
}

const pessoa: Pessoa = {
  name: 'Alex',
  idade: 38,
  salario: 4_500, //pode-se aplicar separadores com _, o typescript entende como um numero
  corPreferida: "Magenta"
}

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {
    ...pessoa, corPreferida: cor
  }
}

console.log(pessoa);
const pessoa2 = setCorPreferida(pessoa, "Amarelo");
console.log(pessoa);
console.log(pessoa2);