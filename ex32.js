/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */


function mediaVetor(vetor){
    soma = vetor.reduce((a,b) => a+b,0)
    return soma/vetor.length;
}



vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))