/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
 */

 function imprimirImpares(ini,fim){

    
    if(ini == undefined){
        ini = 0;
    }

    if(fim == undefined){
        fim = 100
    }
    
    if( ini > fim){
        aux = ini;
        ini = fim;
        fim = aux;
    }

    for(i = ini+1; i<fim+1; i++){

        if(i % 2 == 1){
            console.log(i)
        }
    }


 }


 imprimirImpares(19, 3)
 console.log('-=-=-=-=-=-=-==--=-=--=-=-=-=-=--=-=-=')
 imprimirImpares(3, 19)
 console.log('-=-=-=-=-=-=-==--=-=--=-=-=-=-=--=-=-=')
 imprimirImpares()