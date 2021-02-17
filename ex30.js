/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */


function maiorMenor(vetor){

    vetor = vetor.sort((a,b) => a > b ? 1 : -1)


    let maior = vetor[vetor.length -1]

    let menor = vetor[0];

    return `Maior:${maior} e menor:${menor} `


}


vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))