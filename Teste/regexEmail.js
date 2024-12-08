// Expressão regular para validar endereços de email
// ^                   - Início da string
// [a-zA-Z0-9._%+-]+   - Um ou mais caracteres alfanuméricos, ponto, underscore, percentagem, mais ou hífen
// @                   - Caractere "@" obrigatoriamente
// [a-zA-Z0-9.-]+      - Um ou mais caracteres alfanuméricos, ponto ou hífen (nome de domínio)
// \.                  - Um ponto literal
// [a-zA-Z]{2,6}       - Entre 2 e 6 caracteres alfabéticos (extensão do domínio)
// $                   - Fim da string
// gi                  - Flags para pesquisa global (g) e insensível a maiúsculas e minúsculas (i)
regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/gi

// Exemplos de emails para teste
const email1 = `exemplo.email@dominio.com`
console.log(email1.match(regex)) // Valida email1 e imprime o resultado

const email2 = `usuario123@sub.dominio.org`
console.log(email2.match(regex)) // Valida email2 e imprime o resultado

const email3 = `usuario@dominio`
console.log(email3.match(regex)) // Valida email3 e imprime o resultado (deve falhar)

const email4 = `@dominio.com`
console.log(email4.match(regex)) // Valida email4 e imprime o resultado (deve falhar)

const email5 = `usuario@.com`
console.log(email5.match(regex)) // Valida email5 e imprime o resultado (deve falhar)