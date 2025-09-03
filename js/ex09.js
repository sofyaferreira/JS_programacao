x = parseFloat(prompt("Informe um número: "))
y = parseFloat(prompt("Informe outro número: "))

conta=parseInt(prompt("Digite o número que corresponde as operações (1-soma, 2-subtração, 3-multiplicação, 4-divisão): "))

switch (conta){
    case 1: {
        alert("SOMA "+(x+y))
    }

    case 2: {
        alert("SUBTRAÇÃO "+(x-y))
    }

    case 3: {
        alert("MULTIPLICAÇÃO "+(x*y))
    }

    case 4: {
        alert("DIVISÃO "+(x/y))
    }

}