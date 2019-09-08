function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `RS${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`)

// Eu usava o toFixed(2) desse jeito.

/* function valor(preco, desconto) {
    preco = isNaN(preco) ? preco : `RS${preco.toFixed(2)}`
    desconto = isNaN(desconto) ? desconto : `RS${desconto.toFixed(2)}`

    console.log(`O preco é:${preco} e o desconto é${desconto}`)
}

valor(12, 5)
*/