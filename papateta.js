const idades = []


let idadeMaxima = -1
let idadeMinima = 999

while (true) {
  const idadeTexto = prompt("Digite uma idade ou digite 'sair' para encerrar:")

  if (idadeTexto.toLowerCase() === "sair") {
    break
  }

  const idade = parseInt(idadeTexto)

  if (!isNaN(idade)) {
    idades.push(idade)

 
    if (idade > idadeMaxima) {
      idadeMaxima = idade
    }
    if (idade < idadeMinima) {
      idadeMinima = idade
    }
  } else {
    alert("Idade inválida. Tente novamente.")
  }
}


if (idades.length > 0) {
  alert(`A maior idade é ${idadeMaxima} e a menor idade é ${idadeMinima}.`)
} else {
  alert("Nenhuma idade inserida.")
}