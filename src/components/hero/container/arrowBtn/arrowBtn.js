import styled from 'styled-components';
import arrow from '../../../../images/arrow.svg';
import backgroundArrow from '../../../../images/header-addon.svg';

const ArrowBtn = styled.div`
    width: 200px;
    height: 50px;

    background-image: url(${ backgroundArrow });
    background-position: center;
    background-size: 100%;

    position: absolute;
    bottom: 0;
    left: 50%;
    margin: 0 0 0 -100px;

    &::before {
        content: "";
        display: inline-block;
        width: 200px;
        height: 30px;
        margin-top: 5px;

        background-image: url(${ arrow });
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;;
    }
    &:hover:before {
        cursor: pointer;

        background-image: url(${ arrow });
        background-repeat: no-repeat;
        background-size: 15%;
        background-position: center;;
    }

`;

export default ArrowBtn;