let botao1 = document.getElementById("botao1")
let botao2 = document.getElementById("botao2")
let botao3 = document.getElementById("botao3")
let mensagem = document.getElementById("mensagem")

botao1.addEventListener("click", 
    function(){
        mensagem.textContent = "Você clicou no primeiro botão!"
    }
)

botao2.addEventListener("click", 
    function(){
        document.body.style.background = "pink"
    }
)

botao3.addEventListener("click", 
    function(){
        let novoParagrafo = document.createElement("p")
        novoParagrafo.textContent = "Este é um novo item adicionado"
        document.body.appendChild(novoParagrafo)
    }
)