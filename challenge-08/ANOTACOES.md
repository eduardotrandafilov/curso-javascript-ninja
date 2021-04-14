# Anotações Aula , Exercícios & Git

## Aula

### Funções

- nomear funções ao invés de usar funções anônimas 
  - vantagem em facilitar o debug 

```js
//devemos criar funções nomeadas 

var func = function func(){
  return 'hi';
}

//devemos evitar criar funções anônimas 

var func1 = function(){

}
```
### Programação funcional

- são obj de primeira classe
  - as funções tem o mesmo tratamento dos obj no js
  - o acesso que fazemos em obj de suas características também pode ser feito com funções
- 

```js
//funções literais, não há criação de variável de referência

function sum(x,y){
  return x + y;
}

// retorno de obj em uma função

function person(){
  return(
    {
      name: 'eduardo',
      lastName: 'trandafilov'
    });
}

// retorno de funções a partir de outra função
function adder(x){
  return function(y){
    return x + y;
  }
}

// outro modo de implementar a function acima
function adder(x){
  function addOther(y){
    return x + y;
  }
  return addOther;
}

// chamada poderá ser de dois tipos:
// 1 tipo:

var add2 = adder(2);
add2(5); 

// 2 tipo: 
adder(x)(y);

// passagem de funções como parâmetro

function showOtherFunction(func){
  return func();
}

showOtherFunction(function(){
  return 'Functional JS Ninja!'; 
});
```

#### Dicas
> Evite uso do operador vírgula para evitar confusão ou dificultar o entendimento do código . Utilizar um var para cada variável declarada
> - Ex.: variável com escopo global e local pode gerar dificuldade na manutenção ao confundir os escopos



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
