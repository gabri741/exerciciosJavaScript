/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

function buscarPalavrasSemelhantes(palavra, array) {

    novoArray = array.filter(string => string.includes(palavra))

    return novoArray
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])); // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])); // retornará ["javascript", "java"]
