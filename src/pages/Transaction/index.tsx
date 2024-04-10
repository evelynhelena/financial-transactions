import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import api from "../../services/Api";
import { Input } from "../../styles/global";
import { CardInfoTransaction } from "./components/CardInfoTransaction";
import { Summary } from "./components/Summary";
import { ButtonSearch, Container, Row, HeaderContent, Column } from "./styles";

interface TransactionsProps {
	"id": number,
	"entry": boolean,
	"title": string,
	"value": number,
	"type": string,
	"date": string
}

export function Transactions() {
	const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

	const getTransacrions = async () => {
		try {
			const { data } = await api.get("/transactions");
			setTransactions(data);
		} catch {
			console.log("ERRo");
		}
	};

	useEffect(() => {
		getTransacrions();
	}, []);

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
					{transactions.map((transaction) => (
						<Summary
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