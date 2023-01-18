
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

interface propsVariables{
  v1Input: HTMLInputElement,
  v2Input: HTMLInputElement,
  resultTotal: HTMLElement,
  v1InputString: string,
  v2InputString: string,
  v1: number,
  v2: number,
  result: number,
};



function somar(props: propsVariables){
  // let v1Input: HTMLInputElement = <HTMLInputElement>document.getElementById("value1");
  let v1Input = props.v1Input = <HTMLInputElement>document.getElementById("value1");
  let v2Input= props.v2Input = <HTMLInputElement>document.getElementById("value2");
  let resultToTal= props.resultTotal = <HTMLElement>document.getElementById("resultado");

  let v1InputString: string = v1Input.value;
  let v2InputString: string = v2Input.value;

  let v1: number = parseFloat(v1InputString);
  let v2: number = parseFloat(v2InputString);
  let result: number = v1 + v2;

  resultToTal.innerHTML = result.toString();
}

function subtrair(props: propsVariables){
  let v1Input = props.v1Input = <HTMLInputElement>document.getElementById("value1");
  let v2Input= props.v2Input = <HTMLInputElement>document.getElementById("value2");
  let resultToTal= props.resultTotal = <HTMLElement>document.getElementById("resultado");

  let v1InputString: string = v1Input.value;
  let v2InputString: string = v2Input.value;

  let v1: number = parseFloat(v1InputString);
  let v2: number = parseFloat(v2InputString);
  let result: number = v1 - v2;

  resultToTal.innerHTML = result.toString();
}

function multiplicar(props: propsVariables){
  let v1Input = props.v1Input = <HTMLInputElement>document.getElementById("value1");
  let v2Input= props.v2Input = <HTMLInputElement>document.getElementById("value2");
  let resultToTal= props.resultTotal = <HTMLElement>document.getElementById("resultado");

  let v1InputString: string = v1Input.value;
  let v2InputString: string = v2Input.value;

  let v1: number = parseFloat(v1InputString);
  let v2: number = parseFloat(v2InputString);
  let result: number = v1 * v2;

  resultToTal.innerHTML = result.toString();
}

function dividir(props: propsVariables){
  let v1Input = props.v1Input = <HTMLInputElement>document.getElementById("value1");
  let v2Input= props.v2Input = <HTMLInputElement>document.getElementById("value2");
  let resultToTal= props.resultTotal = <HTMLElement>document.getElementById("resultado");

  let v1InputString: string = v1Input.value;
  let v2InputString: string = v2Input.value;

  let v1: number = parseFloat(v1InputString);
  let v2: number = parseFloat(v2InputString);
  let result: number = Math.round(v1 / v2);

  resultToTal.innerHTML = result.toString();
}

