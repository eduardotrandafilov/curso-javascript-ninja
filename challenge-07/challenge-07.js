/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1,'string',true,{nome:'eduardo',idade:20},[1,2,'a']];

console.log('array');
console.log(arr);

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
  arr.push(item);
  return arr;
}
console.log('function addItem');
console.log(addItem(function soma(x,y){return x + y;}));
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.log('adição novo array a function addItem');
var novoItem = [1,{cor:'blue',portas:4,motor:'3cv'},false];
console.log(addItem(novoItem));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
var qtdElem = arr.length;
var indiceArray = qtdElem -1;
var segundoElemNovoArr = arr[indiceArray][1];

console.log('O segundo elemento do segundo array é '+ segundoElemNovoArr);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
var qtdItensPrimeiroArr = arr.length;
console.log('O primeiro array tem '+ qtdItensPrimeiroArr +' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
var indiceSegundoArr = arr.length -1;
var qtdItensSegundoArr = arr[indiceSegundoArr].length;

console.log('O segundo array tem '+ qtdItensSegundoArr +' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 10;
console.log( 'Números pares entre 10 e 20:' );
while(num >= 10 && num <= 20){
  if (num % 2 === 0){
    console.log(num);
  }
  num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
num = 10;
while(num >= 10 && num <= 20){
  if (num % 2 !== 0){
    console.log(num);
  }
  num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (var num =100; num <= 120; num++){
  if (num % 2 === 0){
    console.log(num);
  }
}

console.log( 'Números ímpares entre 111 e 125:' );
for (var num =111; num <= 125; num++){
  if (num % 2 !== 0){
    console.log(num);
  }
}
