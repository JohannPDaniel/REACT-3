export interface Transaction {
    id: number;
    type: "entrada" | "saída",
    description: string;
    value: number;
}