// Com base no vetor a seguir, faça os filtros pedidos 

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


// Filtrar apenas usuários ativos

activeUsers = users.filter((u) => u.active == true)

// Filtrar apenas usuários inativos

inactiveUsers = users.filter((u) => u.active == false)

// Filtrar apenas desenvolvedores

devUsers = users.filter((u) => u.role == "dev")

// Filtrar apenas designers

designUsers = users.filter((u) => u.role == "designer")

// Filtrar apenas managers

managerUsers = users.filter((u) => u.role == "manager")

// Filtrar apenas analistas de dados

dataUsers = users.filter((u) => u.role == "data_analyst")

// Filtrar usuários com salário maior que 5000

salary5KUsers = users.filter((u) => u.salary > 5000)

// Filtrar usuários com salário menor que 4000

salary4KUsers = users.filter((u) => u.salary < 4000)

// Filtrar usuários maiores de 30 anos

age30Users = users.filter((u) => u.age > 30)

// Filtrar usuários menores de 25 anos

age25Users = users.filter((u) => u.age < 25)

// Analistas de dados que estão ativos

activeDataUsers = users.filter((u) => (u.active == true) && (u.role == "data_analyst"))

// Devs com salário maior que 4000

devSalaryUsers = users.filter((u) => (u.role == "dev") && (u.salary > 4000))

// Managers com mais de 30 anos

managerAgeUsers = users.filter((u) => (u.age > 30) && (u.role == "manager"))


console.log(managerAgeUsers)