import Operacao from "./Operacao";

export default class Bhaskara extends Operacao {
    public calcular(a: number, b: number, c: number): number[] {
        const delta = b ** 2 - 4 * a * c;
        if (delta < 0) {
            throw new Error("Delta negativo, não há raízes reais.");
        }
        
        const r1 = (-b + delta**(1/2)) / (2 * a);
        const r2 = (-b - delta**(1/2)) / (2 * a);

        return r1 === r2 ? [r1] : [r1, r2];
    }
}