const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! ( remove o último elemento)
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton') // Insere o elemento no início do array.!
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai até o índice 4, mas sem inclui o indice 4
console.log(algunsPilotos2)
