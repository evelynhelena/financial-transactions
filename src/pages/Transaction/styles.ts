import styled from "styled-components";

export const HeaderContent = styled.div`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0;
    height: 212px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 0.625rem;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2.5rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme["gray-900"]};
    border: 0;
    border-radius: 0.375rem;
    color: ${props => props.theme["white"]};
    font-size: 1rem;
    &:focus{
        outline: 1px solid ${props => props.theme["green-300"]}; 
    }
`;

export const ButtonSearch = styled.button`
    border: 1px solid ${props => props.theme["green-300"]};
    padding: 0.875rem 2rem;
    color: ${props => props.theme["green-300"]};
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    &:hover{
        background-color:  ${props => props.theme["green-300"]};
        color:  ${props => props.theme["white"]};
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.5rem;
`;
