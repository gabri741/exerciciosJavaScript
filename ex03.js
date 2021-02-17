/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente./*  */
 

function potencia(a,b){

 let resultado = 1;
for( i =0 ; i < b; i++){
    resultado *= a
}
return resultado;
}



console.log(potencia(7, 1))
console.log(potencia(7, 2))
console.log(potencia(7, 3))
console.log(potencia(7, 4))
console.log(potencia(7, 5))
console.log(potencia(7, 6))
console.log(potencia(7, 7))
console.log(potencia(7, 8))
console.log(potencia(7, 9))
console.log(potencia(7, 10))
