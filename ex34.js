/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */


function verificacaoDeString(string1,string2){

    tamMaior = string1.length > string2.length ? string1.length : string2.length
    i = 0;
    encontrou = 1;

    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    console.log(string2)

    while(encontrou >= 0){

        if(string1.length >= string2.length){
        encontrou = string2.indexOf(string1[i], [pontoInicial = 0])
        console.log(encontrou+'    /1')
        i++;


        }else{
            encontrou = string1.indexOf(string2[i], [pontoInicial = 0])
            console.log(encontrou+'    /2')
            i++;

        }

        if(i == tamMaior && encontrou != -1){
            return true;
        }

    }

    console.log(encontrou)
    return false

}



console.log(verificacaoDeString('abc','cbA'))