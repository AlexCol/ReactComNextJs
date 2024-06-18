class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  saudar() {
    console.log(`Oi, meu nome é ${this.nome} ${this.sobrenome}`);
  }
  falar() {
    console.log(`${this.nome} está falando.`);
  }
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
}

const p1 = new Pessoa("Alex", "Coletti");
const p2 = new Pessoa("Deise", "Brum");
p1.saudar();
p2.comer();