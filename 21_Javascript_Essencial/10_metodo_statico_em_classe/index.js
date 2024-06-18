class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  static trocaPilha() {
    console.log('Trocando pilha estaticamente.');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

const controle2 = new ControleRemoto('Sansung');
console.log(controle2);


//!metodo estatico, não vai funcionar
//controle2.trocaPilha();
ControleRemoto.trocaPilha();