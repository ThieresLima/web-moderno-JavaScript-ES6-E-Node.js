const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // OBJETO PARA JSON

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //  JSON PARA OBJETO
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
