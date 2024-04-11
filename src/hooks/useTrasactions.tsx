import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import api from "../services/Api";

interface TransactionsProps {
    "id": number,
    "entry": boolean,
    "title": string,
    "value": number,
    "type": string,
    "date": string
}
interface TransactionProviderProps {
    children: ReactNode
}
interface TransactionData {
    transaction: TransactionsProps[];
    createTransaction: (data: TransactionsProps) => void;
    deleteTransaction: (id: number) => void;
}


export const TransactionContext = createContext<TransactionData>({} as TransactionData);



export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transaction, seTransaction] = useState<TransactionsProps[]>([]);

    const getTransacrions = async () => {
        try {
            const { data } = await api.get("/transactions");
            seTransaction(data);
        } catch {
            console.log("ERRo");
        }
    };

    const createTransaction = (data: TransactionsProps) => {
        try {
            api.post("/transactions", data);
            seTransaction(old => [...old, data]);
        } catch {
            alert("Erro");
        }
    };

    const deleteTransaction = (id: number) => {
        try {
            api.delete(`/transactions/${id}`);
            seTransaction(transaction.filter(el => el.id !== id));
        } catch {
            alert("Erro");
        }
    };

    useEffect(() => {
        getTransacrions();
    }, []);

    return (
        <TransactionContext.Provider value={{ transaction, createTransaction, deleteTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    return context;
}