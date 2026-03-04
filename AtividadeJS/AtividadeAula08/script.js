const users = [
{ id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
{ id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
{ id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
{ id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
{ id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
{ id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
{ id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
{ id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
{ id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
{ id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
{ id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
{ id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
{ id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
{ id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
{ id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

// Exercício 1
const nameRole = users.map((user) =>{
    return {name: user.name, role: user.role}
})

// Exercício 2
const nameUsers = users.map((user) =>{
    return user.name
})

// Exercício 3
const nameUpper = users.map((user) =>{
    return user.name.toUpperCase()
})

// Exercício 4
const annualSalary = users.map((user) =>{
    return user.salary * 12
})

// Exercício 5
const nameAge = users.map((user) =>{
    return {name: user.name, age: user.age}
})

// Exercício 6
const nameSalary = users.map((user) =>{
    return {name: user.name, salary: 'R$ ' + user.salary}
})

// Exercício 7
const ageClassification = users.map((user) =>{
    if (user.age >= 18 && user.age <= 22){
        return 'Junior'
    }
    else if (user.age >= 23 && user.age <= 28)
    {
        return 'Pleno'
    }
    else if (user.age >= 29)
    {
        return 'Senior'
    }
})

// Exercício 8
const salaryClassification = users.map((user) =>{
    if (user.salary >= 2000 && user.salary <= 4000)
    {
        return 'Baixo'
    }
    else if (user.salary >= 4001 && user.salary <= 7000)
    {
        return 'Médio'
    }
    else if (user.salary >= 7001)
    {
        return 'Alto'
    }
})

// Exercício 9
const nameActive = users.map((user) =>{
    return {id: user.id, name: user.name, active: user.active}
})

// Exercícios com Reduce -------------------------------------------------

// Exercício 10
const salaryTotal = users.reduce((acc, user) =>{
    return acc + user.salary
}, 0)

// Exercício 11
const avgSalary = users.reduce((acc, user) =>{
    return acc + user.salary / users.length
}, 0)

// Exercício 12
const avgAge = users.reduce((acc, user) =>{
    return acc + user.age / users.length
}, 0)

// Exercício 13
const activeUsers = users.reduce((acc, user) =>{
    return user.active === true ? acc + 1 : acc
}, 0)

// Exercício 14
const inactiveUsers = users.reduce((acc, user) =>{
    return user.active === false ? acc + 1 : acc
}, 0)

// Exercício 15
const maxSalary = users.reduce((acc, user) =>{
    return Math.max(acc, user.salary)
}, 0)

// Exercício 16
const minSalary = users.reduce((acc, user) =>{
    return Math.min(acc, user.salary)
}, 5000)

// Exercício 17
const activeSalary = users.reduce((acc, user) =>{
    return user.active === true ? acc + user.salary: acc
}, 0)

console.log(activeSalary)