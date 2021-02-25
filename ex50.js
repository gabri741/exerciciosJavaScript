/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
 */


 function repetirMais(numrep){
        
       if(numrep == 0){
              return ''
       }
       numrep--
        return '+' + repetirMais(numrep)

 }

 function simboloMais(quantidade) {
       return "+".repeat(quantidade)
       }
       
 console.log(repetirMais(3))
 console.log(simboloMais(3))