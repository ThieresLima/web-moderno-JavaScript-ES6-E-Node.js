console.log(soma(3, 4)) // funciona antes e depois da função
// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // Só funciona depois da funcao

// named function expression
const mult = function mul(x, y) { // Não é mais usada. ( Lembrar na hora de debugar)
    return x * y
}
console.log(mult(3, 4))