import Modal from "react-modal";
import { ButtonCreat, ButtonEntry, ButtonExit, ButtonGroup, HeaderModal, Icon, ModalContent, Title, customStyles } from "./styles";
import { Input } from "../../styles/global";
import { useTransaction } from "../../hooks/useTrasactions";
import { useModal } from "../../hooks/useModal";

interface ModalComponentProps {
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function ModalComponet({ modalIsOpen, closeModal }: ModalComponentProps) {
    const { createTransaction, transactionById, editTransaction } = useTransaction();
    const {
        selected,
        setSelected,
        description,
        setDescription,
        price,
        setPrice,
        category,
        setCategory,
        isEdting } =
        useModal();

    const handeleCreateTransaction = () => {
        try {
            const data = {
                "id": String(new Date().getTime()),
                "entry": selected === "entry" && true,
                "title": description,
                "value": Number(price),
                "type": category,
                "date": new Date().toISOString(),
            };

            createTransaction(data);
            closeModal();
        } catch {
            alert("Erro");
        }
    };

    const handeleEditTransaction = () => {
        console.log("edit");
        try {
            const data = {
                "id": transactionById?.id || "",
                "entry": selected === "entry" && true,
                "title": description,
                "value": Number(price),
                "type": category,
                "date": transactionById?.date || "",
            };

            editTransaction(data);
            closeModal();
        } catch {
            alert("Erro");
        }
    };

    return (
        <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            <HeaderModal>
                <Icon className="ri-close-line" onClick={closeModal} />
                <Title>Nova transação</Title>
            </HeaderModal>

            <ModalContent>
                <Input
                    placeholder="Descrição"
                    type="text"
                    value={description}
                    onChange={({ target }) =>
                        setDescription(target.value)}
                />
                <Input
                    placeholder="Preço"
                    type="text"
                    value={price}
                    onChange={({ target }) =>
                        setPrice(target.value)}
                />
                <Input
                    placeholder="Categoria"
                    type="text"
                    value={category}
                    onChange={({ target }) =>
                        setCategory(target.value)}
                />
            </ModalContent>

            <ButtonGroup>
                <ButtonEntry selected={selected} onClick={() => setSelected("entry")}>
                    <i className="ri-arrow-up-circle-line" />
                    Entrada
                </ButtonEntry>
                <ButtonExit selected={selected} onClick={() => setSelected("exit")}>
                    <i className="ri-arrow-down-circle-line" />
                    Saída
                </ButtonExit>
            </ButtonGroup>

            <ButtonCreat
                onClick={() => isEdting ? handeleEditTransaction() : handeleCreateTransaction()}>
                {isEdting ? "Editar" : "Cadastrar"}
            </ButtonCreat>
        </Modal>
    );
}