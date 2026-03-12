class Automovel {
    constructor(modelo, marca, cor, ano, motor) {
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }

    acelerar() {
        return `O veiculo ${this.marca} ${this.modelo} esta acelerando`
    }

    frear() {
        return `O veiculo ${this.marca} ${this.modelo} esta freando`
    }

    estercar(lado) {
        return `O veiculo ${this.marca} ${this.modelo} esta virando para a ${lado}`
    }
}

class Carro extends Automovel{
    abrirPortas() {
        return "Abrindo as portas!"
    }
}

class Moto extends Automovel{
    grau() {
        return "Olha o grau"
    }
}

const carro = new Carro("Corsa", "Chevrolet", "Preto", 2000, "1.0")
const moto = new Moto("S1000RR", "BMW", "Azul", 2025, "1000cc")

console.log(carro.abrirPortas())
console.log(carro.acelerar())

console.log(moto.acelerar())
console.log(moto.grau())