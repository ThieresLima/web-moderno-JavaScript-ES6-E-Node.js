const moduloA = require('../../moduloA') // "A" minúsculo. Funciona o MAC e Windows, menos no linux
console.log(moduloA.ola)

const C = require('./pastaC')
console.log(C.ola2)
/*const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/
