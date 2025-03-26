import styled from 'styled-components';

export const StyledMain = styled.div`
    display: grid;
    grid-template-areas:
    'attributes skills'
    'stats skills'
    'description skills';
    grid-template-columns: 1fr min(25rem, 40%); 
`;

export const Attributes = styled.div`
    grid-area: attributes;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: min(2.5vw, 2.5rem);
`;

export const Skills = styled.div`
    grid-area: skills;
`;

export const Stats = styled.div`
    grid-area: stats;
    margin: 0 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
`;

export const Description = styled.div`
    grid-area: description;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0.2rem;
`;