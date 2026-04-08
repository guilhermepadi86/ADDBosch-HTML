const vendas = [
  { id: 1, produto: "Notebook", categoria: "Eletrônicos", preco: 3500, quantidade: 2, cliente: "Ana", cidade: "Curitiba", data: "2025-01-10" },
  { id: 2, produto: "Celular", categoria: "Eletrônicos", preco: 2000, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-01-12" },
  { id: 3, produto: "Camiseta", categoria: "Roupas", preco: 80, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-01-15" },
  { id: 4, produto: "Calça", categoria: "Roupas", preco: 120, quantidade: 2, cliente: "Maria", cidade: "Rio de Janeiro", data: "2025-01-20" },
  { id: 5, produto: "Tênis", categoria: "Calçados", preco: 300, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-02-01" },
  { id: 6, produto: "Fone", categoria: "Eletrônicos", preco: 150, quantidade: 4, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-02-03" },
  { id: 7, produto: "Relógio", categoria: "Acessórios", preco: 500, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-02-10" },
  { id: 8, produto: "Mochila", categoria: "Acessórios", preco: 200, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-02-15" },
  { id: 9, produto: "Tablet", categoria: "Eletrônicos", preco: 1800, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-02-18" },
  { id: 10, produto: "Jaqueta", categoria: "Roupas", preco: 250, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-03-01" },
  { id: 11, produto: "Sandália", categoria: "Calçados", preco: 120, quantidade: 2, cliente: "Juliana", cidade: "Salvador", data: "2025-03-03" },
  { id: 12, produto: "Boné", categoria: "Acessórios", preco: 70, quantidade: 3, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-03-05" },
  { id: 13, produto: "Monitor", categoria: "Eletrônicos", preco: 900, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-03-10" },
  { id: 14, produto: "Teclado", categoria: "Eletrônicos", preco: 250, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-03-12" },
  { id: 15, produto: "Mouse", categoria: "Eletrônicos", preco: 100, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-03-15" }
];

const faturamentoCategoria = vendas.reduce((acumulador, venda) => {
  acumulador[venda.categoria] = (acumulador[venda.categoria] || 0) + (venda.preco * venda.quantidade);
  return acumulador;
}, {})

const quantidadeCategoria = vendas.reduce((acumulador, venda) => {
  acumulador[venda.categoria] = (acumulador[venda.categoria] || 0) + venda.quantidade;
  return acumulador;
}, {})

const faturamentoCidade = vendas.reduce((acumulador, venda) => {
  acumulador[venda.cidade] = (acumulador[venda.cidade] || 0) + (venda.preco * venda.quantidade);
  return acumulador;
}, {})

const quantidadeCidade = vendas.reduce((acumulador, venda) => {
  acumulador[venda.cidade] = (acumulador[venda.cidade] || 0) + venda.quantidade;
  return acumulador;
}, {})

const gastoCliente = vendas.reduce((acumulador, venda) => {
  acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + (venda.quantidade * venda.preco)
  return acumulador
}, {})

const distribuicaoCliente = vendas.reduce((acumulador, venda) => {
  acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.quantidade
  return acumulador
}, {})

const quantidadeProduto = vendas.reduce((acumulador, venda) => {
  acumulador[venda.produto] = (acumulador[venda.produto] || 0) + venda.quantidade
  return acumulador
}, {})

const vendasMes = vendas.reduce((acumulador, venda) => {
  acumulador[(venda.data).split("-")[1]] = (acumulador[(venda.data).split("-")[1]] || 0) + venda.quantidade
  return acumulador
}, {})

for (i=0; i < Object.keys(vendasMes).length; i++) {
  chaveAtual = Object.keys(vendasMes)[i]
  console.log(chaveAtual)
  switch (chaveAtual) {
    case "01":
      vendasMes['Janeiro'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "02":
      vendasMes['Fevereiro'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "03":
      vendasMes['Março'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "04":
      vendasMes['Abril'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "05":
      vendasMes['Maio'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "06":
      vendasMes['Junho'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "07":
      vendasMes['Julho'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "08":
      vendasMes['Agosto'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "09":
      vendasMes['Setembro'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "10":
      vendasMes['Outubro'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "11":
      vendasMes['Novembro'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
    case "12":
      vendasMes['Dezembro'] = vendasMes[chaveAtual]
      i = -1
      delete vendasMes[chaveAtual]
      break
  }
  console.log(vendasMes)
}
console.log(vendasMes)

const FaturamentoCategoriaBarras = document.getElementById('FaturamentoCategoria')
const QuantidadeCategoriaPie = document.getElementById('QuantidadeCategoria')
const FaturamentoCidadeBarras = document.getElementById('FaturamentoCidade')
const PedidoCidadePie = document.getElementById('PedidoCidade')
const GastoPorCliente = document.getElementById('GastoCliente')
const DistribuicaoPorCliente = document.getElementById('DistribuicaoCliente')
const QuantidadePorProduto = document.getElementById('QuantidadeProduto')
const FaturamentoCategoriaPie = document.getElementById('FaturamentoCategoriaPie')
const QuantidadeVSFaturamento = document.getElementById('QuantidadeFaturamentoCategoria')
const VendasPorMes = document.getElementById('VendasMes')

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

new Chart(FaturamentoCategoriaBarras, {
  type: 'bar',
  data: {
    labels: Object.keys(faturamentoCategoria),
    datasets: [{
      label: 'Faturamento por Categoria',
      data: Object.values(faturamentoCategoria),
      borderWidth: 0.5
    }]
  },
  options: options
})

new Chart(QuantidadeCategoriaPie, {
  type: 'pie',
  data: {
    labels: Object.keys(quantidadeCategoria),
    datasets: [{
      labels: 'Quantidade',
      data: Object.values(quantidadeCategoria),
      borderWidth: 0.5
    }]
  },
  options: options
})

new Chart(FaturamentoCidadeBarras, {
  type: 'bar',
  data: {
    labels: Object.keys(faturamentoCidade),
    datasets: [{
      label: 'Faturamento por Cidade',
      data: Object.values(faturamentoCidade),
      borderWidth: 0.5
    }]
  },
  options: options
})

new Chart(PedidoCidadePie, {
  type: 'pie',
  data: {
    labels: Object.keys(quantidadeCidade),
    datasets: [{
      labels: 'Pedidos',
      data: Object.values(quantidadeCidade),
      borderWidth: 0.5
    }]
  },
  options: options
})

new Chart(GastoPorCliente, {
  type: 'bar',
  data: {
    labels: Object.keys(gastoCliente),
    datasets: [{
      label: 'Gasto por Cliente',
      data: Object.values(gastoCliente),
      borderWidth: 0.5
    }]
  },
  options: options
})

new Chart(DistribuicaoPorCliente, {
  type: 'pie',
  data: {
    labels: Object.keys(distribuicaoCliente),
    datasets: [{
      labels: 'Quantidade',
      data: Object.values(distribuicaoCliente),
      borderWidth: 0.5
    }]
  },
  options: options
})

new Chart(QuantidadePorProduto, {
  type: 'bar',
  data: {
    labels: Object.keys(quantidadeProduto),
    datasets: [{
      label: 'Quantidade por Produto',
      data: Object.values(quantidadeProduto),
      borderWidth: 0.5
    }]
  },
  options: options
})

new Chart(FaturamentoCategoriaPie, {
  type: 'pie',
  data: {
    labels: Object.keys(faturamentoCategoria),
    datasets: [{
      labels: 'Faturamento',
      data: Object.values(faturamentoCategoria),
      borderWidth: 0.5
    }]
  },
  options: options
})

new Chart(QuantidadeVSFaturamento, {
  data: {
    datasets: [{
      type: 'bar',
      label: 'Quantidade',
      data: Object.values(quantidadeCategoria)
    }, {
      type: 'bar',
      label: 'Faturamento',
      data: Object.values(faturamentoCategoria)
    }],
    labels: Object.keys(faturamentoCategoria)
  },
  options: options
})

new Chart(VendasPorMes, {
  type: 'bar',
  data: {
    labels: Object.keys(vendasMes),
    datasets: [{
      label: 'Quantidade por Produto',
      data: Object.values(vendasMes),
      borderWidth: 0.5
    }]
  },
  options: options
})