let listaDeCompras = []

while (true) {
  const opcao = prompt("Escolha uma opção:\n1. Adicionar produto\n2. Exibir lista de compras\n3. Finalizar programa")

  if (opcao === "1") {
    const produto = prompt("Digite o nome do produto:")
    listaDeCompras.push(produto)
    window.alert(`${produto} foi adicionado à lista de compras.`)
  } else if (opcao === "2") {
    window.alert("Lista de compras:")
    for (let i = 0; i < listaDeCompras.length; i++) {
      window.alert(`${i + 1}. ${listaDeCompras[i]}`)
    }
  } else if (opcao === "3") {
    window.alert("Programa finalizado.")

    break
  } else {
    window.alert("Opção inválida. Escolha novamente.")
  }
}