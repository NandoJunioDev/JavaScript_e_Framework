const  input = document.getElementById("primeiroNumero") // pega o elemento do html
const input2 = document.getElementById("segundoNumero")     //

const inputresultado = document.getElementById("Resultado")// --



function somador (n1, n2){    // funçao auxiliar
    return n1 + n2
}


function somar(){           // funçao principal


    let valor1 = parseFloat(input.value) || 0
    let valor2 = parseFloat(input2.value) || 0 // input.value => pega o valor do input
    const resultadoT = somador(valor1, valor2)
    inputresultado.innerHTML =  resultadoT // inner HTML => mostrar no html
}

input.addEventListener('input', somar) // addEventListener => ficar ouvindo (o tipo que sera escutado)
input2.addEventListener('input', somar)