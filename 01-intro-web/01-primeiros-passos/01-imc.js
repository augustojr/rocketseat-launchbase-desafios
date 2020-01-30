const nome = 'Carlos'
const peso = 84
const altura = 1.88
const sexo = 'M' // 'M'asculino ou 'F'eminino

const imc = peso/(altura*altura)
console.log(imc)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso.`)
} else {
    if (imc < 29.9) {
        console.log(`${nome}, você não está acima do peso.`)
    }
}
