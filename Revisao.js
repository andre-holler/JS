function questao_um(){
    let nome = prompt("Digite o nome do aluno")
    let idade = Number(prompt("Digite a idade do aluno"))
    let presente = Boolean(prompt("DIgite se esteve presente"))

    alert(`nome ${nome}`)
    alert(`idade ${idade}`)
    alert(`presente ${presente}`)
}

function questao_dois(){
    let notaum = Number(prompt("Digite a nota um"))
    let notadois = Number(prompt("Digite a nota dois"))

    let media = (notaum+notadois)/2

    if (media >= 6){
        alert("Aprovado")
    }else{
        alert("Reprovado")
    }
}

function questao_tres(){
    let nota_base = Number(prompt("Digite a nota"))
    
    alert(`Nota aumentada ${nota_base*0.15}`)
}

function questao_quatro(){
    let idade = Number(prompt("Digite a idade do aluno"))

    if (idade >= 16){
        
    }
}







//1. Declaração de variaveis usando let, const e var
let idadeAluno = 17;
const escola = "Escola SESI/SENAI";
var frequenciaemdia = true;

alert(`Seja bem vindo a ${escola}`);
alert(`Idade = ${idadeAluno}`);
alert(`Frequencia = ${frequenciaemdia}`);

//2. Operações aritmeticas
let notaBase = Number(prompt("Digite a nota base do aluno (0 a 100"));
let bonus = 0.1;
let notaFinal = notaBase+(notaBase*bonus);
alert(`A nota final com bônus de participação: ${notaFinal}`)

//3. if
if (idadeAluno >= 14){
    alert("Aluno pode cursar ensino médio")
}else{
    alert("O aluno ainda esta no ensino médio")
}

