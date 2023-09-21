let numero1 = Number(prompt(`Diz o número 1:`))
let numero2 = Number(prompt(`Diz o número 2:`))
let numero3 = Number(prompt(`Diz o número 3:`))

function calcularmedia(numero1, numero2, numero3){ 
    let soma = numero1 + numero2 + numero3
    let media = soma / 3
    return media
}

let mediacalculada = calcularmedia(numero1, numero2, numero3) 

document.write(`A média é: ${mediacalculada}`)
