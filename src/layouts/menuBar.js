import React from 'react';
import styled from 'styled-components';
import Container from '../components/hero/container/container';
import Logo from '../components/menu/logo/logo';
import UL from '../components/menu/UL/UL';
import LI from '../components/menu/UL/LI/LI';

const MenuBar = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    align-items: center;

    background: white;
    width: 68.75rem;
    height: 4rem;

`;


const Menu = () => (
    <MenuBar>
            <Logo />
            <UL>
                <LI>Strona główna</LI>
                <LI>Przepisy</LI>
                <LI>Galeria</LI>
                <LI>Kontakt</LI>
            </UL>
    </MenuBar>
)

export default Menu;