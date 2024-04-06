import { BtnNewTransaction, Container, Image } from "./styles";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { ModalComponet } from "../Modal";

export function Header() {
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<Container>
			<Image src={Logo} />
			<BtnNewTransaction onClick={() => setIsOpen(true)}>Nova transação</BtnNewTransaction>

			<ModalComponet closeModal={closeModal} modalIsOpen={modalIsOpen} />
		</Container>
	);
}