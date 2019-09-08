{
    var a = 2  // var tem escopo global
    let b = 3  // let tem escopo de bloco 
}
console.log(a)
// console.log(b)

// Template String
const produto = 'ipad'
console.log(`${produto} 
é caro`)                // sem o template String isso não era possível

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)