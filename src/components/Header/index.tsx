import { BtnNewTransaction, Container, Image } from "./styles";
import Logo from "../../assets/logo.svg";
export function Header() {
	return (
		<Container>
			<Image src={Logo} />
			<BtnNewTransaction>Nova transação</BtnNewTransaction>
		</Container>
	);
}