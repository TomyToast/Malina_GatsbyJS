import styled from 'styled-components';
import logo from '../../../images/logo.png';
import FooterLogo from '../../../images/footer-logo.png';

const Logo = styled.div`
    min-height: 64px;
    min-width: 200px;

    background: transparent;
    background-image: ${ ({ footer }) => footer ? `url(${FooterLogo})` : `url(${logo})`} ;
    background-repeat: no-repeat;
    background-size: 150px 70px cover;
`;

export default Logo;