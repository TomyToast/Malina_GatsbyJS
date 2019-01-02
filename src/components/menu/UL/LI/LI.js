import styled from 'styled-components';

const LI = styled.ul`
    display: flex;

    &:hover {
        color: ${({ theme }) => theme.colors.raspberry};
        cursor: pointer;
    }
`;

export default LI;