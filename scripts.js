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
    let v1 = Number(document.getElementById("value1"));
    let v2 = Number(document.getElementById("value2"));
    return document.getElementById("resultado").innerHTML = v1 + v2;
}
console.log(somar());
