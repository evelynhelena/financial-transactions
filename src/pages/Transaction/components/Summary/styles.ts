import styled, { css } from "styled-components";

interface ValueProps {
    entry: boolean;
}

export const SummaryContent = styled.div`
    background-color: ${props => props.theme["gray-700"]};
    padding: 1.25rem 2rem;
    border-radius: 0.375rem;
    display: flex;
    justify-content: space-between;
    
`;

const TextData = () => css`
    
    width: 100%;
    color: ${props => props.theme["gray-300"]};
`;

export const TextInfo = styled.span`
    ${TextData}
`;

export const TextInfoDate = styled.span`
    ${TextData}
    text-align: end;
`;

export const Value = styled.span<ValueProps>`
    
    width: 100%;
    color: ${props => props.entry ? props.theme["green-300"] : props.theme["red-300"]}
`;