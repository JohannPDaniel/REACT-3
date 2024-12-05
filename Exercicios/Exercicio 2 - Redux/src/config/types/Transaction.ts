export interface Transaction {
    id: string;
    type: "entrada" | "saída",
    description: string;
    value: number;
}