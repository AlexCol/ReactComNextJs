/*
Uma shallow copy cria uma nova referência para o objeto ou array original, 
mas não copia os objetos aninhados de forma profunda. Em outras palavras, 
para os objetos aninhados dentro da estrutura copiada, as referências ainda 
apontam para os mesmos objetos originais.
*/

const original = {
  name: "Alice",
  address: {
    city: "Wonderland"
  }
};

// Shallow copy
const copy = { ...original };

copy.name = "Bob";
copy.address.city = "Reality";

console.log(original.name); // Alice
console.log(original.address.city); // Reality