let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let texto = document.getElementById("texto")

btn1.addEventListener("click", 
    function(){
        texto.textContent = ""
    }
)

btn2.addEventListener("click", 
    function(){
        texto.textContent = "Este é um parágrafo de teste."
    }
)

btn3.addEventListener("click", 
    function(){
        texto.style.color = "green"
    }
)