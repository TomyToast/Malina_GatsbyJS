import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from '../components/hero/container/container';
import FooterLogo from '../components/menu/logo/logo';

const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items; center;

    width: 100%;
    height: 29rem;

    background: ${({ theme }) => theme.colors.dark};
`;

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FooterUL = styled.ul`
    width: 25rem;

    list-style-type: none;
    columns: 2;
    margin-left: -40px;
`;

const liElements = ['Strona domowa', 'Nasze przepisy', 'Galeria', 'Kontakt', 'Blog', 'Aktualności', 'Polityka cookies']

const LI = styled.li`
    display: flex;

    font-size: 1.15rem;
    font-weight: 300;
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 15px;
    text-decoration: none;
`;

const RightDiv = styled.div`
    align-self: flex-start;

    font-size: 1.15rem;
    font-weight: 300;
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 15px;
`;

const Footer = () => (
    <FooterWrapper>
        <Container column min left>
            <FooterLogo footer />
            <FooterContainer>
                <FooterUL>
                    { liElements.map( (element) => <LI as={Link} to='#'>{element}</LI> ) }
                </FooterUL>
                <RightDiv>
                    Copyright &copy 2018 Malina Restaurant
                </RightDiv>
            </FooterContainer>
        </Container>
    </FooterWrapper>
);

export default Footer;