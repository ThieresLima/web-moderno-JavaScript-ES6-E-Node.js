console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// this fora de uma função é igual a module.exports e exports
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // this dentro de uma função é igual a global
}

logThis()