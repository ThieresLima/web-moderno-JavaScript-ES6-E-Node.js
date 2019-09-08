{
    {
        {
            {

                var sera = 'Será???'
                console.log(sera)

            }
        }
    }
}

console.log(sera) // var fica visível dentro e fora do bloco (Não sendo uma função)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // O escopo da variável só é visível dentro da função. erro

// Var so tem 2 escopo. Global( visível para todos) ou function 