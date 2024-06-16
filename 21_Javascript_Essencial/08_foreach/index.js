const numeros = [10, 20, 30];

//for of
for (let valor of numeros) {
  console.log(`Laço for of: Olhando valor: ${valor}`);
}

//foreach
numeros.forEach((valor, indice, array) =>
  console.log(`Laço foreach: Olhando valor: ${valor} no indice ${indice} do array ${array}`)
);

//foreach2
let total = 0;
numeros.forEach(item => total += item);
console.log(total);