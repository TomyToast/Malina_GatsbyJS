import React, { Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    color: black;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Conteiner = styled.div`
    width: 1600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <StyledWrapper>
                <Conteiner>
                    {children}
                </Conteiner>
            </StyledWrapper>
        </Fragment>
    </ThemeProvider>
);

export default Layout;