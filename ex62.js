/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado. */

function funcaoDaSorte(num){

    let randonNumber = Math.floor(Math.random() * 10) + 1;

    return  randonNumber == num ? `Parabéns! O número sorteado foi o ${randonNumber}` : `Que pena! O número sorteado foi o ${randonNumber}`
}

console.log(funcaoDaSorte(1)); // 
console.log(funcaoDaSorte(2)); // 
console.log(funcaoDaSorte(3)); // 
console.log(funcaoDaSorte(4)); // 
console.log(funcaoDaSorte(5)); // 
console.log(funcaoDaSorte(6)); // 
console.log(funcaoDaSorte(7)); // 
console.log(funcaoDaSorte(8)); // 
console.log(funcaoDaSorte(9)); // 
console.log(funcaoDaSorte(10)); // 
