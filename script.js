let valor1 = "";
let valor2 = "";
let operator = "";
let resultado = "";

function imputCalcOperator(caractere) {
    operator = caractere;
}

function calcResult() {
    resultado = eval(`${valor1} ${operator} ${valor2}`);
    document.querySelector(".tela-out").innerHTML = `<h1>${resultado}</h1>`;
    resultado = "0";
    valor1 = "";
    valor2 = "";
    operator = "";
}

function imputCalc(caractere) {
    if (operator == "") {
        valor1 += caractere;
        document.querySelector(".tela-out").innerHTML = `<h1>${valor1}</h1>`;
    } else {
        valor2 += caractere;
        document.querySelector(".tela-out").innerHTML = `<h1>${valor2}</h1>`;
    }
}

function calcReset() {
    resultado = "0";
    valor1 = "";
    valor2 = "";
    operator = "";
    document.querySelector(".tela-out").innerHTML = `<h1>${resultado}</h1>`;
}