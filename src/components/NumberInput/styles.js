import styled from 'styled-components';

export const StyledInput = styled.input`
    font-family: Arial, Verdana, sans-serif;
    color: black;
    font-size: min(2.1vw, 1.25rem);
    width: ${props => props.width};
    min: ${props => props.min};
    max: ${props => props.max};
    value: ${props => props.value};
`;