import { Header } from "../../components/Header";
import { Input } from "../../styles/global";
import { CardInfoTransaction } from "./components/CardInfoTransaction";
import { Summary } from "./components/Summary";
import { Container, Row, HeaderContent, Column, ButtonSearch } from "./styles";
import { useTransaction } from "../../hooks/useTrasactions";
import { useState } from "react";



export function Transactions() {
	const { transaction, entry, exit, search, getTransacrions } = useTransaction();
	const [searchValue, setSearchValue] = useState<string>("");

	const handleSearch = async (value: string) => {
		await getTransacrions(value);
		setSearchValue(value);
		search(searchValue);
	};

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
					<Input type="text" placeholder="Busque uma transação" value={searchValue} onChange={({ target }) => setSearchValue(target.value)} />
					<ButtonSearch onClick={() => handleSearch(searchValue)}>
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