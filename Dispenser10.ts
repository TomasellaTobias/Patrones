import { Billetes } from "./Billetes"
import { IDispenser } from "./Dispenser"

export default class Dispenser10 implements IDispenser {
    // Devuelve $10 si corresponde, de lo contrario continúa con el siguiente sucesor
    successor: IDispenser | undefined;

    nextSuccessor(successor: IDispenser): void {
        // Establece el siguiente sucesor
        this.successor = successor;
    }

    handle(amount: number): number {
        // gestiona la devolucion de billetes
        if (amount >= 10) {
            const num = Math.floor(amount / 10);
            const remainder = amount % 10;
            Billetes.billetes.set("10", num);
            if (remainder !== 0) {
                (this.successor as IDispenser).handle(remainder);
            }
        } else {
            return (this.successor as IDispenser).handle(amount);
        }
    }
}