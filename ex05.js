
let numeros = []

// numeros.push(5)
// numeros.push(-3)
// numeros.push(10)
// numeros.push(-8)
// numeros.push(2)
// numeros.push(-7)
// numeros.push(1)
// numeros.push(-4)

for (let i = 0; i < 8; i++) {
  let numero = parseInt(prompt("Digite um número inteiro:"))
  numeros.push(numero)
}

let numerosPositivos = []
let numerosNegativos = []

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    numerosPositivos.push(numeros[i])
  } else if (numeros[i] < 0) {
    numerosNegativos.push(numeros[i])
  }
}

window.alert("Números positivos: " + numerosPositivos)
window.alert("Números negativos: " + numerosNegativos)



