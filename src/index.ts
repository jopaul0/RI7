import * as readline from 'readline';
import Mensagens from './helpers/Mensagens';
import Soma from './core/Soma';
import Subtracao from './core/Subtracao';
import Multiplicacao from './core/Multiplicacao';
import Divisao from './core/Divisao';
import Potenciacao from './core/Potenciacao';
import Radiacao from './core/Radiciacao';

const msgs = new Mensagens();
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const iniciar = () => {
    leitor.question(msgs.instrucao(), (valor : any) => {
        if (valor === 'Sair') {
            leitor.close();
            return;
        }


        const instrucoes = valor.split(' '); // Ex: "10 5 Somar"
        const n1 = Number(instrucoes[0]);
        const n2 = Number(instrucoes[1]);
        const operacao = instrucoes[2];

        let calculo;

        switch (operacao) {
            case 'Somar':
                calculo = new Soma();
                console.log(msgs.resultado(calculo.calcular(n1, n2)));
                break;
            case 'Subtrair':
                calculo = new Subtracao();
                console.log(msgs.resultado(calculo.calcular(n1, n2)));
                break;
            case 'Multiplicar':
                calculo = new Multiplicacao();
                console.log(msgs.resultado(calculo.calcular(n1, n2)));
                break;
            case 'Dividir':
                calculo = new Divisao();
                console.log(msgs.resultado(calculo.calcular(n1, n2)));
                break;
            case 'Potenciar':
                calculo = new Potenciacao();
                console.log(msgs.resultado(calculo.calcular(n1, n2)));
                break;
            case 'Radiciar':
                calculo = new Radiacao();
                console.log(msgs.resultado(calculo.calcular(n1, n2)));
                break;
            case 'Sair':
                leitor.close();
                return;
            default:
                console.log(msgs.erro());
        }

        iniciar();
    });
};

iniciar();