/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */


function numerosNegativos(vetor){

    vetor = vetor.filter(a => a < 0)
    
   return vetor.length;

}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))