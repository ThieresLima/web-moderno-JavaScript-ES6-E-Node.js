const fabricas = ["Merceds", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricas.forEach(imprimir)
fabricas.forEach(fabrica => console.log(`${fabrica}`))