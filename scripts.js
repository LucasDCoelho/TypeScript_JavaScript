"use strict";
let container = document.getElementById('container');
// let macas: number = 2;
// let banana: number = 3;
// let soma: number = macas + banana;
// container?.innerHTML = soma;
// let text: string = "Meu nome é ";
// let nome: string = "Lucas Coelho";
// let soma: string = text + nome;
// container?.innerHTML = soma;
// const NASCIMENTO: string = "31/10/1999";
// let nome: string = "Lucas Coelho";
// container?.innerHTML = NASCIMENTO;
function somar() {
    let v1Input = document.getElementById("value1");
    let v2Input = document.getElementById("value2");
    let resultToTal = document.getElementById("resultado");
    let v1InputString = v1Input.value;
    let v2InputString = v2Input.value;
    let v1 = parseFloat(v1InputString);
    let v2 = parseFloat(v2InputString);
    let result = v1 + v2;
    resultToTal.innerHTML = result.toString();
}
function subtrair() {
    let v1Input = document.getElementById("value1");
    let v2Input = document.getElementById("value2");
    let resultToTal = document.getElementById("resultado");
    let v1InputString = v1Input.value;
    let v2InputString = v2Input.value;
    let v1 = parseFloat(v1InputString);
    let v2 = parseFloat(v2InputString);
    let result = v1 - v2;
    resultToTal.innerHTML = result.toString();
}
function multiplicar() {
    let v1Input = document.getElementById("value1");
    let v2Input = document.getElementById("value2");
    let resultToTal = document.getElementById("resultado");
    let v1InputString = v1Input.value;
    let v2InputString = v2Input.value;
    let v1 = parseFloat(v1InputString);
    let v2 = parseFloat(v2InputString);
    let result = v1 * v2;
    resultToTal.innerHTML = result.toString();
}
function dividir() {
    let v1Input = document.getElementById("value1");
    let v2Input = document.getElementById("value2");
    let resultToTal = document.getElementById("resultado");
    let v1InputString = v1Input.value;
    let v2InputString = v2Input.value;
    let v1 = parseFloat(v1InputString);
    let v2 = parseFloat(v2InputString);
    let result = Math.round(v1 / v2);
    resultToTal.innerHTML = result.toString();
}
console.log(somar());
