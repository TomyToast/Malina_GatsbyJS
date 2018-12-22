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
    max-width: 100rem;
    padding: 0.5rem;

    border: 1px solid red;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 8.333rem);
    grid-gap: 0.8rem;
    height: 100vh;
    background: grey;
`;

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <StyledWrapper>
                <Grid>
                    {children}
                </Grid>
            </StyledWrapper>
        </Fragment>
    </ThemeProvider>
);

export default Layout;