import styled from 'styled-components'; 

export const StyledSkillRow = styled.div`
    display: grid;
    grid-template-areas: 'skill-name dices-bonus';
    grid-template-columns: 40% 60%;
    padding: 0.25rem;
`;

export const NameColumn = styled.div`
    grid-area: skill-name;
    display: flex;
    justify-content: flex-end;
    font-size: min(2.4vw, 1.5rem);
`;

export const InputColumn = styled.div`
    grid-area: dices-bonus;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const SkillInput = styled.input`
    width: min(3.4vw, 2rem);
    font-size: min(1.75vw, 1.25rem);
`;