//diferente do ES6(??), não se importa utilizando import
//retorna tudo que estou exportando de mod1 em forma de objeto
const mod1 = require('./mod1')
console.log(mod1.nome)

//fazendo associação via desestruturação:
const {nome, sobrenome} = require('./mod1')
console.log(sobrenome)


//O legal de desestruturação é que eu posso usar o verdadeiro nome da variavel
//que estou exportando que o js ja vai reconhecer automaticamente, nao necessariamente precisa ser por ordem
const { Pessoa } = require('./mod1')
const p1 = new Pessoa('julia')
console.log(p1)