/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
 */


 function primeiroUltimo(array){
    
    return [array.shift(), array.pop() ]
 }


 console.log(primeiroUltimo(([7,14,"olá"])))  
 console.log(primeiroUltimo([-100, "aplicativo", 16])) 