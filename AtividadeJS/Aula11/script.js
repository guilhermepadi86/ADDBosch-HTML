class Pessoa{
    constructor(nome, profissao) {
        this.nome = nome;
        this.profissao = profissao;
    }

    exibirDetalhes() {
        return `${this.nome}, ${this.profissao}`
    }

    andar(passo) {
        if (this.nome == "Neymar"){
            return `${this.nome} andou ${passo} passos e caiu`
        }
        else {
            return `${this.nome} andou ${passo} passos!`
        }
        
    }
}

class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirDetalhes() {
        return `${this.marca} | ${this.modelo}`
    }

    acelerar(km) {
        if (this.modelo == "Kwid") {
            return `${this.marca} ${this.modelo} acelerou a ${km}km/h e se despedaçou por conta de sua construção barata`
        }
        else {
            return `${this.marca} ${this.modelo} acelerou a ${km}km/h`
        }
        
    }
}

const pessoa1 = new Pessoa("Neymar", "Influencer | Ex-Jogador")
const pessoa2 = new Pessoa("Cebolinha", "Atual Fuhrer")
const pessoa3 = new Pessoa("Tony Stark", "Alcoolátra")

const carro1 = new Carro("Renault", "Kwid")

console.log(carro1.acelerar(200))