import styled from 'styled-components';

const Container = styled.div`
    width: 68.75rem;
    height: 52.5rem;

    display: flex;
    flex-direction: ${({column}) => column ? 'column' : 'row'};
    justify-content: center;
    align-items: center;

    position: relative;
`;

export default Container;