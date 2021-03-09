/* Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais.
 */

function removerVogais(string){

    newString = string.replace(/[aeiou]/gi, '');

    return newString
}

console.log(removerVogais("Cod3r")); // retornará "Cd3r"
console.log(removerVogais("Fundamentos") );// retornará "Fndmnts"