var modelos = []
var consume = []

for (var i = 0; i < 5; i++) {
    var modelo = prompt("informe o modelo do carro " + (i+ 1) + ":")
    var consumo = parseFloat(prompt("informe o consumo em KM/L do carro"+(i+i) + ":"))

    modelos.push(modelo)
    modelos.push(consumo)
}
var modeloMaisEconomica = ""
var consumoMaisEconomico = consumos[0]

for (var i = 1; i < 5; i++) {
    if (consumo[i] > 0 && consumos[i] < consumoMaisEconomico) {    
        modeloMaisEconomica = modelos[i]
        consumoMaisEconomico = consumos[i]
    }
}

var litrospara1000km = []
for (var i = 0; i < 5; i++) {
    var litos = 1000 / consumos[i]
    litrospara1000km.push(litros.toFixed(2))
}
console.log("modelos do carro mais economicos: " + modelosMaisEconomico)
for (var i = 0; i < 5; i++){
    console.log("o carro " + modelos[i] + " consumo " + litrospara1000km[i] + "litos para pecorrer 1000 KM.")
}
