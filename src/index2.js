const readline = require('readline');

// Cria a interface de leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o saldo e determina o nível
function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

// Função para perguntar entradas de forma assíncrona
function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resposta => resolve(resposta)));
}

// Loop principal assíncrono
async function main() {
    let continuar = true;

    while (continuar) {
        const vitorias = parseInt(await perguntar("Digite a quantidade de vitórias do jogador: "));
        const derrotas = parseInt(await perguntar("Digite a quantidade de derrotas do jogador: "));

        if (isNaN(vitorias) || isNaN(derrotas)) {
            console.log("Por favor, digite apenas números válidos.\n");
            continue;
        }

        console.log("\n" + calcularRank(vitorias, derrotas) + "\n");

        const resposta = await perguntar("Deseja calcular outro jogador? (s/n): ");
        if (resposta.toLowerCase() !== 's') {
            continuar = false;
        }
    }

    console.log("Encerrando a calculadora. Até mais!");
    rl.close();
}

// Inicia o programa
main();
