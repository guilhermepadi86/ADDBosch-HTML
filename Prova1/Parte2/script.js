let veiculos = []

class Veiculo {
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(marca, modelo, preco) {
        const setarID = veiculos.length

        if (marca.lenght < 2 || modelo.lenght < 2 || preco <= 0 || !marca || !modelo) {
            return console.error("Ocorreu um erro. Por favor verifique os dados digitados.")
        }

        this.#id = (setarID + 1)
        this.#marca = marca
        this.#modelo = modelo
        this.#preco = preco
        this.#disponivel = true

        veiculos.push({'id': this.#id, 'marca': this.#marca, 'modelo': this.#modelo, 'preco': this.#preco, 'disponivel': this.#disponivel})
    }

    getId() {
        return this.#id
    }

    getModel() {
        return [this.#marca, this.#modelo]
    }

    changePrice(preco) {
        if (this.#disponivel && preco > 0) {
            this.#preco = preco
            return console.log("Valor Alterado com Sucesso")
        }
        else {
            return console.error("Não é possível alterar o preço se o veículo não esta disponivel ou se o preço digitado é menor ou igual a 0.")
        }
    }

    getAvailability() {
        return this.#disponivel
    }

    sellVehicle() {
        if (this.#disponivel) {
            this.#disponivel = false
            return console.log("Veículo vendido")
        }
        else {
            return console.error("Sem veículo no estoque, impossível finalizar a venda.")
        }
    }

    reporEstoque() {
        if (this.#disponivel) {
            return console.error("Item já esta disponível no estoque.")
        }
        else {
            this.#disponivel = true
            return console.log("Item agora esta disponível no estoque.")
        }
    }

    getData() {
        return [this.#id, this.#marca, this.#modelo, this.#preco, this.#disponivel]
    }
}

class Carro extends Veiculo {
    #portas

    constructor(marca, modelo, preco, portas) {
        super(marca, modelo, preco)

        if (portas == 0 || typeof(portas) == "string") 
            return console.error("Ocorreu um erro. Por favor verifique os dados digitados.")

        this.#portas = portas
    }
}

class Moto extends Veiculo {
    #cilindradas

    constructor(marca, modelo, preco, cilindradas) {
        super(marca, modelo, preco)

        if (typeof(cilindradas) == "string" || cilindradas == 0 || cilindradas < 50 || cilindradas > 2000){
            return console.error("Ocorreu um erro. Por favor verifique os dados digitados.")
        }

        this.#cilindradas = cilindradas
    }
}

const Moto1 = new Moto('Honda', 'Não sei 2000', 10000, 59)
const Carro1 = new Carro('Chevrolet', 'Corsa', 8000, 4)
const Carro2 = new Carro('Volkswagen', 'Gol', 12000, 4)

// Carro não pode ser vendido se estiver indisponível
Carro2.sellVehicle()
Carro2.sellVehicle()

// Não da para alterar o valor se estiver indisponível
Carro2.changePrice(1000000)

// Não é possível repor um carro que já existe no estoque
Carro2.reporEstoque()
Carro2.reporEstoque()

// Não é possivel registrar uma moto nova se não cumprir as regras
const Moto2 = new Moto('Yamaha', '21FDH2', 5000, 2)

// O mesmo vale para o carro
const Carro3 = new Carro('Chevrolet', 'Celta', 8000, 0)