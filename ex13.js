/* ) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7.  */

function diaDaSemana(numdia){

    if(numdia > 1 && numdia < 7){
        console.log("Dia Util");
    }else if(numdia == 1 ||  numdia == 7){
        console.log("Fim de Semana");
    }else{
        console.log("Dia Inválido");
    }
}

diaDaSemana(1);
diaDaSemana(2);
diaDaSemana(3);
diaDaSemana(4);
diaDaSemana(5);
diaDaSemana(6);
diaDaSemana(7);
diaDaSemana('a');
