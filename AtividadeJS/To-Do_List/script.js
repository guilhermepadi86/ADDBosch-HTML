let tarefa = document.getElementById("Tarefa")

AddTarefa.addEventListener('click', function(){
    adicionarTarefa(tarefa.value)
})

function adicionarTarefa(Task){
    item = document.createElement("li")
    item.appendChild(Task)
}

