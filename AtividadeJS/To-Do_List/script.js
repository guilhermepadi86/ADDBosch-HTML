let tarefa = document.getElementById("Tarefa")
let lista = document.getElementById("Lista")

AddTarefa.addEventListener('click', function(){
    adicionarTarefa(tarefa.value)
})

Remove.addEventListener('click', function(){
    removerTarefa()
})

function adicionarTarefa(Task){
    let item = document.createElement('li')
    item.classList = 'ListaMenor'
    item.textContent = Task
    lista.appendChild(item)
}

function removerTarefa(){
    if (lista.lastElementChild){
        lista.removeChild(lista.lastElementChild)
    }
    else{
        alert('Sem itens na lista para remover')
    }
}
