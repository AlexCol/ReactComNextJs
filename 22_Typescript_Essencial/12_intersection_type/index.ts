// usado com: &

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome | TemSobrenome | TemIdade; //pode ter um, dois ou todos.
const pessoa: Pessoa = { //posso apagar ou ignorar qualquer um das tres propriedades
  nome: 'Alex',
  sobrenome: 'Coletti'
}

type Pessoa2 = TemNome & TemSobrenome & TemIdade; //precisa ter todos
const pessoa2: Pessoa2 = { //se não tiver qualquer propriedade dos typos da intersection, dá erro
  nome: 'Alex',
  sobrenome: 'Coletti',
  idade: 38
}

////////////////////////////////////////////////////
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type AE = 'A' | 'E';

type Intersection = AB & AC & AD & AE;
const i: Intersection = 'A'; //só vai aceitar A que é o objeto comum entre os tipos listados