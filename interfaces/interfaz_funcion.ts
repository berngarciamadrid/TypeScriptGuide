// Interfaz no existe en Javascript
interface DosNumerosFunc {
    ( num1: number, num2: number ) : number 
}

let función_suma:DosNumerosFunc;

función_suma = (a:number, b:number) => a +  b; 

let función_restar:DosNumerosFunc;
función_restar = (a:number, b:number) => a - b;