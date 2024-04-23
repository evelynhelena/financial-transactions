import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import api from "../services/Api";
import { useModal } from "./useModal";

export interface TransactionsProps {
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
    entry: number;
    exit: number;
    getTransacrions: (query?: string) => Promise<void>;
    createTransaction: (data: TransactionsProps) => void;
    editTransaction: (data: TransactionsProps) => void;
    getTransacrionById: (id: string) => void;
    deleteTransaction: (id: string) => void;
    search: (value: string) => void;
}


export const TransactionContext = createContext<TransactionData>({} as TransactionData);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transaction, seTransaction] = useState<TransactionsProps[]>([]);
    const [transactionById, seTransactionById] = useState<TransactionsProps>();
    const [entry, seEntry] = useState<number>(0);
    const [exit, seExit] = useState<number>(0);
    const { editValues } = useModal();



    const sumValues = (data: number[]) => {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
        }
        return sum;
    };

    const calcValues = (data: TransactionsProps[]) => {
        const entryValue = data.map((el) => el.entry ? el.value : 0);
        const exitValue = data.map((el) => !el.entry ? el.value : 0);
        seEntry(sumValues(entryValue));
        seExit(sumValues(exitValue));
    };

    const getTransacrions = async (query?: string) => {
        try {

            const { data }: { data: TransactionsProps[] } = await api.get(query ? `/transactions?q=${query}` : "/transactions");
            calcValues(data);
            seTransaction(data);
        } catch {
            console.log("ERRo Get");
        }
    };

    const getTransacrionById = async (id: string) => {
        try {
            const { data } = await api.get(`/transactions/${id}`);
            seTransactionById(data);
            editValues(data);
        } catch {
            console.log("ERRo");
        }
    };

    const createTransaction = async (data: TransactionsProps) => {
        try {
            await api.post("/transactions", data);
            await getTransacrions();
        } catch {
            alert("Erro");
        }
    };

    const editTransaction = async (data: TransactionsProps) => {
        try {
            await api.put(`/transactions/${data.id}`, data);
            await getTransacrions();
        } catch {
            alert("Erro");
        }
    };

    const deleteTransaction = async (id: string) => {
        try {
            await api.delete(`/transactions/${id}`);
            await getTransacrions();
        } catch {
            alert("Erro");
        }
    };

    const search = (value: string) => {
        console.log(value);
    };

    useEffect(() => {
        getTransacrions();
    }, []);

    return (
        <TransactionContext.Provider
            value={{
                getTransacrions,
                transaction,
                createTransaction,
                deleteTransaction,
                getTransacrionById,
                transactionById,
                editTransaction,
                entry,
                exit,
                search
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    return context;
}