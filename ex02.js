/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangulos(a,b,c){
    if (a == b && b == c){
        return console.log("Equilatero")
    }else if(a==b || a==c || b==c  ){
        return console.log("Isoceles")
    }else{
        return console.log("Escaleno")
    }

}


triangulos(2, 2, 2)
triangulos(2, 1, 3)
triangulos(4, 1, 4)
