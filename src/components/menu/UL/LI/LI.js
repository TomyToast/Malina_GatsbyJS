import styled from 'styled-components';

const LI = styled.ul`
display: inline-block;
font-size: 0.5 rem;
font-family: serif;

    &:hover {
        color: ${({ theme }) => theme.colors.raspberry};
        cursor: pointer;
    }
`;

export default LI;