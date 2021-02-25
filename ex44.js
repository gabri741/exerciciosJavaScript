/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
 */


 function nomeDoMes(numMes){


    if(numMes > 0 && numMes < 13){
    meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    return console.log(meses[numMes - 1])
    }
    else{
        return console.log('Mês inexistente')
    }

 }


 nomeDoMes(1) // retornará "janeiro"
 nomeDoMes(4) // retornará "abril"

 /* Outra maneira é utilizando o switch */