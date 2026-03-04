const pessoas = []

const pessoa1 = {
    name: "Erich",
    lastname: "Natal",
    age: 22
}

const pessoa2 = {
    name: "Igor",
    lastname: "Machado",
    age: 20
}

const pessoa3 = {
    name: "Maria",
    lastname: "Clara",
    age: 18
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)

// console.log(pessoas.find((p) => p.name == "Igor"))

// let container = document.getElementById('container')

// function createCard(pessoa){
//     let div = document.createElement('div')
//     let span = document.createElement('span')
//     span.innerHTML = `${pessoa.name} ${pessoa.age}`
//     div.appendChild(span)

//     return div
// }

// pessoas.forEach(pessoa => {
//     const card = createCard(pessoa)
//     container.appendChild(card)
// })

const ageAvg = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age / pessoas.length
}, 0)

console.log(ageAvg)

const arr = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5]

const mappedArr = arr2.map((arr) => {
    return arr * 2
})

console.log(mappedArr)

const mappedPeople = pessoas.map((pessoa) => {
    return {name: pessoa.name, lastname: pessoa.lastname}
})

console.log(mappedPeople)