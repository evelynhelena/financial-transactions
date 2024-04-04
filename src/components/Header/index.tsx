import { BtnNewTransaction, Container, Image } from "./styles";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import Modal from "react-modal";


const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

export function Header() {
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<Container>
			<Image src={Logo} />
			<BtnNewTransaction onClick={() => setIsOpen(true)}>Nova transação</BtnNewTransaction>

			<Modal
				style={customStyles}

				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
			>
				<h1>Teste</h1>
			</Modal>
		</Container>
	);
}