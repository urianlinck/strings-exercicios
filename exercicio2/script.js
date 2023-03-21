const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringCorrigida = "Eu não sou supersticioso, mas sou um pouco ________.      ".trim()
const tamanhoVariavel = minhaString.length
const tamanhoVariavelNova= minhaStringCorrigida.length

console.log(`Aquantidade de caracteres da primeira string é ${tamanhoVariavel}, e da string corrigida é ${tamanhoVariavelNova}`)

const fraseCompleta = minhaStringCorrigida.replace("________","sticioso")
console.log(fraseCompleta)