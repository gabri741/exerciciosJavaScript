/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
 */


 function estaEntre(minimo, maximo, numero, inclusivo){
    let res = 0;
    if(inclusivo == false || inclusivo == undefined){

         res = (numero > minimo && numero < maximo) ? 'Está entre o intervalo' : 'Não está entre o intervalo'

        return console.log(res);
    }
    
     res = (numero > minimo && numero < maximo) ? 'Está entre o intervalo' : 'Não está entre o intervalo'
     res = (numero == minimo || numero == maximo) ? `Máximo ou Mínimo igual a ${numero}` : 'Número indefinido'


    return console.log(res);


 }


estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true