const data = require('./data.json').vehicles

const valorTotal = data.reduce((acc, d) => {
    return acc + d.price_brl
}, 0)

const car2023 = data.filter((d) => {
    return d.year == 2023
})

const sedan2023 = data.filter((d) => {
    return (d.year == 2023 && d.category == "Sedan")
})

const chevrolet = data.filter((d) => {
    return (d.brand == "Chevrolet")
})

const allCars = data.map((d) => {
    return d.model
})

const allBrandsCars = data.map((d) => {
    return {brand: d.brand, model: d.model}
})

const allCategorys = data.map((d) => {
    return d.category
})

const avgCityKm = data.reduce((acc, d) => {
    return acc + d.city_km_l / data.length
}, 0)

const maxHorsepower = data.reduce((acc, d) => {
    return Math.max(acc, d.horsepower)
}, 0)

const minHorsepower = data.reduce((acc, d) => {
    return Math.min(acc, d.horsepower)
}, 5000)

console.log(minHorsepower)