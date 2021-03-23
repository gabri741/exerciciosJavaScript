/* Utilizar o PROMISSE para encapsular a chamada de um arquivo, ou seja da função readFile */


const fs = require('fs')
const path = require('path')

/* const caminho = path.join(__dirname, 'dados.txt')
fs.readFile(caminho, exibirConteudo) */


function exibirConteudo2(arquivo){
    
    return new Promise(resolve =>{
        const caminho = path.join(__dirname, arquivo)
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
        
    })

}


exibirConteudo2('dados.txt')
    .then(conteudo => console.log(conteudo))
    


