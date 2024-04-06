import styled, { createGlobalStyle } from "styled-components";
import "remixicon/fonts/remixicon.css";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :focus{
        outline: 0;
        box-sizing: 0 0 0 2px ${props => props.theme["green-500"]};
    }

    body{
        background-color: ${props => props.theme["gray-800"]};
        color: ${props => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body,input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
    }

`;

export const Input = styled.input`
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme["gray-900"]};
    border: 0;
    border-radius: 0.375rem;
    color: ${props => props.theme["white"]};
    
    &:focus{
        outline: 1px solid ${props => props.theme["green-300"]}; 
    }
`;