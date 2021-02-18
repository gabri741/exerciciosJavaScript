/* ) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function trocaValores(vetor1,vetor2){
    
    if(vetor2.length != vetor1.length){
        console.log('entrei if')
        return false
    }
    

    console.log('Novo vetor A: ' + vetor2.reverse())
    console.log('Novo vetor B: ' + vetor1.reverse())

}


function trocaValores2(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}



let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6] 

trocaValores(vetorA, vetorB)
console.log('-=-=-----=-==-==-=-=-=-=-==----=-==-')
trocaValores2(vetorA, vetorB) 