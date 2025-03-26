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
        margin: 1% 2%; 
        border: 0.0625rem white solid;
        display: grid;
        grid-template-areas:
        'nav title'
        'info title'
        'section section';
        grid-template-columns: auto 35vw;
    }

    input[type="number"] {
        -moz-appearance: textfield; /* Firefox */
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none; /* Chrome, Safari, Edge, Opera */
        margin: 0;
    }
`;

export default GlobalStyle;