var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // escopo menor tem preferência
}
console.log('fora =', numero)

// Let tem 3 escopos: Global, function e bloco.