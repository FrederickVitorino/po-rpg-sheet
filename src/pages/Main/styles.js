import styled from 'styled-components';

export const StyledMain = styled.div`
    display: grid;
    grid-template-areas:
    'attributes skills'
    'stats skills';
`;

export const Attributes = styled.div`
    grid-area: attributes;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Skills = styled.div`
    grid-area: skills;
`;

export const Stats = styled.div`
    grid-area: stats;
    margin: 0rem 0.2rem;
`;