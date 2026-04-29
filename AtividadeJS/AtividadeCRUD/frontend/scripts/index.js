async function carregarProdutos(){
    const response = await fetch('http://localhost:8080/produtos');
    const produtos = await response.json();

    const tbody = document.getElementById('listaUsuarios');
    tbody.innerHTML = ""
    produtos.forEach(prod => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${prod.nome_produto}</td>
            <td>${prod.categoria_produto}</td>
            <td>${prod.preco_unitario}</td>
        `
        tbody.appendChild(tr)
    });
}

async function carregarVendedores(){
    const response = await fetch('http://localhost:8080/vendedores');
    const vendedores = await response.json();

    const tbody = document.getElementById('listaVendedores');
    tbody.innerHTML = ""
    vendedores.forEach(vend => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${vend.nome_vendedor}</td>
            <td>${vend.data_nasc}</td>
            <td>${vend.telefone}</td>
        `
        tbody.appendChild(tr)
    });
}

async function carregarPagamento(){
    const response = await fetch('http://localhost:8080/pagamento');
    const pagamento = await response.json();

    const tbody = document.getElementById('listaPagamentos');
    tbody.innerHTML = ""
    pagamento.forEach(pag => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${pag.tipo_pagamento}</td>
        `
        tbody.appendChild(tr)
    });
}

window.onload = () => {
    carregarProdutos();
    carregarVendedores();
    carregarPagamento();
}