import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
margin: 100px auto;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 1200px;

>img{
    width: 500px;
}

>h2{
    font-size: 2rem;
    margin: 10px 0px;
    color: var(--color-black);
}

>p{
    text-align: left;
    font-size: 1.2rem;
    color: var(--color-gray);
}

>h3, span{
    font-size: 1.5rem;
    margin: 6px 0px;
    color: var(--color-black);
}
`;

const Gallery = styled.section`
width: 1200px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
gap: 8px;
align-items: center;
justify-items: center;
margin-top: 20px;

`

export const Zoon = styled.div`
overflow: hidden;

>img{
   max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover{
        -moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
transform: scale(1.2);
    }
}
`
export const S100RR = () => {
    return (
        <>
            <Container>
                <img alt='S1000RR_image' src='https://media.motociclismoonline.com.br/uploads/2021/07/2022-BMW-S1000RR-black-2-motociclismoonline.jpg' />
                <h2>BMW S 1000 RR</h2>
                <h3>ÍCONE ENTRE AS SUPERESPORTIVAS.</h3>
                <p> A S 1000 RR provocou uma revolução na categoria das superesportivas no seu lançamento em 2009. Desde então,
                    a moto continua em evolução, lapidando ainda mais seu projeto testado e aprovado por pilotos do mundo todo.
                    Com 207 cv e torque de 113 Nm à 11.000rpm, a S 1000 RR continua arrasadora e traz o que há de mais moderno
                    em termos de tecnologia embarcada. O resultado é uma moto com menos peso e uma melhoria evidente no desempenho.
                    Eleita a Moto do Ano pela premiação de mesmo nome organizada pela Revista Duas Rodas.
                </p>
                <h2>Concebida para a pole position.</h2>
                <p> Cada peça da RR foi concebida para extrair o melhor desempenho. Vejamos, por exemplo, a configuração da ciclística
                    com uma nova tecnologia de suspensão que torna a RR mais leve e ainda mais precisa. Além disso, temos uma posição
                    de condução com uma ergonomia perfeita, devido ao quadro modificado e ao design das carenagens. Os faróis LED de série
                    conferem à motocicleta uma imagem dinâmica e agressiva. Os piscas dianteiros foram deslocados das carenagens para os
                    espelhos retrovisores, resultando em uma nova estética, além de gerar melhor visibilidade. Vista desde a traseira,
                    a RR domina em termos de design e funcionalidade.
                </p>
                <Gallery>
                    <Zoon><img alt='S1000RR_image' src='https://media.motociclismoonline.com.br/uploads/2021/07/2022-BMW-S1000RR-black-5-motociclismoonline.jpg' /></Zoon>
                    <Zoon><img alt='S1000RR_image' src='https://media.motociclismoonline.com.br/uploads/2021/07/2022-BMW-S1000RR-black-4-motociclismoonline.jpg' /></Zoon>
                    <Zoon> <img alt='S1000RR_image' src='https://media.motociclismoonline.com.br/uploads/2021/07/2022-BMW-S1000RR-black-3-motociclismoonline.jpg' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}
