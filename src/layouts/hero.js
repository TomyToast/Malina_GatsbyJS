import React from 'react';
import HeroDiv from '../components/hero/heroDiv';
import Container from '../components/hero/container/container';
import Title from '../components/hero/container/Title/title';
import Info from '../components/hero/container/Info/info';
import MenuBtn from '../components/hero/container/menuBtn/menuBtn';
import ArrowBtn from '../components/hero/container/arrowBtn/arrowBtn';

const Hero = () => (
    <HeroDiv>
        <Container column>
            <Title> Restauracja Malina </Title>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula mauris in libero blandit varius. Aenean tempor condimentum dapibus. Praesent in eros facilisis, egestas urna vitae, cursus eros. Morbi sodales leo vel massa dapibus, ut sollicitudin augue dictum.
            </Info>
            <MenuBtn>Zobacz Nasze Menu</MenuBtn>
            <ArrowBtn />
        </Container>
    </HeroDiv>
)

export default Hero;