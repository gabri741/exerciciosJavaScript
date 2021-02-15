    
 /* As regras para o cálculo dos anos bissextos são as seguintes:
 De 4 em 4 anos é ano bissexto;
 De 100 em 100 anos não é ano bissexto;
 De 400 em 400 anos é ano bissexto;
 Prevalecem as últimas regras sobre as primeiras.
 Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
 mensagem e retornando true ou false.
*/

function tipoAno(ano){

    if(ano <= 0){
        return false;
    }else if( ano % 400 == 0){
        console.log("Bissexto")
        return true;
    }else if ( ano % 100 == 0){
        console.log("Não bissexto")
        return false;
    }else if(ano % 4 == 0){ 
        console.log("Bissexto")
        return  true;
    }else{
        return false;
    }

}

tipoAno(0)
tipoAno(4)
tipoAno(100)
tipoAno(400)
tipoAno(800)
tipoAno(2020)
tipoAno(2021)