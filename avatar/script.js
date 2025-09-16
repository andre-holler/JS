
function executar(){

    //desafio 1.1
    let mercado = document.querySelector("#mercado")
    console.log(mercado)

    //desafio 1.2
    let padaria = document.querySelector('#padaria').children
    console.log(padaria)

    //desafio 1.3
    let li = document.querySelector('#mercado ul').children
    console.log(li[0])

    //desafio 2.1
    let ul = document.querySelector('#mercado ul').children[1]
    console.log(ul)

    //desafio 2.2
    let bolacha = document.querySelector('#padaria ul').children[2]
    console.log(bolacha)

    //desafio 2.3
    let quantidade = document.querySelector('#padaria ul').children.length
    console.log(quantidade)

    //desafio 3.1
    //mercado.children[0].children[0].textContent = "Arroz Integral"

    document.querySelector('#mercado ul').children[0].innerHTML = "Arroz Integral"

    //desafio 3.2
    document.querySelector('#mercado ul').innerHTML += "<li>Óleo</li>"

    //desafio 3.3
    document.querySelector('#padaria ul').children[1].innerHTML = "Bolo de Chocolate"

    //desafio 4.1
    document.querySelector('#mercado').outerHTML = "<strong>Lista apagada</strong>"
    
    //desagio 4.2
    document.querySelector('#padaria ul').innerHTML = "<li>Torta</li> <li>Biscoito</li> <li>Café</li>"
}

function extra(){
    //desafio 5.1
    document.querySelector('#padaria ul').innerHTML += "<li>Espetinho</li> <li>Suco</li>"

    //desafio 5.2
    let showinner = document.querySelector('#padaria ul').innerHTML
    console.log(showinner)

    //desafio 5.3
    document.querySelector('#padaria ul').children[0].innerHTML = "Croissant"

}

function fechar(){
    //desafio 5.4
    document.querySelector('#padaria').innerHTML = "<p>Padaria fechada</p>"
}