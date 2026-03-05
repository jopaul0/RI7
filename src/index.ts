import * as readline from 'readline';
import Mensagens from './helpers/Mensagens';
import Soma from './core/Soma';
import Subtracao from './core/Subtracao';
import Multiplicacao from './core/Multiplicacao';
import Divisao from './core/Divisao';
import Potenciacao from './core/Potenciacao';
import Radiacao from './core/Radiciacao';
import Bhaskara from './core/Bhaskara';
import Operacao from './core/Operacao';

const msgs = new Mensagens();
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const obterOperacao = (tipo: string): Operacao | null => {
    const operacoes: { [key: string]: new () => Operacao } = {
        'Somar': Soma,
        'Subtrair': Subtracao,
        'Multiplicar': Multiplicacao,
        'Dividir': Divisao,
        'Potenciar': Potenciacao,
        'Radiciar': Radiacao,
        'Bhaskara': Bhaskara
    };

    const Classe = operacoes[tipo];
    return Classe ? new Classe() : null;
};

const pergunta = (query: string): Promise<string> =>
    new Promise((resolve) => leitor.question(query, resolve));

const iniciar = async () => {
    while (true) {
        const op = (await pergunta("\nQual operação deseja realizar? (Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar, Bhaskara, Sair): ")).trim();

        if (op === 'Sair') {
            leitor.close();
            break;
        }

        const calculo = obterOperacao(op);
        if (!calculo) {
            console.log(msgs.erro());
            continue;
        }

        try {
            if (op === 'Bhaskara') {
                const a = Number(await pergunta("Digite A: "));
                const b = Number(await pergunta("Digite B: "));
                const c = Number(await pergunta("Digite C: "));

                console.log(msgs.raizes(calculo.calcular(a, b, c) as number[]));
            } else {
                const n1 = Number(await pergunta("Digite o primeiro número: "));
                const n2 = Number(await pergunta("Digite o segundo número: "));

                console.log(msgs.resultado(calculo.calcular(n1, n2, 0) as number));
            }
        } catch (e: any) {
            console.log(`Erro: ${e.message}`);
        }
    }
};

iniciar();