import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './Schema'

import { Button, Container, Form, Error, Input, Label, Section, Title } from './styles';

function Former() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const newUser = (user) => console.log(user);
    return (
        <Section>
            <Form onSubmit={handleSubmit(newUser)}>
                <Title>Formulário de Cadastro</Title>
                <Container>
                    <Label>Nome</Label>
                    <Input type='text' {...register("name")} />
                    <Error>{errors.name?.message}</Error>
                </Container>
                <Container>
                    <Label>Sobrenome</Label>
                    <Input type='text' {...register("lastname")} />
                    <Error>{errors.lastname?.message}</Error>
                </Container>
                <Container>
                    <Label>E-mail</Label>
                    <Input type='email' {...register("email")} />
                    <Error>{errors.email?.message}</Error>
                </Container>
                <Container>
                    <Label>Senha</Label>
                    <Input type='password' {...register("password")} />
                    <Error>{errors.password?.message}</Error>
                </Container>
                <Container>
                    <Label>Confirmar Senha</Label>
                    <Input type='password' {...register("confirmPassword")} />
                    <Error>{errors.confirmPassword?.message}</Error>
                </Container>
                <Button type='submit'>Enviar</Button>
            </Form>
        </Section>
    );
}

export default Former;