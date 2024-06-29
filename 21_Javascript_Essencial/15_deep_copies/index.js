/*
Uma deep copy cria uma cópia completamente nova e independente do objeto ou 
array original, incluindo todas as suas propriedades aninhadas. Isso significa 
que nenhuma referência aos objetos ou arrays aninhados é compartilhada entre a 
cópia e o original.
*/

const original = {
  name: "Alice",
  address: {
    city: "Wonderland"
  }
};

// Deep copy
const copy = JSON.parse(JSON.stringify(original));

copy.name = "Bob";
copy.address.city = "Reality";

console.log(original.name); // Alice
console.log(original.address.city); // Wonderland
