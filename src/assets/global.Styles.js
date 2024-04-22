import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';
import RobotoBlack from './fonts/Roboto-Black.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import RobotoRegular from './fonts/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

:root{
    --button: #9fbaae;
    --button-hover: #cbded3;
    --homepage: rgba(18, 20, 23, 0.7);
    --transition: 250ms ease-in-out;
    --backgr-info: #f8f8f8;
}
body{
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  color: #121417;
}
p,
h1,
h2,
h3 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;

  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
}

svg{
  width: 16px;
  height: 16px;
}

::-webkit-scrollbar {
    width: 15px;
  }

::-webkit-scrollbar-thumb {
    background-color: #F4C550;
    border-radius: 15px;
  }


  @font-face {
    font-family: 'RobotoBlack';
    src: local('Roboto'), local('Roboto-Black'),
         url(${RobotoBlack}) format('truetype');
    font-weight: 900; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Bold'),
         url(${RobotoBold}) format('truetype');
    font-weight: 700; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Medium'),
         url(${RobotoMedium}) format('truetype');
    font-weight: 500; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Regular'),
         url(${RobotoRegular}) format('truetype');
    font-weight: 400; 
    font-style: normal;
    font-display: swap;
  }

`;
export const Container = styled.div`
  max-width: 345px;
  padding: 0 14px;
  margin: 0 auto;

  @media screen and (min-width: 500px) {
    max-width: 500px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1440px;
    padding: 0 64px;
  }
`;