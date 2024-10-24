let nome = ["blaze", "gatsu", "monopoly"] 
let exp = [10001, 10000, 1000]

let i1 = 0
let i2 = 0

while (i1 < nome.length && i2 < exp.length) {    
    if (exp[i2] <= 1000) {
        console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria Ferro.")
        i1 += 1
        i2 += 1
    } else if ((exp[i2] > 1000) && (exp[i2] <= 2000)) {
        console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria Bronze.")
        i1 += 1
        i2 += 1
    } else if ((exp[i2] > 2000) && (exp[i2] <= 5000)) {
        console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria Prata.")    
        i1 += 1
        i2 += 1
    } else if ((exp[i2] > 5000) && (exp[i2] <= 7000)) {
        console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria Ouro.")
        i1 += 1
        i2 += 1
    } else if ((exp[i2] > 7000) && (exp[i2] <= 8000)) {
        console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria Platina.")
        i1 += 1
        i2 += 1
    } else if ((exp[i2] > 8000) && (exp[i2] <= 9000)) {
        console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria Ascendente.")
        i1 += 1
        i2 += 1
    } else if ((exp[i2] > 9000) && (exp[i2] <= 10000)) {
        console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria Imortal.")
        i1 += 1
        i2 += 1
    } else if ((exp[i2] > 10000)) {
        console.log("O jogador " + nome[i1] + " tem nível " + exp[i2] + " e está na categoria Radiante.")
        i1 += 1
        i2 += 1 
    }
}
