import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 1200px;

    >img{
        width: 600px;
    }

    >h2{
        font-size: 2.2rem;
        margin: 10px 0px;
        color: var(--color-black);
    }

    >p{
        font-size: 1.2rem;
        color: var(--color-gray);
    }
    
    >h3, span{
        font-size: 1.5rem;
        margin: 6px 0px;
        color: var(--color-black);
    }

    >div{
        display: flex;
        align-items: center;
        margin: 20px 0px;

        >img{
            width: 700px;
        }

       >div{
           padding: 10px 30px;
            >h2{
            font-size: 2rem;
            margin: 10px 0px;
            color: var(--color-black);
            }

            >p{
            font-size: 1.2rem;
            color: var(--color-gray);
            }
       }
    }
  
`;

const Gallery = styled.section`
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
    gap: 8px;
    align-items: center;
    justify-items: center;
    
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


export default function Carros() {
    return (
        <Container />
    );
}

export const Onix = () => {
    return (
        <>
            <Container>
                <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/colorizer/1-onix-premier-branco-summit.jpg?imwidth=900' />
                <h2>Conecte-se ao Onix, o seu próximo hatch</h2>
                <h3>A PARTIR DE: R$ 74.550</h3>
                <p>
                    Você vai ter todos os motivos para querer o Onix na sua garagem.
                    Além da exclusiva tecnologia com Wi-Fi nativo, MyLink de 8” e Easy Park,
                    o Onix também conta com as novidades carregador e projeção sem fio,
                    que vai permitir que você abandone os cabos na hora de conectar o seu smartphone ao MyLink do carro.
                </p>
                <span>CONECTIVIDADE</span>
                <h2>Atualize suas definições de liberdade: Projeção sem Fio, Wi-Fi e muito mais.</h2>
                <p> Além da exclusiva tecnologia Wi-Fi e carregador sem fio, para deixar as suas viagens mais conectadas e divertidas,
                    o Onix conta com Projeção sem Fio que permite abandonar os cabos na hora de conectar seu smartphone ao MyLink do carro
                    e sistema over the air para você atualizar o seu veículo online, sem a necessidade de ir até uma concessionária.
                </p>
                <div>
                    <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/mov/08-images/hotspots-onix-premier-desktop.jpg?imwidth=1800' />
                    <div>
                        <h2>Design sem abrir mão da conveniência</h2>
                        <p>Mais do que um interior sofisticado em preto e caramelo ou preto e cinza, no Onix,
                            a conveniência é para todos: volante com revestimento premium,
                            banco traseiro bipartido e entrada USB dupla para os passageiros dos bancos de trás.
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/gallery/onix-premier-exterior-2022-1.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/gallery/onix-premier-exterior-2022-2.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/gallery/onix-premier-exterior-2022-3.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/gallery/onix-premier-interior-01.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/gallery/interior/onix-premier-interior-03.jpg?imwidth=1800' /></Zoon>
                    <Zoon> <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/gallery/interior/onix-premier-interior-07.jpg?imwidth=1800' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Cruze = () => {
    return (
        <>
            <Container>
            <img alt='Cruze_image' src='' />
                <h2></h2>
                <h3></h3>
                <p>
                   
                </p>
                <span></span>
                <h2></h2>
                <p> 
                </p>
                <div>
                    <img alt='Cruze_image' src='' />
                    <div>
                        <h2></h2>
                        <p>
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Tracker = () => {
    return (
        <>
            <Container>
            <img alt='Cruze_image' src='' />
                <h2></h2>
                <h3></h3>
                <p>
                   
                </p>
                <span></span>
                <h2></h2>
                <p> 
                </p>
                <div>
                    <img alt='Cruze_image' src='' />
                    <div>
                        <h2></h2>
                        <p>
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}
