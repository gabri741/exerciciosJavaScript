/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

function contarPalavras(string){

    const palavra = string.split(' ')
    return palavra.length
}

console.log(contarPalavras("Sou uma frase")) // retornará 3

console.log(contarPalavras("Me divirto aprendendo a programar")); // retornará 5