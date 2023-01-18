"use strict";
let container = document.getElementById('container');
;
function somar(props) {
    // let v1Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value1");
    let v1Input = props.v1Input = document.getElementById("value1");
    let v2Input = props.v2Input = document.getElementById("value2");
    let resultToTal = props.resultTotal = document.getElementById("resultado");
    let v1InputString = v1Input.value;
    let v2InputString = v2Input.value;
    let v1 = parseFloat(v1InputString);
    let v2 = parseFloat(v2InputString);
    let result = v1 + v2;
    resultToTal.innerHTML = result.toString();
}
function subtrair(props) {
    let v1Input = props.v1Input = document.getElementById("value1");
    let v2Input = props.v2Input = document.getElementById("value2");
    let resultToTal = props.resultTotal = document.getElementById("resultado");
    let v1InputString = v1Input.value;
    let v2InputString = v2Input.value;
    let v1 = parseFloat(v1InputString);
    let v2 = parseFloat(v2InputString);
    let result = v1 - v2;
    resultToTal.innerHTML = result.toString();
}
function multiplicar(props) {
    let v1Input = props.v1Input = document.getElementById("value1");
    let v2Input = props.v2Input = document.getElementById("value2");
    let resultToTal = props.resultTotal = document.getElementById("resultado");
    let v1InputString = v1Input.value;
    let v2InputString = v2Input.value;
    let v1 = parseFloat(v1InputString);
    let v2 = parseFloat(v2InputString);
    let result = v1 * v2;
    resultToTal.innerHTML = result.toString();
}
function dividir(props) {
    let v1Input = props.v1Input = document.getElementById("value1");
    let v2Input = props.v2Input = document.getElementById("value2");
    let resultToTal = props.resultTotal = document.getElementById("resultado");
    let v1InputString = v1Input.value;
    let v2InputString = v2Input.value;
    let v1 = parseFloat(v1InputString);
    let v2 = parseFloat(v2InputString);
    let result = Math.round(v1 / v2);
    resultToTal.innerHTML = result.toString();
}
