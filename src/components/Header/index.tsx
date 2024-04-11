import { BtnNewTransaction, Container, Image } from "./styles";
import Logo from "../../assets/logo.svg";
import { ModalComponet } from "../Modal";
import { useModal } from "../../hooks/useModal";

export function Header() {

	const { closeModal, modalIsOpen, openModal, setIsEdting } = useModal();

	return (
		<Container>
			<Image src={Logo} />
			<BtnNewTransaction
				onClick={() => { openModal(); setIsEdting(false); }}
			>
				Nova transação
			</BtnNewTransaction>
			<ModalComponet
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		</Container>
	);
}