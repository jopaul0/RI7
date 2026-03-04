import Operacao from "./Operacao";

export default class Multiplicacao extends Operacao {
    public calcular(a: number, b: number): number {
        return a * b;
    }
}