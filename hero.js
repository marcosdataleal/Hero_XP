let jogador = "Jonas";
let xp = 1000;

if (xp <= 1000) {
    console.log("O herói de nome " + jogador + " está no nível de Ferro");
} else if (xp >= 1001 && xp <= 2000) {
    console.log("O herói de nome " + jogador + " está no nível de Bronze");
} else if (xp >= 2001 && xp <= 5000) {
    console.log("O herói de nome " + jogador + " está no nível de Prata/Ouro");
} else if (xp >= 5001 && xp <= 8000) {
    console.log("O herói de nome " + jogador + " está no nível de Platina/Diamante");
} else if (xp >= 8001 && xp <= 9000) {
    console.log("O herói de nome " + jogador + " está no nível de Ascendente");
} else if (xp >= 9001 && xp <= 10000) {
    console.log("O herói de nome " + jogador + " está no nível de Imortal");
} else if (xp >= 10001) {
    console.log("O herói de nome " + jogador + " está no nível de Radiante");
} else {
    console.log("Valor inconsistente. Por favor, verifique as informações e tente novamente");
}