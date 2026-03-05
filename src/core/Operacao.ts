import { ICalculavel } from "../interface/ICalculo";

export default abstract class Operacao implements ICalculavel {
    public abstract calcular(a: number, b: number, c:number): number | number[];
}
