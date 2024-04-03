import { Header } from "../../components/Header";
import { CardInfoTransaction } from "./components/CardInfoTransaction";
import { ButtonSearch, Container, Dflex, HeaderContent, Input } from "./styles";

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
					<Input type="text" placeholder="Busque uma transação" />
					<ButtonSearch>
						<i className="ri-search-line" />
						<span>Buscar</span>
					</ButtonSearch>
				</Dflex>
			</Container>
		</HeaderContent>
	);

}