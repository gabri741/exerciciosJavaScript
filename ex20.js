/* ) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

function sacarDinheiro(valor){

    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota1 = 0;

    while(valor >= 100 ){
            nota100++;
           valor -= 100 ;
           
    }

    while(valor >= 50 ){
        nota50++;
       valor -= 50 ;
       
    }

    while(valor >= 10){
        nota10++;
       valor -= 10 ;
      
    }

    while(valor >= 5 ){
        nota5++;
       valor -= 5 ;
      
    }

    while(valor >= 1 ){
        nota1++;
       valor -= 1 ;
     
    }

    return elaborarResultado(nota100,nota50,nota10,nota5,nota1)
    

}



function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}


console.log(sacarDinheiro(153));
