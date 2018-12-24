import React from 'react';
import styled from 'styled-components';
import hero from '../images/main-header-bg.jpg';

const HeroDiv = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;

    width: 100rem;
    height: 52.5rem;

    background-image: url(${ hero });
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

const Container = styled.div`
    width: 68.75rem;
    height: 52.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 98px;
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-top: 9rem;
`;

const Info = styled.div`
    padding: 5rem;
    font-size: 1.5rem;
    font-family: serif;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

const MenuBtn = styled.button`
    display: flex;
    justify-content: center;
    align-item: center;

    width: 220px;
    height: 80px;

    background: ${({ theme }) => theme.colors.whiteLight};;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    text-transform: uppercase;
    cursor:pointer;

    &:hover {
        border: 5px solid ${({ theme }) => theme.colors.white};
        font-weight: 900;
    }

    $:active {
        box-shadow: inset 0 15px 30px ${({ theme }) => theme.colors.dark};
    }
`;

const Hero = () => (
    <HeroDiv>
        <Container>
            <Title> Restauracja Malina </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula mauris in libero blandit varius. Aenean tempor condimentum dapibus. Praesent in eros facilisis, egestas urna vitae, cursus eros. Morbi sodales leo vel massa dapibus, ut sollicitudin augue dictum.
            </Info>
            <MenuBtn>Zobacz Nasze Menu</MenuBtn>
        </Container>
    </HeroDiv>
)

export default Hero;