import styled from 'styled-components';

export const StyledInput = styled.input`
    font-family: Arial, Verdana, sans-serif;
    color: black;
    font-size: min(2vw, 1.25rem);
    width: ${props => props.width};
`;