//tupla é um array com tipos fixos em cada uma das posições
const dadosCliente: [number, string] = [1, 'Alex'];
console.log(dadosCliente);

dadosCliente[0] = 14;
//dadosCliente[0] = 'Coletti'; //da erro
dadosCliente[1] = 'Coletti';
console.log(dadosCliente);


type array2 = readonly [number, string, boolean?]; //readonly faz com que não seja possível criar novos registros ou remover com push ou pop
const a1: array2 = [1, 'teste', true];
console.log(a1);
const a2: array2 = [2, 'teste2'];
console.log(a2);

//a2.push('aa'); //dá erro por causa do readonly, se o remover lá de cima aqui não dá mais erro
//console.log(a2);