/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 */



 function maiorOuMenor(a,b) {

    if(a>b){
        return `${a} é maior que ${b} `
    }else if(a<b){
        return `${b} é maior que ${a} `
    }else{
        return `${a} e ${b} são iguais `
    }
 }  


 console.log(maiorOuMenor(0,0))
 console.log(maiorOuMenor(1,0))
 console.log(maiorOuMenor(0,1))