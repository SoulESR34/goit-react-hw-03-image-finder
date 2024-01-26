import styled, {keyframes} from "styled-components";

const spinLoader = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`

export const LoaderIcon = styled.div`
    width: 50px;
    height: 50px;
    border: 6px solid #00000050;
    border-radius: 50%;
    border-left-color: #4354B0;
    animation: ${spinLoader} 1s linear infinite;
`