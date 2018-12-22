import styled from 'styled-components';

const Menu = styled.div`
    grid-column: 1 / 12;
    grid-row: 1 / 5;

    display: grid;
    grid-template-columns: 1 1fr;
    grid-gap: 0.8rem;

    background: ${(theme) => theme.theme.colors.white};
    width: 100%;
    height: 3rem;
    border: 1px solid red;
`;

export default Menu;