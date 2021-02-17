/* ) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */


 function calcularCrescimento(alt1,alt2,tax1,tax2){
    let anos = 0;
    if(alt1 < alt2 && tax1 > tax2){ 

        while(alt1 < alt2 && tax1 > tax2 ){

            alt1 = tax1 + alt1
            alt2 = tax2 + alt2  
            anos++
            console.log(alt1+'///'+alt2)
        }

    }else if (alt2 < alt1 && tax2 > tax1  ){

        while(alt2 < alt1){

            alt1 = tax1 + alt1
            alt2 = tax2 + alt2  
            anos++
            console.log(alt1+'///'+alt2)
           
        }

    }else if (alt1 == alt2){

        return 'Alturas iguais'
    }else if( (alt1<alt2 && tax1 < tax2) || (alt2<alt1 && tax2 < tax1) ){

        return 'A criança mais baixa nunca ira ultrapassar a mais alta...'
    }

    return anos
 }



 console.log(calcularCrescimento(150,130,2, 3))