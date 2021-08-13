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
        width: 600px;
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
                text-align: left;
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
                    <Zoon><img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/gallery/onix-premier-exterior-2022-1.jpg?imwidth=630' /></Zoon>
                    <Zoon><img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/gallery/onix-premier-exterior-2022-2.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/gallery/onix-premier-exterior-2022-3.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/gallery/onix-premier-interior-01.jpg?imwidth=630' /></Zoon>
                    <Zoon><img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/gallery/interior/onix-premier-interior-03.jpg?imwidth=1800' /></Zoon>
                    <Zoon><img alt='Onix_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/gallery/interior/onix-premier-interior-07.jpg?imwidth=1800' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Cruze = () => {
    return (
        <>
            <Container>
                <img alt='Cruze_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-cinza-satin-steel.jpg?imwidth=900' />
                <h2>Um sedan que vai te surpreender</h2>
                <h3>A PARTIR DE: R$ 124.290*</h3>
                <p>
                    O Cruze chegou com um visual ainda inovador, com rodas aro 17, que contam com acabamento especial,
                    lanternas em LED, grade frontal e parachoque mais esportivos, além de um interior premium em tom escurecido disponível nas cores preto e caramelo.
                    Com um interior com revestimento e acabamento premium em duas cores, preto e caramelo, dirigir o Cruze é uma experiência superior em todos os aspectos:
                    estilo,conforto e sofisticaçao. O Cruze combina um design esportivo com tecnologia avançada. Experimente toda a potência do motor turbo,
                    soluções inteligentes de segurança e a exclusiva tecnologia de Wi-Fi nativo. Tudo isso em um único sedan que vai te surpreender.
                </p>
                <span></span>
                <h2>Exclusiva tecnologia Wi-Fi</h2>
                <p> A vida é online! Por isso, a bordo do Cruze, você estará sempre conectado. Graças ao Wi-Fi nativo*, uma tecnologia pioneira da Chevrolet,
                    você e sua família poderão ter toda a conectividade a bordo, com o seu smartphone, tablet ou notebook.
                </p>
                <div>
                    <img alt='Cruze_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2020-cruze-premier/mov/01-images/conectividade-camera-traseira.png?imwidth=900' />
                    <div>
                        <h2>Nova câmera de visão traseira digital HD </h2>
                        <p>Tenha mais resolução e qualidade de imagem na hora de estacionar, mesmo em ambientes escuros.</p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Cruze_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/mov/03-images/asset-galeria-01.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/mov/03-images/asset-galeria-06.jpg?imwidth=1800' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/mov/03-images/asset-galeria-07.jpg?imwidth=1800' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2020-cruze-premier/mov/09-images/cruze-sedan-design-painel.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2020-cruze-premier/mov/09-images/cruze-sedan-design-volante.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Cruze_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/mov/02-images/asset-galeria-09.jpg?imwidth=630' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Tracker = () => {
    return (
        <>
            <Container>
                <img alt='Tracker_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/mov/13-images/colorizer-tracker-preto-ouro-negro.jpg?imwidth=900' />
                <h2>Restart com o Chevrolet Tracker.</h2>
                <h3>A PARTIR DE: R$ 109.290*</h3>
                <p>
                    Deixe conceitos ultrapassados pra trás. Na hora de escolher o seu SUV, segurança, tecnologia, economia e design são essenciais.
                    O Tracker é um modelo completo e que não para de evoluir, assim como você. Só ele vem com 6 airbags,
                    MyLink de 8” e o motor turbo mais econômico da categoria. Tudo de série. Em todas as versões.
                </p>
                <span></span>
                <h2>Conectividade de verdade, só o Tracker tem</h2>
                <p> O Tracker proporciona uma experiência inovadora ao volante. Abandone de
                    vez os cabos, com a projeção sem fio e o Wi-Fi nativo, você e sua família estão
                    sempre conectados, seja no smartphone, no tablet ou no computador. Afinal, em
                    casa ou durante viagens, estar on-line faz toda a diferença. Além disso, você
                    também conta com MyLink 8” de nova geração, com menu inicial ainda mais moderno
                    e intuitivo. Também pode conectar 2 celulares via Bluetooth, conversar por
                    mensagens e acessar suas playlists usando o comando de voz.
                </p>
                <div>
                    <img alt='Tracker_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/mov/01-images/novo-tracker-praticidade-desktop.jpg?imwidth=1800' />
                    <div>
                        <h2>Veja como é fácil usar:</h2>
                        <p> 1. Crie uma conta ou faça login em Meu  Chevrolet.
                            2. Selecione o seu OnStar e Serviços Conectados.
                            3. Em Meus Serviços OnStar, verifique se o seu plano está ativo com  seus dado para experimentar.
                            4. Ative seu Ponto de Acesso no Wi-Fi e pronto!
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Tracker_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/gallery/05-images/galeria-01.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Tracker_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/gallery/05-images/galeria-02.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Tracker_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/gallery/05-images/galeria-01.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Tracker_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/gallery/01-images/novo-tracker-interna-01.jpg?imwidth=1800' /></Zoon>
                    <Zoon> <img alt='Tracker_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/gallery/05-images/galeria-03.jpg?imwidth=630' /></Zoon>
                    <Zoon> <img alt='Tracker_image' src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/gallery/05-images/novo-tracker-interna-04.jpg?imwidth=1800' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

/*export const Tracker = () => {
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
}*/
