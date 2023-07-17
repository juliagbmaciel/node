/* 
   !!!Explicação do conteúdo!!!
    aqui vamos estudar como trabalhar com modulação, que pelo nome, ja é fácil de entender do que se trata.
    O node é um framework que nos permite trabalhar com isso e adaptar para todos os navegadores (webpack, babel que ja foi estudado).
    Para conseguirmos usar funções e/ou variáveis, objetos, em outros codigos, precisamos exportar eles no codigo em questão
    com isso, existem algumas formas de exportar esses itens, serão mostradas nesse codigo abaixo
*/


const nome = 'julia'
const sobrenome = 'gabrielle'

const falaNome = () => {
    console.log(nome + sobrenome) 
}


//Essa é uma forma nao tao otimizada de exportar algo
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
console.log(module.exports) 

//Temos também a forma abreviada que ficaria da seguinte forma 
/*
exports.nome = nome;
exports.sobrenome = sobrenome;
*/


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}
//
exports.Pessoa = Pessoa
