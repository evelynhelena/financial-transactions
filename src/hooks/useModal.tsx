import { ReactNode, createContext, useContext, useState } from "react";

interface ModalProviderProps {
    children: ReactNode
}

interface ModalData {
    modalIsOpen: boolean;
    isEdting: boolean;
    closeModal: () => void;
    openModal: () => void;
    setIsEdting: (value: boolean) => void;
}

export const ModalContext = createContext<ModalData>({} as ModalData);

export function ModalProvider({ children }: ModalProviderProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [isEdting, setIsEdting] = useState<boolean>(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <ModalContext.Provider value={{ modalIsOpen, closeModal, openModal, isEdting, setIsEdting }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    return context;
}