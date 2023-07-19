module.exports = (req, res, next) =>{
    req.body.cliente = req.body.cliente.replace('byanka', 'feiosa')
    console.log('passei no meu middleware global')
    next();
};