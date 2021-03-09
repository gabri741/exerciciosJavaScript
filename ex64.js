/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas.
 */


function contarCaractere(char, string) {

    total = string.split('')
        .filter(c => c === char)
        .length


    return total

}

console.log(contarCaractere("R", "A sorte favorece os audazes")); // retornará 0
console.log(contarCaractere("c", "Conhece-te a ti mesmo")); // retornará 1


