import { Billetes } from "./Billetes"
import { IDispenser } from "./Dispenser"

export default class Dispenser20 implements IDispenser {
    // Devuelve $10 si corresponde, de lo contrario continúa con el siguiente sucesor
    successor: IDispenser | undefined;

    nextSuccessor(successor: IDispenser): void {
        // Establece el siguiente sucesor
        this.successor = successor;
    }

    handle(amount: number): number {
        // gestiona la devolucion de billetes
        if (amount >= 20) {
            const num = Math.floor(amount / 20);
            const remainder = amount % 20;
            Billetes.billetes.set("20", num);
            if (remainder !== 0) {
                (this.successor as IDispenser).handle(remainder);
            }
        } else {
            return (this.successor as IDispenser).handle(amount);
        }
    }
}