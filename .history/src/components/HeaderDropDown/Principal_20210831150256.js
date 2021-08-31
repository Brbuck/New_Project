import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 100px auto;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: red;
    text-align: center;

`

function Principal() {
    return (
        <Container>
            <Title>Sejam bem vindos</Title>
        </Container>
    )
}

export default Principal;