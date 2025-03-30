let div = document.getElementById('resultado')
let btn = document.getElementById('btn')

function enviar(){

let text = document.getElementById('resultado').value

div.innerHTML = `seu email e senha foram confirmados `
}

btn.addEventListener("click", enviar)





