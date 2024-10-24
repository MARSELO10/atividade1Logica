let nome = ["blaze", "gatsu", "monopoly"] 
let exp = [10001, 10000, 1000]
let categoria

let i1 = 0
let i2 = 0

while (i1 < nome.length && i2 < exp.length) {    
    if (exp[i2] <= 1000) {
        categoria = "Ferro"
    } else if ((exp[i2] > 1000) && (exp[i2] <= 2000)) {
        categoria = "Bronze"
    } else if ((exp[i2] > 2000) && (exp[i2] <= 5000)) {
        categoria = "Prata"    
    } else if ((exp[i2] > 5000) && (exp[i2] <= 7000)) {
        categoria = "Ouro"
    } else if ((exp[i2] > 7000) && (exp[i2] <= 8000)) {
        categoria = "Platina"
    } else if ((exp[i2] > 8000) && (exp[i2] <= 9000)) {
        categoria = "Ascendente"
    } else if ((exp[i2] > 9000) && (exp[i2] <= 10000)) {
        categoria = "Imortal"
    } else if ((exp[i2] > 10000)) {
        categoria = "Radiante"
    }

    console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria " + categoria)
    i1 += 1
    i2++
}
