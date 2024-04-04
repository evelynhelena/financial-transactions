import { Header } from "../../components/Header";
import { CardInfoTransaction } from "./components/CardInfoTransaction";
import { Summary } from "./components/Summary";
import { ButtonSearch, Container, Row, HeaderContent, Input, Column } from "./styles";

export function Transactions() {
	return (
		<HeaderContent>
			<Container>
				<Header />
				<Row>
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
				</Row>

				<Row>
					<Input type="text" placeholder="Busque uma transação" />
					<ButtonSearch>
						<i className="ri-search-line" />
						<span>Buscar</span>
					</ButtonSearch>
				</Row>

				<Column>
					<Summary
						entry
						title="Desenvolvimento de site"
						value="R$ 12.000,00"
						type="Venda"
						date={new Date("04/13/2022")}
					/>
					<Summary
						entry={false}
						title="Hamburguer"
						value="R$ 59,00"
						type="Alimentação"
						date={new Date("04/10/2022")}
					/>
				</Column>
			</Container>
		</HeaderContent>
	);

}