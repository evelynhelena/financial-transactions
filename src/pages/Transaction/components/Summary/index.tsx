
import { useTransaction } from "../../../../hooks/useTrasactions";
import { dateFormat, currencyFormat } from "../../../../utils/format";
import { Icon, SummaryContent, TextInfo, TextInfoDate, Value } from "./styles";

interface SummaryProps {
    id: number;
    entry: boolean;
    title: string;
    value: number;
    type: string;
    date: string;
}

export function Summary({ id, entry, title, value, type, date }: SummaryProps) {
    const { deleteTransaction } = useTransaction();

    return (
        <SummaryContent>
            <TextInfo>{title}</TextInfo>
            <Value entry={entry ? "true" : "false"}>{!entry && "- "}{currencyFormat(value)}</Value>
            <TextInfo>{type}</TextInfo>
            <TextInfoDate>{dateFormat(new Date(date))}</TextInfoDate>
            <Icon color="green-500">
                <i className="ri-pencil-fill" />
            </Icon>
            <Icon color="red-300" onClick={() => deleteTransaction(id)}>
                <i className="ri-delete-bin-line" />
            </Icon>
        </SummaryContent>
    );
}