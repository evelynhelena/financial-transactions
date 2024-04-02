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

export const Dflex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2.5rem;
`;