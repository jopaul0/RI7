export default class Mensagens {
    public instrucao(): string {
        return "Quais são seus números e a operação desejada?\n";
    }

    public resultado(valor: number): string {

        if (valor === 67){
            return "SIXX SEVEN\n"; // ⁶🤷⁷
        }

        return `O resultado da operação é: ${valor}\n`;
    }

    public erro(): string {
        return "Operação inválida!";
    }

    public raizes(raizes : number[]): string {
        return `As raízes da equação são: ${raizes[0]} e ${raizes[1]}\n`;
    }
}