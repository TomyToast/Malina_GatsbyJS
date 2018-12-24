import styled from 'styled-components';
import logo from '../../../images/logo.png';

const Logo = styled.div`
    min-height: 64px;
    min-width: 200px;

    background: transparent;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 150px 70px cover;
    border: 1px solid red;
`;

export default Logo;