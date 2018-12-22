import styled from 'styled-components';
import logo from '../../../images/logo.png';

const Logo = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 0.125rem;
    background: ${(theme) => theme.theme.colors.lightdark};
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: auto;
    border: 1px solid red;
`;

export default Logo;