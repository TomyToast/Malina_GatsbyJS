import styled from 'styled-components';
import typography from '../../../../utils/typography';

const Title = styled.div`
    font-size: 7rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-top: 9rem;
    text-shadow: 2px 2px #000;
    
`;

export default Title;