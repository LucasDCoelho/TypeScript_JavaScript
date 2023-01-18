

function helloWorld(nome = null): void{
    console.log("Hello World! " + (nome ? nome : ''));
}
helloWorld();

function sum(value1: number, value2: number){
  return value1 + value2;
} 


function contarLetras(word: string){
    return word.length
}


let pos: number = 0;

function anterior(){
    if(pos > 0){
        return pos = pos - 1;
    }
    return pos;
}

function proximo(){
    return pos = pos + 1;
}


