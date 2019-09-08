const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expresssões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Transformar um texto para letras maiúsculas
console.log(`Ei... ${up('cuidado')}!`)