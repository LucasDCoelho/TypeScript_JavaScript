
let container: HTMLElement | null = document.getElementById('container');

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


function somar(){
  let v1Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value1");
  let v2Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value2");
  let resultToTal: HTMLElement = <HTMLElement>document.getElementById("resultado");

  let v1InputString: string = v1Input.value;
  let v2InputString: string = v2Input.value;

  let v1: number = parseFloat(v1InputString);
  let v2: number = parseFloat(v2InputString);
  let result: number = v1 + v2;

  resultToTal.innerHTML = result.toString();
}

function subtrair(){
  let v1Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value1");
  let v2Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value2");
  let resultToTal: HTMLElement = <HTMLElement>document.getElementById("resultado");

  let v1InputString: string = v1Input.value;
  let v2InputString: string = v2Input.value;

  let v1: number = parseFloat(v1InputString);
  let v2: number = parseFloat(v2InputString);
  let result: number = v1 - v2;

  resultToTal.innerHTML = result.toString();
}

function multiplicar(){
  let v1Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value1");
  let v2Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value2");
  let resultToTal: HTMLElement = <HTMLElement>document.getElementById("resultado");

  let v1InputString: string = v1Input.value;
  let v2InputString: string = v2Input.value;

  let v1: number = parseFloat(v1InputString);
  let v2: number = parseFloat(v2InputString);
  let result: number = v1 * v2;

  resultToTal.innerHTML = result.toString();
}

function dividir(){
  let v1Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value1");
  let v2Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value2");
  let resultToTal: HTMLElement = <HTMLElement>document.getElementById("resultado");

  let v1InputString: string = v1Input.value;
  let v2InputString: string = v2Input.value;

  let v1: number = parseFloat(v1InputString);
  let v2: number = parseFloat(v2InputString);
  let result: number = Math.round(v1 / v2);

  resultToTal.innerHTML = result.toString();
}

console.log(somar());

