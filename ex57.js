/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array */


function somarNumeros(array){

        soma = array.reduce(callbackSum)

    return soma;
}


function callbackSum(acc,valor){

    return acc + valor
}


//array = [10, 10, 10]
//array = [15, 15, 15]
array = [1, 2, 3, 4]
console.log(somarNumeros(array))