import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face{
        src: url(/assets/fonts/Roman_New_Times.ttf);
        font-family: RomanNewTimes;
    }

    body{
        background-image: url(/assets/images/fear-background.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        background-size: min(40vw, 25rem);
        background-color: black;
        font-family: RomanNewTimes, Arial, Verdana, sans-serif;
        color: white;
        font-size: min(4vw, 2.5rem);
    }

    main{
        margin: 2% 4%; 
        border: 0.0625rem white solid;
        display: grid;
        grid-template-areas: 
        'info title'
        'section section';
        grid-template-columns: auto 35vw;
    }
`;

export default GlobalStyle;