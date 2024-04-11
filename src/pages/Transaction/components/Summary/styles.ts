import styled, { css } from "styled-components";

interface ValueProps {
    entry: string;
}
interface IconProps {
    color: string;
}

export const SummaryContent = styled.div`
    background-color: ${props => props.theme["gray-700"]};
    padding: 1.25rem 2rem;
    border-radius: 0.375rem;
    display: flex;
    justify-content: space-between;
    gap: 0.938rem;
    
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
    color: ${props => props.entry === "true" ? props.theme["green-300"] : props.theme["red-300"]};
`;

export const Icon = styled.div<IconProps>`
    cursor: pointer;
    transition: transform .2s;
    &:hover{
        transform: scale(1.2)
    }
    i{
        font-size: 1.25rem;
        color: ${props => props.theme[props.color]};
    }
`;