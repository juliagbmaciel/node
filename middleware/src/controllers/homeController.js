exports.paginaInicial =  (req, res, next)=>{
    res.render('index')
    next()
}


exports.trataPost = (req, res) => {
    if (req.body.cliente === 'julia'){
        res.render('index')
    }else{
        res.send('senha invalida')
    }

}