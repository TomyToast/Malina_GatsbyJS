import React, { Component } from 'react';
import styled from 'styled-components';
import Container from '../components/hero/container/container';

const NewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 29rem;

    background: ${({ theme }) => theme.colors.raspberry};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;

    position: relative;
`;

const H2 = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    font-family: sans-serif;
    font-weight: 100;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-item: center;

    margin: 10px;
`;

const Input = styled.input`
    width: 21.875rem;
    height: 4.0625rem;
    color: ${({ theme }) => theme.colors.gray};
    padding: 10px;
    text-align: left;
    font-size: 1.25rem;
    margin: 10px;

    &:last-child{
        background: transparent;
        border: 2px solid ${({ theme }) => theme.colors.white};
        border-radius: 10px;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;

        &:hover {
            border: 4px solid ${({ theme }) => theme.colors.white};
            font-weight: 700;
        }
    }
`;


class NewsForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    };

    Success = (e) => {
        e.preventDefault();
        if(this.state.name !== ''  && this.state.email !== ''){
            alert("Brawo!! /n Zostałeś poprawnie dodany")
        }
    };

    CheckName = (e) =>{
        this.setState({
            name: e.target.value
        })
    };

    CheckEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    render() {
        return (
        <Form >
            <Input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Imię i nazwisko"
                onChange={this.CheckName}
            />
            <Input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.CheckEmail}
            />
            <Input
                className="submit"
                type="submit"
                value="Submit"
                onChange={this.Success}
            />
        </Form>
        )
    }
};

const Newsletter = () => (
    <NewsWrapper>
        <Container column>
            <H2>Zapisz się do naszego newslettera</H2>
            <NewsForm />
        </Container>
    </NewsWrapper>
)

export default Newsletter;