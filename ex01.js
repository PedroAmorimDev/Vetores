function inversai(numeros){
numeros.reverse()


for(i = 0; i < numeros.length; i++){
    window.alert(numeros[i])
}             
}

const sequencia = []

const numero = prompt("diz")

while (numero !== ""){
    sequencia.push(parseInt(numero))
    numeros = prompt("digite um numero ou nada pra encerrar")
}
inversai(numeros.reverse)




