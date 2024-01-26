import styled from 'styled-components';

export const Gallery = styled.ul`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px; 
`