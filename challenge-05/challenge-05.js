/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [
  1,
  'string',
  null,
  undefined,
  {
    nome: 'eduardo',
    idade: 20,
    rg: '123456789xx',
    andar: function () {
      return 'andando';
    },
  },
];

console.log('imprime array myarray');
console.log(myarray);
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(myarray) {
  return myarray;
}

console.log('retorna array myarray -function retornaArray');
console.log(retornaArray(myarray));
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log('retorna valor myarray[1] -function retornaArray');
console.log(retornaArray(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaValorIndiceArray(myarray, numIndice) {
  return myarray[numIndice];
}

console.log(
  'retorno valor myarray[4].nome -function retornaValorIndiceArray()'
);
console.log(retornaValorIndiceArray(myarray, 4).nome);
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarray2 = [
  1,
  'string',
  null,
  undefined,
  { marca: 'volkswagen', modelo: 'gol', cor: 'prata', ano: '2021' },
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(
  'retorno todos valores de myarray2-function retornaValorIndiceArray'
);
console.log('myarray2[0]', retornaValorIndiceArray(myarray2, 0));
console.log('myarray2[1]', retornaValorIndiceArray(myarray2, 1));
console.log('myarray2[2]', retornaValorIndiceArray(myarray2, 2));
console.log('myarray2[3]', retornaValorIndiceArray(myarray2, 3));
console.log('myarray2[4]', retornaValorIndiceArray(myarray2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro) {
  var listaLivros = {
    'livro1': {
      quantidadePaginas: 100,
      autor: 'autor1',
      editora: 'editora1',
    },
    'livro2': {
      quantidadePaginas: 200,
      autor: 'autor2',
      editora: 'editora2',
    },
    'livro3': {
      quantidadePaginas: 300,
      autor: 'autor3',
      editora: 'editora3',
    },
  };

  return !nomeLivro ? listaLivros : listaLivros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log('function book sem parâmetro');
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nomeLivro = 'livro2';
console.log('mensagem qtd páginas - uso function book');
console.log(
  'O livro ' +
    nomeLivro +
    ' tem ' +
    book(nomeLivro)['quantidadePaginas'] +
    ' páginas!'
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('mensagem nome autor - uso function book');
console.log(
  'O autor do livro ' + nomeLivro + ' é ' + book(nomeLivro).autor + '.'
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('mensagem editora - uso function book');
console.log(
  'O livro ' +
    nomeLivro +
    ' foi publicado pela editora ' +
    book(nomeLivro).editora +
    '.'
);
