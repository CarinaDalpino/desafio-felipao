// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }
    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando uma lista de heróis automaticamente
const herois = [
    new Heroi("Merlin", 150, "Mago"),
    new Heroi("Arthur", 35, "Guerreiro"),
    new Heroi("Li Mei", 28, "Monge"),
    new Heroi("Hattori", 22, "Ninja"),
    new Heroi("Guerreiro Aleatório", 40, "Paladino") // teste de tipo desconhecido
];


// Fazendo todos atacarem
herois.forEach(heroi => heroi.atacar());

