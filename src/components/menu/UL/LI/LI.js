import styled from 'styled-components';

const LI = styled.ul`
align-self: center;

    &:hover {
        color: ${({ theme }) => theme.colors.raspberry};
        cursor: pointer;
    }
`;

export default LI;