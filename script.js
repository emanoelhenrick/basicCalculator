let valor1 = "";
let valor2 = "";
let operator = "";
let resultado = "";

function imputCalcOperator (caractere) {
    switch (caractere) {
        case "/":
            operator = "/"
            break;
        case "*":
            operator = "*"
            break;
        case "-":
            operator = "-"
            break;
        case "+":
            operator = "+"
            break;

        default:
            break;
    }

}

function calcResult(){
    switch (operator) {
        case "/":
            resultado = (parseInt(valor1) / parseInt(valor2))
            break;
        case "*":
            resultado = (parseInt(valor1) * parseInt(valor2))
            break;
        case "-":
            resultado = (parseInt(valor1) - parseInt(valor2))
            break;
        case "+":
            resultado = (parseInt(valor1) + parseInt(valor2))
            break;
        default:
            break;
    }

    if (resultado % 1 === 0) {
        document.querySelector(".tela-out").innerHTML = `<h1>${resultado}</h1>`
    } else {
        document.querySelector(".tela-out").innerHTML = `<h1>${resultado.toFixed(5)}</h1>`
    }

    resultado = "0";
    valor1 = ""
    valor2 = ""
    operator = ""
    
}

function imputCalc(caractere){
    if (operator == "") {
        
        switch (caractere) {
            case "1":
                valor1 += "1"
                break;
            case "2":
                valor1 += "2"
                break;
            case "3":
                valor1 += "3"
                break;
            case "4":
                valor1 += "4"
                break;
            case "5":
                valor1 += "5"
                break;
            case "6":
                valor1 += "6"
                break;
            case "7":
                valor1 += "7"
                break;
            case "8":
                valor1 += "8"
                break;
            case "9":
                valor1 += "9"
                break;
            case "0":
                valor1 += "0"
                break;
        
            default:
                break;
        }
    
        document.querySelector(".tela-out").innerHTML = `<h1>${valor1}</h1>`
    } else {
        switch (caractere) {
            case "1":
                valor2 += "1"
                break;
            case "2":
                valor2 += "2"
                break;
            case "3":
                valor2 += "3"
                break;
            case "4":
                valor2 += "4"
                break;
            case "5":
                valor2 += "5"
                break;
            case "6":
                valor2 += "6"
                break;
            case "7":
                valor2 += "7"
                break;
            case "8":
                valor2 += "8"
                break;
            case "9":
                valor2 += "9"
                break;
            case "0":
                valor2 += "0"
                break;
        
            default:
                break;
        }
    
        document.querySelector(".tela-out").innerHTML = `<h1>${valor2}</h1>`
    }
}

function calcReset(){
    resultado = "0";
    valor1 = ""
    valor2 = ""
    operator = ""
    document.querySelector(".tela-out").innerHTML = `<h1>${resultado}</h1>`;
}