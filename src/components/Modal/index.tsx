import Modal from "react-modal";
import { ButtonCreat, ButtonEntry, ButtonExit, ButtonGroup, HeaderModal, Icon, ModalContent, Title, customStyles } from "./styles";
import { Input } from "../../styles/global";
import { useState } from "react";
import api from "../../services/Api";

interface ModalComponentProps {
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function ModalComponet({ modalIsOpen, closeModal }: ModalComponentProps) {

    const [selected, setSelected] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const teste = () => {
        try {
            const data = {
                "id": new Date().getTime(),
                "entry": selected === "entry" && true,
                "title": description,
                "value": Number(price),
                "type": category,
                "date": new Date().toISOString(),
            };

            api.post("/transactions", data);
        } catch {
            alert("Erro");
        }


    };

    return (
        <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
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

            <ButtonCreat onClick={() => teste()}>Cadastrar</ButtonCreat>
        </Modal>
    );
}