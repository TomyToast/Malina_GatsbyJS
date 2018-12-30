import React from 'react';
import styled from 'styled-components';
import Container from '../components/hero/container/container';
import paralax from '../images/paralax-bg.jpg';

const ParalaxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 29rem;

    background-image: url(${ paralax });
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;

    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.dark};
        opacity: 0.5;
    }
`;

const ParalaxTitle = styled.div`
    color: ${({theme}) => theme.colors.white};
    font-size: 5rem;
    font-family: serif;
    font-weigth: 700;

`;

const ParalaxDescribe = styled.div`
    font-size: 1.75rem;
    font-weight: 400;
    color: white;
    text-align: center;
    margin-top: 10px;
`;

const Paralax = () => (
    <ParalaxWrapper>
        <Container column min>
            <ParalaxTitle>Lorem ipsum dolot</ParalaxTitle>
            <ParalaxDescribe> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel faucibus ligula. Pellentesque semper libero sit amet erat aliquet ultricies. </ParalaxDescribe>
        </Container>
    </ParalaxWrapper>
);


export default Paralax;