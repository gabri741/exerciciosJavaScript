/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
 */


 function filtrarNumeros(array){

   let newArray = array.filter(isAnumber)   
   
   return newArray;

 }


 function isAnumber(element){

    if(typeof element == 'number' ){
        return element
    }
 }


 console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20]
 console.log(filtrarNumeros(["a", "c"])) // retornará []