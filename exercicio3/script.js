const fraseInicial = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
const fraseModif = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'.replace("verde","rosa").replace("azul","laranja")
const verifica = fraseModif.includes("verde","laranja")
const finalMaiusculo = '"BOAS VINDAS, mas não deixe o gato sair"'.toUpperCase()
const fraseFinal = fraseModif.replace('"BOAS VINDAS, mas não deixe o gato sair"',[finalMaiusculo])

console.log(fraseModif)
console.log(verifica)
console.log(fraseFinal)