import styled from "styled-components";

export const Overlay = styled.div`
    background-color: #00000060;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1; 

    width: 100vw;
    height: 100vh;

    display: flex;
    place-content: center;
    align-items: center;
`

export const ModalImage = styled.div`
    width: 60%;
`