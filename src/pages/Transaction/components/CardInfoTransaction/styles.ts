import styled from "styled-components";

interface CardProps {
    total: string;
    color?: string;
}

interface IconProps {
    type: "entry" | "exit" | "total";
}

export const CardTransations = styled.div<CardProps>`
    width: 352px;
    background-color: ${props => props.total === "true" ? props.theme[props.color || ""] : props.theme["gray-600"]};
    padding: 1.5rem 2rem;
    border-radius: 0.375rem;
`;

export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.span<CardProps>`
    color: ${props => props.total === "true" ? props.theme["white"] : props.theme["gray-300"]};
    
`;

export const Icon = styled.i<IconProps>`
    color: ${props => props.type === "entry" && props.theme["green-500"] || props.type === "exit" && props.theme["red-300"] || props.type === "total" && props.theme["white"]};
    font-size: 1.625rem;
`;

export const Value = styled.div`
    color:${props => props.theme["gray-100"]};
    font-size: 2rem;
    font-weight: bold;
    margin-top: 0.75rem;
`;