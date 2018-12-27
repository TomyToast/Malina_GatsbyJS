import React from 'react';
import Container from '../components/hero/container/container';
import Col from '../components/Col/Col';
import img1 from '../images/img-m-1.jpg';
import img2 from '../images/img-m-2.jpg';
import img3 from '../images/img-m-3.jpg';
import img4 from '../images/img-m-4.jpg';


const Gallery = () => (
    <Container>
        <Col foto={ img1 }/>
        <Col foto={ img2 }/>
        <Col foto={ img3 }/>
        <Col foto={ img4 }/>
    </Container>
)

export default Gallery;