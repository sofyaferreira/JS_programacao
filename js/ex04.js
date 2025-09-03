var n1
var n2
var n3
var n4
var f

n1 = parseInt(prompt("Informe sua primeira nota:"))
n2 = parseInt(prompt("Informe sua segunda nota:"))
n3 = parseInt(prompt("Informe sua terceira nota:"))
n4 = parseInt(prompt("Informe sua quarta nota:"))
f = parseInt(prompt("Informe o percentual (%) da sua frequência:"))

r = (n1+n2+n3+n4)/4

if(r >= 7 && f >= 75){
    alert("Aluno está APROVADO")
}

if (f < 75 && r < 7 || f < 75 && r > 7) {
    alert("Aluno está REPROVADO")
}
