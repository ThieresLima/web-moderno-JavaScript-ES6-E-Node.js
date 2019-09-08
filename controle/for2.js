const notas = [6.7, 7.4, 9.8, 7.7]

for (let i in notas) {
    console.log(i, notas[i])   // forin no array priemiro vem o índice dps o valor
}

const pessoa = {
    nome: 'Ana',
    Sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {          // forin no objeto primeiro vem o atributo dps o valor
    console.log(`${atributo} = ${pessoa[atributo]}`)
}