function doublar (n1:number, n2:number):number {

    let result:number = n1*n2
    return result
}

function somador (vetorArg:number[]) :number { // percorrendo um arrays
    let soma:number = 0 ;
    for (var valor of vetorArg) {
        soma +=valor;

    }
    return soma;
}

let array :number[] = [1,2,3,4,5,6];
let res_soma:number=somador(array);
console.log(` resultado é ${res_soma} valores vindo do  arryass${array}`);

function fatorial(numero:number):number { // funçao recursiva
    if (numero == 0 || numero == 1){
        return 1;
    }
    return numero*fatorial(numero - 1);

}
let numero:number = 5
fatorial(numero);
console.log(`fatorial de ${numero} é ${fatorial(numero)}`);


function testar_padrao(testador:RegExp, o_textto:string): string{
    if (testador.test(o_textto)){
        return "padrao encontrado"
    }
    return "padrao nao encontrado";
}

const testando = "voce é meu amor da minha vida"
const  padrao:RegExp = /me/
let resultado_do_teste:string = testar_padrao(padrao,testando);
console.log (`o resultado da comparaçao foi:${resultado_do_teste}`)