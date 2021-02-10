/* Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

function simplificar(a){

    let num = a.toFixed(2).toString().replace('.',',')
    console.log("R$" + num)
}

simplificar( 0.30000000000000004)