const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',            // isso é um JSON
    '{ "nome": "Caderno", "preco": 13.60 }',
    '{ "nome": "kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const array = carrinho.map(paraObjeto).map(apenasPreco)

console.log(array)

console.log(produto)