var monedas = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina']
var dolarToPesoC = 3.935
var dolarTopesoM = 20.78
var dolarToLibra = 0.74
var dolarToEuro = 0.88

var pesocToDolar = 0.00026
var pesocToPesom = 0.0053
var pesoctolibra = 0.0019
var pesocToEuro = 0.0022

var pesomToDolar = 0.048
var pesomtolibra =  0.0036
var pesomToPesoc = 189.48
var pesomToLibra = 0.036

var libraToDolar = 1.35
var libraToPesoc = 5.313
var libraToPesom = 28.03 
var libraToEuro = 1.19
 
var euroToDolar = 1.14
var euroToPesoc = 4.774
var euroToPesoM = 23.62
var euroTolibra = 0.84

function appendChild(){
    var selectBody = document.getElementById("divisa-1")
    monedas.forEach( moneda => {
        let option = document.createElement("option");
         option.textContent = moneda.toString() 
         option.value = moneda
         selectBody.appendChild(option)
    })
    return option
}
appendChild()