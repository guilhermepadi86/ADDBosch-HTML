let data = []
const server = "http://localhost:8080"
const form = document.getElementById('formulario')
const formDelete = document.getElementById('formularioDelete')
const formAtt = document.getElementById('formularioAtt')

async function fetchData() {
    const response = await fetch(`${server}/inventory/pecas`)
    data = await response.json()
}

async function setTableData() {
    const table = document.getElementById('table-data')

    table.innerHTML = ""

    data.forEach((e) => {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td>${e.id}</td>
            <td>${e.nome_peca}</td>
            <td>${e.codigo_peca}</td>
            <td>${e.fornecedor}</td>
            <td>${e.quantidade}</td>
            <td>${e.preco_unitario}</td>
            <td>${e.estoque}</td>
        `

        table.appendChild(tr)
    })
}

form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const codigo = document.getElementById('codigo').value
    const fornecedor = document.getElementById('fornecedor').value
    const quantidade = document.getElementById('quantidade').value
    const precoUnitario = document.getElementById('precoUnitario').value
    const estoque = document.getElementById('estoque').value

    const dados = {
            nome_peca: nome,
            codigo_peca: codigo,
            fornecedor: fornecedor, 
            quantidade: quantidade, 
            preco_unitario: precoUnitario, 
            estoque: estoque
        }

    console.log(dados)

    fetch(`${server}/inventory/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })

    await fetchData()
    setTableData()
})

formDelete.addEventListener('submit', async(e) => {
    e.preventDefault()
    const id = document.getElementById('idDel').value
    console.log(id)
    await fetch(`${server}/inventory/delete/${id}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json' 
        }
    })

    await fetchData()
    setTableData()
})

formAtt.addEventListener('submit', async(e) => {
    e.preventDefault()
    const id = document.getElementById('idAtt').value
    const nome = document.getElementById('nomeAtt').value
    const codigo = document.getElementById('codigoAtt').value
    const fornecedor = document.getElementById('fornecedorAtt').value
    const quantidade = document.getElementById('quantidadeAtt').value
    const precoUnitario = document.getElementById('precoUnitarioAtt').value
    const estoque = document.getElementById('estoqueAtt').value

    const dados = {
            nome_peca: nome,
            codigo_peca: codigo,
            fornecedor: fornecedor, 
            quantidade: quantidade, 
            preco_unitario: precoUnitario, 
            estoque: estoque
        }

    const response = await fetch(`${server}/inventory/update/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dados)
    })

    console.log(response)
    await fetchData()
    setTableData()
})

addEventListener('load', async() => {
    await fetchData()
    setTableData()
})