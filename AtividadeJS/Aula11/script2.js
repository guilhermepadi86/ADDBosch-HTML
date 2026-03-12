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

const carro1 = new Automovel("Corsa", "Chevrolet", "2000", "Preto", "1.6")
const carro2 = new Automovel("Vectra", "Chevrolet", "1999", "Branco", "2.0")

console.log(carro2.acelerar())