/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

 function repetir(rep, numrep){
    
    res = []

    for(i =0 ; i<numrep ; i++){
        res[i] = rep
    }

    return res;
 }




console.log(repetir("código", 2)) // retornará ["código", "código"])
console.log(repetir(7,3))// retornará [7, 7, 7]



 

