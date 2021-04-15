# Anotações Aula , Exercícios & Git

## Aula

### Escopo de funções

- nomear funções ao invés de usar funções anônimas 
  - vantagem em facilitar o debug 

```js
/* 
variáveis n1 e n2 são acessadas pela função sum mas o inverso não é possível , ou seja, myFunction não acessa as variaveis de escopo local de sum
*/

function myFunction(){
  var n1;
  var n2;

  function sum(){
    return n1 + n2;
  }
  return sum();
}

/*
myFunction é executada normalmente , pois sum() é evocado após os valores n1 e n2 serem criados anteriormente.
*/

function myFunction(){
  function sum(){
    return n1 + n2;
  }
  var n1 = 1;
  var n2 = 2;
  return sum();
}

 /*
 myFunction é executada normalmente devido ao hoisting (significa 'içamento' ou 'elevação') que funciona para o caso de funções literais como sum () .
*/

function myFunction(){
  var n1 = 1;
  var n2 = 2;
  return sum();
  function sum(){
    return n1 + n2;
  }
}

// hoisting interpreta o js como abaixo

function myFunction(){
  function sum(){
    return n1 + n2;
  }
  var n1 = 1;
  var n2 = 2;
  return sum();
}

/* 
não há hoisting quando temos atribuição de  uma variável 
por uma function
*/ 

1)

function myFunction(){
  var n1 = 1;
  var n2 = 2;
  return sum();
  var sum = function sum(){
    return n1 + n2;
  }
}

// o item 2  mostra porque myfunction do item 1 executa com falha , ou seja, sem hoisting 

2)

function myFunction(){
  var n1 = 1;
  var n2 = 2;
  var sum = undefined;
  return sum();
  sum = function sum(){
    return n1 + n2;
  }
}

/*
  as variaveis em um caso de hoisting vão para o início da função e a atribuição é feita apenas no momento exato onde é realizado a atribuição 
*/


// função abaixo vai falhar devido a number2 não estar definida


function myFunction(){
  console.log('antes de declarar',number1);
  console.log('number2',number2);
  var number1 = 10;
  console.log('depois de declarar',number1);
}

```
### IIFE (Immediately-invoked function expression)-função auto-executável

- para executarmos uma função literal devemos torná-la uma expressão
- [Declaração x expressão](https://fellowsdevel.com/diferenca-entre-declaracao-de-funcao-e-expressao-de-funcao/)
- vantagem de termos um IIFE é a criação de um escopo local e não global para a function.**Escopo global permite compartilhar informação com todo o projeto diferente de um escopo local.Isso pode fazer com que perdemos o controle seja de uma variável ou função** 

```js
/*
uso de parênteses transforma uma declaração em uma expressão
temos duas formas de sintaxe usada :
*/

(function(){
  return 1 + 2;
})();

(function(){
  return 1 + 2;
}());

```

#### Dicas

> Evite uso do operador vírgula para evitar confusão ou dificultar o entendimento do código . Utilizar um var para cada variável declarada
> Ex.: variável com escopo global e local pode gerar dificuldade na manutenção ao confundir os escopos

> Boa prática no js é usarmos escopos locais e não globais para mantermos as informações mais coesas possível e com o máximo de controle.


## Comandos git

**1) Adicionar repositório remote:**

```
git remote add upstream git@github.com:da2k/curso-javascript-ninja.git
```

**2) Fazer download para repositório local com base no repository remoto**

```
git fetch upstream
```

**3) Fazer merge de duas branchs**

```
git merge upstream/master
```

**4) Diferenças comandos reset**

[git reset](https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard#:~:text=%2D%2Dsoft%20%3A%20Tells%20Git%20to,be%20altered%20in%20any%20way.&text=%2D%2Dhard%20%3A%20This%20resets%20everything,to%20match%20it%20as%20well.)

**5) PR para apenas alguns arquivos / commits**

[git PR](https://stackoverflow.com/questions/12660839/pull-request-for-only-certain-files-commits)

**6) Renomear branch local**

[git rename branch](https://linuxize.com/post/how-to-rename-local-and-remote-git-branch/)

**7) Mergear arquivos especificos de outra branch**

[git merge](https://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/)

**8) Remover arquivo do working directory**

```
git rm -rf <nome_arquivo>
```

**9) Copiar um arquivo de uma branch para outra**

- ir para branch para onde deve ser copiado o arquivo (meu caso challenge-05)
- após estar na branch de destino do arquivo devemos informar a branch de interesse de onde deve ser copiado o arquivo e o caminho onde se encontra esse arquivo na branch (busquei challenge-04:challenge-04/ANOTACOES.md)
- apos informar o item acima devemos indicar o nome do arquivo ou destino juntamente ao nome que queremos dar ao arquivo copiado (ANOTACOES.md)

**Instrução**

```
git show challenge-04:challenge-04/ANOTACOES.md > ANOTACOES.md
```

**Resultado**

![vscode](https://user-images.githubusercontent.com/9969265/114279025-f40f6e80-9a08-11eb-9db2-8efd89d41807.png)
