import React from 'react';
import { Link } from 'react-router-dom';

import {Button, Container, Div, Form, Label, Input, Register, Title} from './styles'

function Login() {
    return (
        <Div>
            <Form>
                <Title>Faça seu Login</Title>
                <Container>
                    <Label>Login</Label>
                    <Input type='text' />
                </Container>
                <Container>
                    <Label>Senha</Label>
                    <Input type='password' />
                </Container>
                <Button>Login</Button>
                <Register>Not Registered? <Link to='/cadastro'>Create an account</Link></Register>
            </Form>
        </Div>
    );
}

export default Login;
