enum ECores {
  VERMELHO = 'a',
  AZUL = 1,
  AMARELO = 'true',
  ROSA = 'pink',
  ROXO = 56
}

//console.log(ECores);

function MostraValorCor(cor: ECores): void {
  console.log(cor);
}

// MostraValorCor(ECores.VERMELHO);
// MostraValorCor(ECores.AZUL);
// MostraValorCor(ECores.AMARELO);
// MostraValorCor(ECores.ROSA);
// MostraValorCor(ECores.ROXO);

function MostraChaveCor(valor: string | number): keyof typeof ECores | null {
  for (const key in ECores) {
    if (ECores[key as keyof typeof ECores] === valor) {
      return key as keyof typeof ECores;
    }
  }
  return null; // Retorna null se não encontrar  
}

const cor = MostraChaveCor('pink');
if (cor !== null) {
  console.log(cor); // Isso vai imprimir 'ROXO'
} else {
  console.log('Valor não encontrado');
}

function MostraChaveCor2(valor: string | number): void {
  for (const key in ECores) {
    if (ECores[key as keyof typeof ECores] === valor) {
      const chave = key as keyof typeof ECores;
      console.log(chave, '-', ECores[chave]);
      return;
    }
  }
  console.log('Não encontrado');
}

MostraChaveCor2(1);
MostraChaveCor2('true');