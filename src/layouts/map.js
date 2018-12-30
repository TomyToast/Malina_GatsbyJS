import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
    width: 100%;
    height: 29rem;
    frameborder: 0;
    allowfullscreen: true;

`;

const Maps = () => (
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.706619086264!2d20.985091615796655!3d52.23054777976047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc9ad1f3573f%3A0x89a2beb9d3b7e1bd!2sProsta+51%2C+00-838+Warszawa!5e0!3m2!1spl!2spl!4v1546196651786" />
)

export default Maps;