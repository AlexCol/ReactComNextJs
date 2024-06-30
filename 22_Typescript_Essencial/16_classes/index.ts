//!segunda forma de criar construtor
class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) { }
}

class Empresa {
  public readonly Nome: string;
  private readonly colaboradores: Colaborador[];
  protected readonly Cnpj: string;

  constructor(_nome: string, _cnpj: string) {
    this.Nome = _nome;
    this.Cnpj = _cnpj;
    this.colaboradores = [];
  }

  AdicionaColaborador(novoColaborador: Colaborador) {
    this.colaboradores.push(novoColaborador);
  }

  MostraColaboradores() {
    this.colaboradores.forEach(col => {
      console.log(`${col.nome} ${col.sobrenome}`);
    })
  }
}

const empresa1 = new Empresa('Empresa1', '11.111.111/0001-11');
console.log(empresa1);
//empresa1.Nome = 'Face'; //dá erro pois Nome é readonly

const colaborador1: Colaborador = {
  nome: 'fulano', sobrenome: 'da silva'
}
empresa1.AdicionaColaborador(colaborador1);

const colaborador2: Colaborador = new Colaborador('ciclano', 'machado');
empresa1.AdicionaColaborador(colaborador2);
console.log(empresa1);

empresa1.MostraColaboradores();

/*
colaborador1 é um objeto literal que só possui as propriedades necessárias.
colaborador2 é uma instância da classe Colaborador.
por isso no retorno consta
  colaboradores: [
    { nome: 'fulano', sobrenome: 'da silva' },
    Colaborador { nome: 'ciclano', sobrenome: 'machado' }
  ]
se desejar usar classe, é bom sempre usar com new
*/