import { Header } from "../../components/Header";
import { CardInfoTransaction } from "./components/CardInfoTransaction";
import { Container, Dflex, HeaderContent } from "./styles";

export function Transactions() {
	return (
		<HeaderContent>
			<Container>
				<Header />
				<Dflex>
					<CardInfoTransaction
						total={false}
						type="entry"
						iconType="ri-arrow-up-circle-line"
						title="Entrada"
						value="R$ 17.400,00"
					/>
					<CardInfoTransaction
						total={false}
						type="exit"
						iconType="ri-arrow-down-circle-line"
						title="Saída"
						value="R$ 1.259,00"
					/>
					<CardInfoTransaction
						total
						type="total"
						iconType="ri-money-dollar-circle-line"
						title="Total"
						value="R$ 16.141,00"
					/>
				</Dflex>

				<Dflex>
					<input type="text" placeholder="Busque uma transação" />
					<button>Buscar</button>
				</Dflex>
			</Container>
		</HeaderContent>
	);

}