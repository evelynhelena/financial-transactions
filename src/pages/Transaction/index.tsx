import { Header } from "../../components/Header";
import { Input } from "../../styles/global";
import { CardInfoTransaction } from "./components/CardInfoTransaction";
import { Summary } from "./components/Summary";
import { ButtonSearch, Container, Row, HeaderContent, Column } from "./styles";
import { useTransaction } from "../../hooks/useTrasactions";



export function Transactions() {

	const { transaction, entry, exit } = useTransaction();

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
						value={entry}
					/>
					<CardInfoTransaction
						total={false}
						type="exit"
						iconType="ri-arrow-down-circle-line"
						title="Saída"
						value={exit}
					/>
					<CardInfoTransaction
						total
						type="total"
						iconType="ri-money-dollar-circle-line"
						title="Total"
						value={entry - exit}
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
					{transaction.map((transaction) => (
						<Summary
							id={transaction.id}
							key={transaction.id}
							entry={transaction.entry}
							title={transaction.title}
							value={transaction.value}
							type={transaction.type}
							date={transaction.date}
						/>
					))}
				</Column>
			</Container>
		</HeaderContent>
	);

}