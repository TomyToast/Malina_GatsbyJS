import React from 'react';
import Container from '../components/hero/container/container';
import Col from '../components/Col/Col';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';


const Recipes = () => (
    <Container>
        <Col foto={ img1 } round/>
        <Col foto={ img2 } round/>
        <Col foto={ img3 } round/>
    </Container>
)

export default Recipes;