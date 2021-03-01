/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento: */


function objetoParaArray(obj){
        console.log(Object.entries(obj))
}


obj = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }



    objetoParaArray(obj)