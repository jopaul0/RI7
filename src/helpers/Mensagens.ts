export default class Mensagens {
    public instrucao(): string {
        return "Quais são seus números e a operação desejada?\n";
    }

    public resultado(valor: number): string {
        return `O resultado da operação é: ${valor}\n`;
    }

    public erro(): string {
        return "Palma, palma, não priemos cânico! Operação inválida.\n"; // Suspeitei desde o princípio
    }

    public raizes(raizes : number[]): string {
        return `As raízes da equação são: ${raizes[0]} e ${raizes[1]}\n`;
    }
}