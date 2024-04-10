
import { dateFormat, currencyFormat } from "../../../../utils/format";
import { SummaryContent, TextInfo, TextInfoDate, Value } from "./styles";

interface SummaryProps {
    entry: boolean;
    title: string;
    value: number;
    type: string;
    date: string;
}

export function Summary({ entry, title, value, type, date }: SummaryProps) {

    return (
        <SummaryContent>
            <TextInfo>{title}</TextInfo>
            <Value entry={entry ? "true" : "false"}>{!entry && "- "}{currencyFormat(value)}</Value>
            <TextInfo>{type}</TextInfo>
            <TextInfoDate>{dateFormat(new Date(date))}</TextInfoDate>
        </SummaryContent>
    );
}