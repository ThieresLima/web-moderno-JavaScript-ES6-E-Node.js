const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) { // recebe até 3 parâmetro. nome, indice e array
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAorovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAorovados)