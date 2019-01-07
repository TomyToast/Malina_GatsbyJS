import styled from 'styled-components';
import heroImg from '../../images/main-header-bg.jpg';

const HeroDiv = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;

    width: 100vw;
    height: 100vh;

    background-image: url(${ heroImg });
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

export default HeroDiv;