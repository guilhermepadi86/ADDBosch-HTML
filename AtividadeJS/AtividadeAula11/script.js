class User {
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password) {

        if (!name || !email.includes('@') || password.lenght < 6) {
            return console.error("Ocorreu um erro. Confira novamente os dados")
        }

        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = true
    }

    getId() {
        return this.#id
    }

    getName() {
        return this.#name
    }

    setName(name) {
        return !name ? console.error("Erro ao setar nome") : this.#name = name
    }

    getEmail(){
        return this.#email
    }

    setEmail(email) {
        return !email.includes('@') ? console.error("Erro ao setar email") : this.#email = email
    }

    setPassword(password){
        return password.lenght < 6 ? console.error("Erro ao setar senha") : this.#password = password
    }

    verifyPassword(password) {
        return password === this.#password ? false : true
    }

    changeUserActivity() {
        return this.#active === false ? this.#active = true: this.#active = false
    }

    verifyUserActivity() {
        return this.#active === true ? true : false
    }
}

class Client extends User{
    constructor(id, name, email, password) {
        super(id, name, email, password)
    }

    showData() {
        return {
            id: this.getId(),
            name: this.getName(),
            email: this.getEmail(),
            active: this.verifyUserActivity()
        }
    }

    changeData(name, email, password) {
        
        if (this.verifyPassword(password) == true) {
            return console.error("Não é possível alterar a senha pla mesma")
        }
        else {
            this.setName(name)
            this.setEmail(email)
            this.setPassword(password)
        }
    }
}

class Admin extends User{

}

const c1 = new Client(1, "Guilherme", "guipadi86@gmail.com", "1234567")
console.log(c1.showData())