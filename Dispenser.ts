
export interface IDispenser {
    nextSuccessor(successor: IDispenser): void;
    handle(amount: number): number;
}