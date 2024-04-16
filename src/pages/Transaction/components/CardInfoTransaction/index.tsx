import { currencyFormat } from "../../../../utils/format";
import { CardTransations, HeaderCard, Icon, Title, Value } from "./styles";

interface CardInfoTransactionProps {
    total: boolean;
    type: "entry" | "exit" | "total";
    iconType: string;
    title: string;
    value: number;
}

export function CardInfoTransaction({ total, type, iconType, title, value }: CardInfoTransactionProps) {
    return (
        <CardTransations total={total ? "true" : "false"} color={total && value < 0 ? "red-500" : "green-500"}>
            <HeaderCard>
                <Title total={total ? "true" : "false"}>{title}</Title>
                <Icon className={iconType} type={type} />
            </HeaderCard>
            <Value>{currencyFormat(value)}</Value>
        </CardTransations>
    );
}