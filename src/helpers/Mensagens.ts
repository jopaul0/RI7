export default class Mensagens {
    public instrucao(): string {
        return "Quais são seus números e a operação desejada?\n";
    }

    public resultado(valor: number): string {
        return `O resultado da operação é: ${valor}\n`;
    }

    public erro(): string {
        return "Operação inválida!";
    }
}