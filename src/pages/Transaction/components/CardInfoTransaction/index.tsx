import { CardTransations, HeaderCard, Icon, Title, Value } from "./styles";

interface CardInfoTransactionProps {
    total: boolean;
    type: "entry" | "exit" | "total";
    iconType: string;
    title: string;
    value: string;
}

export function CardInfoTransaction({ total, type, iconType, title, value }: CardInfoTransactionProps) {
    return (
        <CardTransations total={total ? "true" : "false"}>
            <HeaderCard>
                <Title total={total ? "true" : "false"}>{title}</Title>
                <Icon className={iconType} type={type} />
            </HeaderCard>
            <Value>{value}</Value>
        </CardTransations>
    );
}