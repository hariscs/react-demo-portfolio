import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


*,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


body{
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 15px;
    
}

p{
    line-height: 1.6;
}

a{
    text-decoration: none;
}

h1,h2,h3,h4,a,li{
    font-family: 'Poppins', sans-serif;
}

img{
    max-width: 100%;
    display: block;
}
`;

export default GlobalStyles;
