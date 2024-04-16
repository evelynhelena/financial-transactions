import { ReactNode, createContext, useContext, useState } from "react";
import { TransactionsProps } from "./useTrasactions";

interface ModalProviderProps {
    children: ReactNode
}

interface ModalData {
    modalIsOpen: boolean;
    isEdting: boolean;
    selected: string;
    description: string;
    price: string;
    category: string;

    closeModal: () => void;
    openModal: () => void;
    setIsEdting: (value: boolean) => void;
    setSelected: (value: string) => void;
    setDescription: (value: string) => void;
    setPrice: (value: string) => void;
    setCategory: (value: string) => void;
    editValues: (value?: TransactionsProps) => void;

}

export const ModalContext = createContext<ModalData>({} as ModalData);

export function ModalProvider({ children }: ModalProviderProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [isEdting, setIsEdting] = useState<boolean>(false);

    const [selected, setSelected] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const resetForm = () => {
        setSelected("");
        setDescription("");
        setPrice("");
        setCategory("");
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        resetForm();
    };



    const editValues = (transaction?: TransactionsProps) => {
        if (transaction) {
            setIsEdting(true);
            setSelected(transaction.entry ? "entry" : "exit");
            setDescription(transaction.title);
            setPrice(String(transaction.value));
            setCategory(transaction.type);
        }
    };

    return (
        <ModalContext.Provider
            value={{
                modalIsOpen,
                closeModal,
                openModal,
                isEdting,
                setIsEdting,
                selected,
                description,
                price,
                category,
                setSelected,
                setDescription,
                setPrice,
                setCategory,
                editValues
            }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    return context;
}