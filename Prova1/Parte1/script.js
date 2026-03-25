let NomeProduto = document.getElementById("NomeProduto")
let ValorProduto = document.getElementById("PrecoProduto")
let QuantidadeProduto = document.getElementById("QuantidadeProduto")
let arrayProdutos = []

ConfirmarCadastro.addEventListener('click', function() {
    adicionarProduto(NomeProduto.value, ValorProduto.value, QuantidadeProduto.value)
    atualizarCards(arrayProdutos)
})

function adicionarProduto(nome, valor, quantidade) {
    arrayProdutos.push({'Nome': nome, 'Valor': valor, 'Quantidade': quantidade})
    console.log(arrayProdutos)
}

function atualizarCards(produtos) {
    let MaisCaro = document.getElementById("ValorCaro")
    let MaiorQuant = document.getElementById("ValorQuantidade")
    let MaiorEstoque = document.getElementById("ValorEstoque")

    const TotalEmEstoque = produtos.reduce((acc, produto) => {
        return acc + (produto.Valor * produto.Quantidade)
    }, 0)

    const MaiorQuantidade = produtos.reduce((acc, produto) => {
        return Math.max(acc, produto.Quantidade)
    }, 0)
    const NomeMaiorQuantidade = produtos.filter((p) => {
        return p.Quantidade == `${MaiorQuantidade}`
    })

    const ProdutoCaro = produtos.reduce((acc, produto) => {
        return Math.max(acc, produto.Valor)
    }, 0)
    const NomeMaisCaro = produtos.filter((p) => {
        return p.Valor == `${ProdutoCaro}`
    })

    
    MaiorEstoque.textContent = `R$ ${TotalEmEstoque}`
    MaiorQuant.textContent = `${NomeMaiorQuantidade[0].Nome}`
    MaisCaro.textContent = `${NomeMaisCaro[0].Nome}`
}