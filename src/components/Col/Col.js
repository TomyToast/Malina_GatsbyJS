import React from 'react';
import styled from 'styled-components';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel faucibus ligula. Pellentesque semper libero sit amet erat aliquet ultricies. Pellentesque accumsan erat et neque dapibus, eu pharetra dui tempus. Curabitur rhoncus turpis a tellus semper venenatis vitae a dui.';

const RecipesColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 33.333333%;
    height: 100%;
    margin: 10px;
`;

const RecipeFoto = styled.img`
    width: 230px;
    height: 230px;
    background: grey;
    border-radius: ${({ round }) => round ? '50%' : '0'};
    overflow: hidden;
`;

const RecipeTitle = styled.h2`
    font-family: Arial, sans-serif;
`;

const RecipeInfo = styled.p`
    font-size: 1rem;
    font-family: serif;
    color: grey;
    text-align: center;
`;

const RecipeBtn = styled.button`
    width: 170px;
    height: 40px;
    border-radius: 5px;
    margin-top: 20px;
    background: ${({ theme }) => theme.colors.raspberry};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    font-weight: 700;

    &:hover{
        filter: brightness(90%);
    }
    &:active{
        box-shadow: inset 0 0 10px #000000;
    }
`;

const Col = (props) => (
    <RecipesColumn>
        <RecipeFoto src={props.foto} round={props.round}/>
        <RecipeTitle>Lorem ipsum sit...</RecipeTitle>
        <RecipeInfo>{ lorem }</RecipeInfo>
        <RecipeBtn>Zobacz więcej</RecipeBtn>
    </RecipesColumn>
);

export default Col;