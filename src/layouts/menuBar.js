import React from 'react';
import styled from 'styled-components';
import Logo from '../components/menu/logo/logo';
import UL from '../components/menu/UL/UL';
import LI from '../components/menu/UL/LI/LI';

const MenuBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: white;
    width: 68.75rem;
    height: 4rem;
    border: 1px solid red;

    position: relative;
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