/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
 */


 function receberSomenteOsParesDeIndicesPares(array){
    let res = [];
   for(let i in array){
       if(i%2 == 0 && array[i]%2 ==0){
            res.push(array[i])
       }
   }

   return res;

 }


 console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
 console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))