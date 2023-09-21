
let idade = Number(prompt(`Diz tua idade que te vendo o corote:`));

function verificarMaioridade(idade){
    if(idade >= 18){
        window.alert(`Maior de idade`)
        location.reload()
    } else {
        window.alert(`Menor de idade`)
        location.reload()
    }
}

verificarMaioridade(idade)
