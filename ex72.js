//Desenvolva um programa que pegue a cotação do dolar do dia atual e transforme em real.npm
//
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = month + "-" + day + "-" + year;

var url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='" + newdate + "'&$format=json"


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();
request.open('GET', url, true);
const prompt = require('prompt-sync')();

request.onload = function () {

    if (request.readyState == 4 && request.status == 200) {

        var resposta = JSON.parse(request.responseText);
        var valores = resposta.value[0];
    
        var valorDesejado = prompt("Digite o valor em dólar do produto: ")
        var valorEmReal = valorDesejado * valores.cotacaoCompra

       console.log("Este é o valor em real do produto: " + valorEmReal.toFixed(2))
    }
};

request.onerror = function () {
    console.log("Erro:" + request);
};
request.send();