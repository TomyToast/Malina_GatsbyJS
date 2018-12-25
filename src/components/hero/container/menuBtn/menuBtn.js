import styled from 'styled-components';

const MenuBtn = styled.button`
display: flex;
justify-content: center;
align-item: center;

width: 220px;
height: 80px;

background: ${({ theme }) => theme.colors.whiteLight};;
color: ${({ theme }) => theme.colors.white};
border: 2px solid ${({ theme }) => theme.colors.white};
border-radius: 10px;
text-transform: uppercase;
cursor:pointer;

&:hover {
    border: 5px solid ${({ theme }) => theme.colors.white};
    font-weight: 900;
}

$:active {
    box-shadow: inset 0 15px 30px ${({ theme }) => theme.colors.dark};
}
`;

export default MenuBtn;