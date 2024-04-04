import ReactModal from "react-modal";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 172px;
`;

export const BtnNewTransaction = styled.button`
    background-color: ${props => props.theme["green-500"]};
    border: 0;
    color: ${props => props.theme["white"]};
    font-weight: bold;
    padding: 0.75rem 1.25rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transform: calor;
   
    transition: 0.3s;

    &:hover{
        background-color: ${props => props.theme["green-300"]};
    }
`;



export const Modal = styled(ReactModal)`
    top: '50%';
    left: '50%';
    right: 'auto';
    bottom: 'auto';
    margin-right: '-50%';
    transform: 'translate(-50%, -50%)';
`;