let corQuadrado = document.getElementById('B1')

MudarCor.addEventListener('input', function(){
    trocarcor(MudarCor.value)
})

function trocarcor(cor){
    corQuadrado.style.backgroundColor = cor
}