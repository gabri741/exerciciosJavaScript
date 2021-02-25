/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */



function multiplicação(a,b){

    if(a < 0 || b < 0) return false
    if(a < 0 || b < 0) return 0

    res = 0;
    for(i = 1 ; i <=b ; i ++){

        res +=a 
    }
    return res;
}



console.log(multiplicação(0,1))
console.log(multiplicação(2,1))
console.log(multiplicação(5,3))
console.log(multiplicação(2,4))
console.log(multiplicação(2,5))
console.log(multiplicação(2,6))
console.log(multiplicação(2,7))
console.log(multiplicação(2,8))
console.log(multiplicação(2,9))
console.log(multiplicação(2,10))


