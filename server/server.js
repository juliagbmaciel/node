const express = require('express') //aqui nós acessamos o modulo express baixado atraves do comando npm install express
const app = express(); //aqui inicializamos o express na variavel default app
app.use(express.urlencoded({extended: true})) //aqui é uma encodificação que permite que nós acessemos o body da requisição (nesse caso o corpo do input no index)


//aqui estamos inicializando o index (localhost:3000) com um formulário que pode ser enviado (trecho de html)
app.get('/', (req, res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"> 
    <button>Vinicius feio</button>
    </form>
    `)
    //detalhe que acessamos esse "name" ali embaixo para nos referirmos ao que vem dentro do input
});



//aqui eu digo: quando o form for postado, faz a seguinte função
app.post('/', (req, res)=>{
    console.log(req.body)//dando console log no corpo do input, pois quando postamos é ele que é enviado para o post
    res.send(`o que você me enviou foi: ${req.body.nome}`)//pegando o "nome" que é o nome que demos ao input la em cima, entao é assim que nos referenciamos a intens do html
})


//aqui eu to colocando mais um parametro na url, ou seja, quando isso for escrito la, teremos esse resultado que esta dentro da fução
app.get('/julia_linda/:ju?/:param?', (req, res)=>{
    //detalhe, existem dois tipos de parametros, os queries que normalmente sao usados para coisas especificas, e os proprios parametros mesmo
    //caso queiramos escrever os parametros mesmo ao inves das queries, temos que fazer a sintaxe da forma em que esta escrita /:parametro?/
    res.send(req.query.nome)
    //a query normalmente vem na seguinte sintaxe nome=julia&sobrenome=maciel
    res.send(req.params)
    console.log(req.params)
});

//aqui configuramos que o app vai rodar na porta 3000
app.listen(3000, ()=>{
    console.log('acessar http://localhost:3000')
}) 


