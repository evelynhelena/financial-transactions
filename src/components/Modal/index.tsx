import Modal from "react-modal";
import { ButtonCreat, ButtonEntry, ButtonExit, ButtonGroup, HeaderModal, Icon, ModalContent, Title, customStyles } from "./styles";
import { Input } from "../../styles/global";
import { useState } from "react";

interface ModalComponentProps {
    modalIsOpen: boolean;
    closeModal: () => void;
}

export function ModalComponet({ modalIsOpen, closeModal }: ModalComponentProps) {

    const [selected, setSelected] = useState<string>("");

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
                <Input placeholder="Descrição" type="text" />
                <Input placeholder="Preço" type="text" />
                <Input placeholder="Categoria" type="text" />
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

            <ButtonCreat>Cadastrar</ButtonCreat>
        </Modal>
    );
}