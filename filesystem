const fs = require('fs').promises;//fs significa filesystem, ou seja, eu estou pegando este modulo que ja existe no node e utilizando ele como uma promise


//path é tambem um modulo que encontra o nome do diretorio atual, podendo utilizar __dirname ou __filename
const path = require('path')


//o path resolve arruma o caminho pois usando './' ele chega na pasta anterior, e nesse caso queremos que ele encontre o 
//arquivo "filesystem", e dentro dele pegamos os arquivos que o compoem
//aqui estamos pedindo para o fs ler o seguinte diretorio (diretorio atual) ./fylesistem
fs.readdir(path.resolve(__dirname))
//recebo como resolve da promise os arquivos que estao dentro desse diretorio, o que no caso seria index.js
.then(files => console.log(files))

.catch(e => console.log(e))


//luiz criou uma outra tecnica de mandar o caminho para a promise, utilizando uma function
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);
        console.log(file, stats.isDirectory())
    }
}

readdir('C:/Users/ct67ca/Desktop')
