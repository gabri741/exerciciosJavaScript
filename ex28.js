/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */


function paresImpares(vetor){

    let pares = 0;
    for (i = 0 ; i< vetor.length; i++){
        
        if(vetor[i] % 2 ==0){
            pares++
        }

    }

    impares = vetor.length - pares

    return "Pares:" + pares +" / Impares:"  + impares
}


vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(paresImpares(vetor))