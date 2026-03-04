import Operacao from "./Operacao";

export default class Radiacao extends Operacao {
    public calcular(a: number, b : number = 2): number {
        return a ** (1 / b);
    }
}