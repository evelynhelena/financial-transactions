import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

interface ButtonProps {
    selected: string;
}

export const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)"
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "565px",
        height: "528px",
        transform: "translate(-50%, -50%)",
        backgroundColor: defaultTheme["gray-800"],
        border: 0,
        borderRadius: "0.375rem",
        padding: "40px 48px"
    },
};

export const HeaderModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.span`
    color: ${props => props.theme["gray-100"]};
    font-size: 1.5rem;
    font-weight: bold;
`;

export const Icon = styled.i`
    color: ${props => props.theme["gray-300"]};
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    transition: transform 0.1s;
    &:hover{
        transform: scale(1.1);
        color: ${props => props.theme["gray-100"]};
    }
`;


export const ModalContent = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
`;

const ButtonData = () => css`
    width: 100%;
    background-color: ${props => props.theme["gray-700"]};
    border: 0;
    border-radius: 0.375rem;
    padding: 1rem;
    color: ${props => props.theme["gray-300"]};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const ButtonEntry = styled.button<ButtonProps>`
    ${ButtonData}
    background-color: ${props => props.selected === "entry" && props.theme["green-700"]};
    color: ${props => props.selected === "entry" && props.theme["white"]};
    i{
        font-size: 1.5rem;
        color: ${props => props.selected === "entry" ? props.theme["white"] : props.theme["green-300"]};
    }
`;

export const ButtonExit = styled.button<ButtonProps>`
    ${ButtonData}
    background-color: ${props => props.selected === "exit" && props.theme["red-700"]};
    color: ${props => props.selected === "exit" && props.theme["white"]};
    i{
        font-size: 1.5rem;
        color: ${props => props.selected === "exit" ? props.theme["white"] : props.theme["red-300"]};
    }
`;

export const ButtonCreat = styled.button`
    width: 100%;
    padding: 1rem 0;
    font-weight: bold;
    text-align: center;
    background-color: ${props => props.theme["green-500"]};
    border-radius: 0.375rem;
    border: 0;
    margin-top: 2.5rem;
    color: ${props => props.theme["white"]};
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        background-color:  ${props => props.theme["green-300"]};
    }
`;
