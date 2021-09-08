import React from 'react';
import styled from 'styled-components';
import { Data } from './Data';

const Container = styled.div`
    margin: 80px auto 0px;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme.colors.text};
    text-align: center;

    @media screen and (max-width: 960px){
        font-size: 2.3rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.9rem;
    }

    @media screen and (max-width: 560px){
        font-size: 1.5rem;
    }

    @media screen and (max-width: 420px){
        font-size: 1.2rem;
    }
`
const Sub = styled.p`
    font-size: 1.4rem;
    margin: 15px 0;
    text-align: center;
    color: ${props => props.theme.colors.text};

    @media screen and (max-width: 960px){
        font-size: 1.3rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.2rem;
    }

    @media screen and (max-width: 560px){
        font-size: 1.1rem;
    }

    @media screen and (max-width: 420px){
        font-size: 0.900rem;
    }
`
const Section = styled.section`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    justify-items: center;
    gap: 15px;

   
   
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 200px;
    //box-shadow: 0.4px 0.4px 0.8px 0.8px rgba(0,0,0, .6);

    >img{
        width: 130px;

        @media screen and (max-width: 560px){
            width: 100px;
        }
    }

    >span{
        margin-top: 5px;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.text};
    }
`

function Principal() {
    return (
        <Container>
            <Title>Sejam bem vindos ao maior site de automotores</Title>
            <Sub>Aqui você encontra todas as notícias e novidades sobre carros, motos e outros</Sub>
            <Section>
                {
                    Data.map((item, key) => {
                        return (
                            <Card key={key}>
                                <img src={item.image} alt=''></img>
                                <span>{item.name}</span>
                            </Card>
                        )
                    })
                }
            </Section>
        </Container>
    )
}

export default Principal;