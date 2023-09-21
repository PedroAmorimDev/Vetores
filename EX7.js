let g = ['A', 'B', 'C', 'A', 'D', 'A', 'B', 'C', 'D', 'A']

let respostasalunos = [
    ['A', 'B', 'C', 'A', 'D', 'A', 'B', 'C', 'D', 'A'],
]

let n = []


for (let i = 0; i < respostasalunos.length; i++) {
    let nota = 0;
    for (let j = 0; j < g.length; j++) {
        if (respostasalunos[i][j] === g[j]) {
            nota++;
        }
    }
    n.push(nota)
}


for (let i = 0; i < n.length; i++) {
    console.log(`Aluno ${i+1}: Nota ${n[i]}`)
}

let aprovados = n.filter(nota => nota >= 6).length
let porcentagemaprovacao = (aprovados / n.length) * 100

console.log('Aprovados:', aprovados)
console.log('Porcentagem de Aprovação:', porcentagemaprovacao.toFixed(2) + '%')
