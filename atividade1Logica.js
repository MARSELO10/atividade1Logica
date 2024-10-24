let nome = ["blaze", "gatsu", "monopoly"] 
let exp = [10001, 10000, 1000]
let categoria

let i = 0

while (i < nome.length && i < exp.length) {    
    if (exp[i] <= 1000) {
        categoria = "Ferro"
    } else if ((exp[i] > 1000) && (exp[i] <= 2000)) {
        categoria = "Bronze"
    } else if ((exp[i] > 2000) && (exp[i] <= 5000)) {
        categoria = "Prata"    
    } else if ((exp[i] > 5000) && (exp[i] <= 7000)) {
        categoria = "Ouro"
    } else if ((exp[i] > 7000) && (exp[i] <= 8000)) {
        categoria = "Platina"
    } else if ((exp[i] > 8000) && (exp[i] <= 9000)) {
        categoria = "Ascendente"
    } else if ((exp[i] > 9000) && (exp[i] <= 10000)) {
        categoria = "Imortal"
    } else if ((exp[i] > 10000)) {
        categoria = "Radiante"
    }

    console.log("O jogador " + nome[i] + " tem nível " + exp[i] + " e está na categoria " + categoria)
    i += 1
}
