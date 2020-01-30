const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

if (sexo === 'M') {
    if (contribuicao >= 35 && idade + contribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}
if (sexo === 'F') {
    if (contribuicao >= 30 && idade + contribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}

// var tempoMinimo // tempo mínimo de contribuição necessário pra se aposentar
// var somaMinima // soma mínima da idade com o tempo de contribuição para se aposentar

// if (sexo === 'M') {
//     tempoMinimo = 35
//     somaMinima = 95
// }    
// if (sexo === 'F') {
//     tempoMinimo = 30
//     somaMinima = 85
// }   

// if (contribuicao >= tempoMinimo && idade + contribuicao >= somaMinima) {
//     console.log(`${nome}, você pode se aposentar!`)
// } else {
//     console.log(`${nome}, você ainda não pode se aposentar`)
// }
