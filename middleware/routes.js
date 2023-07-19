const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const midGlobal = require('./src/middlewares/middleware')

function meuMiddle(req, res, next){
    req.session = {nome: 'julia'}
    console.log()
    console.log('estou no middleware')
    console.log()
    next();
}
//Rotas da home
route.get('/', meuMiddle, homeController.paginaInicial, meuMiddle2, midGlobal);
route.post('/', midGlobal, homeController.trataPost)

function meuMiddle2(req, res, next){
    console.log(req.session.nome)
    next();
}

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)



module.exports = route;