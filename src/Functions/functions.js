"use strict";
function helloWorld(nome = null) {
    console.log("Hello World! " + (nome ? nome : ''));
}
helloWorld();
function sum(value1, value2) {
    return value1 + value2;
}
function contarLetras(word) {
    return word.length;
}
let pos = 0;
function anterior() {
    if (pos > 0) {
        return pos = pos - 1;
    }
    return pos;
}
function proximo() {
    return pos = pos + 1;
}
