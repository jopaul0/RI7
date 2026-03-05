import * as readline from 'readline';
import Mensagens from './helpers/Mensagens';
import Soma from './core/Soma';
import Subtracao from './core/Subtracao';
import Multiplicacao from './core/Multiplicacao';
import Divisao from './core/Divisao';
import Potenciacao from './core/Potenciacao';
import Radiacao from './core/Radiciacao';
import Bhaskara from './core/Bhaskara';

const msgs = new Mensagens();
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const iniciar = () => {
    leitor.question("Qual operação deseja realizar? (Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar, Bhaskara, Sair): ", (op) => {
        const operacao = op.trim();
        let calculo;

        if (operacao === 'Sair') {
            leitor.close();
            return;
        }

        if (operacao === 'Bhaskara') {
            // Fluxo para 3 números
            leitor.question("Digite o valor de A: ", (a) => {
                leitor.question("Digite o valor de B: ", (b) => {
                    leitor.question("Digite o valor de C: ", (c) => {
                        let calculo = new Bhaskara();
                        const n1 = Number(a);
                        const n2 = Number(b);
                        const n3 = Number(c);
                        if (calculo) {
                            console.log(msgs.raizes(calculo.calcular(n1, n2, n3)));
                        }
                        iniciar();
                    });
                });
            });
        } else {
            // Fluxo padrão para 2 números
            leitor.question("Digite o primeiro número: ", (num1) => {
                leitor.question("Digite o segundo número: ", (num2) => {
                    const n1 = Number(num1);
                    const n2 = Number(num2);


                    switch (operacao) {
                        case 'Somar':
                            calculo = new Soma();
                            break;
                        case 'Subtrair':
                            calculo = new Subtracao();
                            break;
                        case 'Multiplicar':
                            calculo = new Multiplicacao();
                            break;
                        case 'Dividir':
                            calculo = new Divisao();
                            break;
                        case 'Potenciar':
                            calculo = new Potenciacao();
                            break;
                        case 'Radiciar':
                            calculo = new Radiacao();
                            break;
                        default:
                            console.log(msgs.erro());
                            iniciar();
                            return;
                    }

                    if (calculo) {
                        console.log(msgs.resultado(calculo.calcular(n1, n2)));
                    }
                    iniciar();
                });
            });
        }
        
    });
};

iniciar();