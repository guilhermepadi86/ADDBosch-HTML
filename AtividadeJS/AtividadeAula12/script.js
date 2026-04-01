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

const categorias = [...new Set(vendas.map((v) => v.categoria))]

const faturamentoTotal = vendas.map((v) => {
  return {categoria: v.categoria, faturamento: v.preco * v.quantidade}
})
var valorE = 0
var valorR = 0
var valorC = 0
var valorA = 0
for (i=0; i < faturamentoTotal.length; i++) {
  if (faturamentoTotal[i].categoria == 'Eletrônicos') {
    valorE = valorE + faturamentoTotal[i].faturamento
  }
  else if (faturamentoTotal[i].categoria == 'Roupas') {
    valorR = valorR + faturamentoTotal[i].faturamento
  }
  else if (faturamentoTotal[i].categoria == 'Calçados') {
    valorC = valorC + faturamentoTotal[i].faturamento
  }
  else if (faturamentoTotal[i].categoria == 'Acessórios') {
    valorA = valorA + faturamentoTotal[i].faturamento
  }
}
const faturamentoPorCategoria = [valorE, valorR, valorC, valorA]



const FaturamentoCategoriaBarras = document.getElementById('FaturamentoCategoria')
const QuantidadeCategoriaPie = document.getElementById('QuantidadeCategoria')


new Chart(FaturamentoCategoriaBarras, {
  type: 'bar',
  data: {
    labels: categorias,
    datasets: [{
      labels: 'Faturamento',
      data: faturamentoPorCategoria,
      borderWidth: 0.5
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})


