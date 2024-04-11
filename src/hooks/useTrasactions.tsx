import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import api from "../services/Api";

interface TransactionsProps {
    "id": string,
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
    transactionById?: TransactionsProps;
    createTransaction: (data: TransactionsProps) => void;
    getTransacrionById: (id: string) => void;
    deleteTransaction: (id: string) => void;
}


export const TransactionContext = createContext<TransactionData>({} as TransactionData);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transaction, seTransaction] = useState<TransactionsProps[]>([]);
    const [transactionById, seTransactionById] = useState<TransactionsProps>();

    const getTransacrions = async () => {
        try {
            const { data } = await api.get("/transactions");
            seTransaction(data);
        } catch {
            console.log("ERRo");
        }
    };

    const getTransacrionById = async (id: string) => {
        try {
            const { data } = await api.get(`/transactions/${id}`);
            seTransactionById(data);
        } catch {
            console.log("ERRo");
        }
    };

    const createTransaction = async (data: TransactionsProps) => {
        try {
            await api.post("/transactions", data);
            seTransaction(old => [...old, data]);
        } catch {
            alert("Erro");
        }
    };

    const deleteTransaction = async (id: string) => {
        try {
            await api.delete(`/transactions/${id}`);
            seTransaction(transaction.filter(el => el.id !== id));
        } catch {
            alert("Erro");
        }
    };

    useEffect(() => {
        getTransacrions();
    }, []);

    return (
        <TransactionContext.Provider value={{ transaction, createTransaction, deleteTransaction, getTransacrionById, transactionById }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    return context;
}