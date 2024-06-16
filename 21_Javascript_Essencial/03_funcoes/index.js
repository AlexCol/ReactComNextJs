
falaOi();

//? devido ao 'hoisting', mesmo que declare aqui, uma função pode ser invocada em qualquer parte do código, 
//? o 'hoisting', em tempo de execução joga a declaração de funções para o topo do código
function falaOi() {
  console.log('oi');
}
falaOi();

//? souUmDado(); (por não ser declarado como uma função, souUmDado não pode ser usado antes de sua declaração)
const souUmDado = function () {
  console.log('Sou um dado');
}
souUmDado();

//?
const arrow = () => {
  console.log('Sou uma arrow function');
}
arrow();