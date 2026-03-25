// 1 - Leitura de Dados
const dados = require('./dados.json')

// 2 - Transformação de Dados
const NomesProdutos = dados.map((d) =>{
    return d.nome
})

const ObjetosProdutos = dados.map((d) => {
    return {"Nome": d.nome, "Preco": d.preco, "ValorIndividualTotal": d.preco * d.quantidade}
})

const Acima500 = dados.filter((d) => {
    return d.preco > 500
})

const Inferior5 = dados.filter((d) => {
    return d.quantidade < 5
})

// 3 - Analise de Dados

const TotalEmEstoque = dados.reduce((acc, d) =>{
    return acc + (d.preco * d.quantidade)
}, 0)

const EletronicoEstoque = dados.reduce((acc, d) =>{
    if (d.categoria == "Eletronico") {
        return acc + (d.preco * d.quantidade)
    }
    else {
        return acc
    }
}, 0)

const EstoqueMaior10 = dados.reduce((acc, d) =>{
    if (d.quantidade > 10) {
        return acc + (d.preco * d.quantidade)
    }
    else {
        return acc
    }
}, 0)

// Favor Considerar o MaiorValorTotal2
const MaiorValorTotal1 = ObjetosProdutos.reduce((acc, o) =>{
    return Math.max(acc, o.ValorIndividualTotal)
}, 0)
const MaiorValorTotal2 = ObjetosProdutos.filter((o) => {
    return o.ValorIndividualTotal === MaiorValorTotal1
})

// Favor Considerar o MenorValorTotal2
const MenorValorTotal1 = ObjetosProdutos.reduce((acc, o) =>{
    return Math.min(acc, o.ValorIndividualTotal)
}, 20000)
const MenorValorTotal2 = ObjetosProdutos.filter((o) => {
    return o.ValorIndividualTotal === MenorValorTotal1
})

// Favor Considerar o MaisCaro2 e MaisBarato2
const MaisCaro1 = ObjetosProdutos.reduce((acc, o) =>{
    return Math.max(acc, o.Preco)
}, 0)
const MaisCaro2 = ObjetosProdutos.filter((o) => {
    return o.Preco === MaisCaro1
})
const MaisBarato1 = ObjetosProdutos.reduce((acc, o) =>{
    return Math.min(acc, o.Preco)
}, 5000)
const MaisBarato2 = ObjetosProdutos.filter((o) => {
    return o.Preco === MaisBarato1
})

// Favor Considerar o MaiorQuant2 e MenorQuant2
const MaiorQuant1 = dados.reduce((acc, d) =>{
    return Math.max(acc, d.quantidade)
}, 0)
const MaiorQuant2 = dados.filter((d) => {
    return d.quantidade === MaiorQuant1
})
const MenorQuant1 = dados.reduce((acc, d) =>{
    return Math.min(acc, d.quantidade)
}, 5000)
const MenorQuant2 = dados.filter((d) => {
    return d.quantidade === MenorQuant1
})

const MediaPrecoProduto = dados.reduce((acc, d) => {
    return acc + d.preco / dados.length
}, 0)

const MediaValorTotal = ObjetosProdutos.reduce((acc, o) => {
    return acc + o.ValorIndividualTotal / ObjetosProdutos.length
}, 0)

console.log(MediaValorTotal)