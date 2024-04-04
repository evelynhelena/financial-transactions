import { SummaryContent, TextInfo, TextInfoDate, Value } from "./styles";

interface SummaryProps {
    entry: boolean;
    title: string;
    value: string;
    type: string;
    date: Date;
}

export function Summary({ entry, title, value, type, date }: SummaryProps) {

    return (
        <SummaryContent>
            <TextInfo>{title}</TextInfo>
            <Value entry={entry}>{!entry && "- "}{value}</Value>
            <TextInfo>{type}</TextInfo>
            <TextInfoDate>{new Date(date).toDateString()}</TextInfoDate>
        </SummaryContent>
    );
}