# Anotações Aula , Exercícios & Git

## **Truthy e Falsy**

### Truthy

- é um valor que se traduz em verdadeiro quando avaliado em um contexto booleano.
- {}
- todos os outros valores diferentes do falsy

```js
//Exemplo de true em js

var teste;

if ({}) {
  teste = true;
} else {
  teste = false;
}

// teste imprime true
```

### Falsy

- é um valor que se traduz em false quando avaliado em um contexto booleano.
- undefined
- null
- NaN
- 0
- -0
- '' (string vazia)
- ""
- false

```js
//Exemplo de falsy em js

var teste;

if (null) {
  teste = true;
} else {
  teste = false;
}

// teste imprime false
```

### Representação booleana de um valor sem if através !! (duas exclamações)

> Exclamação inverte o valor booleano

```js
//valor será false

!!"";

/* 

1º !"" que é um valor true

2º !!"" uso de mais uma exclamação inverterá o valor booleano ficando false 

*/
```

### Condicional ternário

_*Deve ser utilitado para instruções pequenas*_

```js
condição ? : true : false;
```

### Escopo de variáveis

#### Escopo global

- fora de função

#### Escopo local

- dentro de uma função
- argumentos de função

**_obs: Sempre que criar uma variável utilizar palavra chave var_**

---

### Comandos git

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
