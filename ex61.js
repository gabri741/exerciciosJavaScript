/* Criar uma função que receba um array de números e retorne o menor número desse array.
 */

function menorNumero(array){

    ordenado = array.sort((a,b) => {
        return a-b;
    })

    console.log(array[0])
}

menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15