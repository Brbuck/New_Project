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

export const Civic = () => {
    return (
        <>
            <Container>
                <img alt='Civic_image' src='https://www.honda.com.br/automoveis/sites/hab/files/2020-10/0_frontal_a_0.png' />
                <h2>Civic 2021 - Evoluir Sempre </h2>
                <h3>A partir de R$ 119.800,00*</h3>
                <p>

                </p>
                <span></span>
                <h2>Nunca foi um sedã comum.Agora está ainda melhor.</h2>
                <p> Com mais de 50 prêmios em 20 anos de história, o Honda Civic 2021 é completo de série.
                    Evoluindo sempre, ele oferece design exclusivo, sofisticação em acabamento e esportividade,
                    máximo conforto, ótima dirigibilidade e desempenho incomparável.
                </p>
                <div>
                    <img alt='Civic_image' src='https://www.honda.com.br/automoveis/civic-catalogo-digital/img/tecnologia/applecarplay.jpg' />
                    <div>
                        <h2>Completo em todos os sentidos</h2>
                        <p> Desde a versão de entrada, o Honda Civic 2021 já conta com a Central Multimídia 7",
                            além de conexões USB e Bluetooth a um comando de distância e câmera de ré multivisão, que descomplica qualquer manobra.
                            Desde a versão de entrada, o Honda Civic 2021 já conta com a Central Multimídia 7",
                            além de conexões USB e Bluetooth a um comando de distância e câmera de ré multivisão, que descomplica qualquer manobra.
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Civic_image' src='https://www.honda.com.br/automoveis/civic-catalogo-digital/img/design/farois.jpg?v=3' /></Zoon>
                    <Zoon> <img alt='Civic_image' src='https://www.honda.com.br/automoveis/civic-catalogo-digital/img/design/traseira_led.jpg' /></Zoon>
                    <Zoon> <img alt='Civic_image' src='https://www.honda.com.br/automoveis/civic-catalogo-digital/img/tecnologia/sensordere.jpg' /></Zoon>
                    <Zoon> <img alt='Civic_image' src='https://www.honda.com.br/automoveis/civic-catalogo-digital/img/conforto/ar.jpg' /></Zoon>
                    <Zoon> <img alt='Civic_image' src='https://www.honda.com.br/automoveis/civic-catalogo-digital/img/performance/re.jpg' /></Zoon>
                    <Zoon> <img alt='Civic_image' src='https://www.honda.com.br/automoveis/civic-catalogo-digital/img/conforto/bancoajuste.jpg' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const City = () => {
    return (
        <>
            <Container>
                <img alt='City_image' src='https://www.honda.com.br/automoveis/city-catalogo-digital/img/cores/galeria/cin1.jpg' />
                <h2>Honda City 2021 - Une tudo o que você gosta</h2>
                <h3> A partir de R$ 78.100,00*</h3>
                <p> O  Design e as linhas marcantes do City 2021 agregam um toque de modernidade e sofisticação.
                    O modelo conta com faróis Full LED com DRL (Daytime Runnig Light) integrado e lanternas traseiras em LED,
                    que reforçam o estilo diferenciado do modelo e melhoram a visibilidade em qualquer ambiente.
                </p>
                <span>Conforto e Tecnologia</span>
                <h2>Máximo de conforto em todas as situações.</h2>
                <p> O Honda City 2021 é ideal para acompanhar seu dia a dia na cidade e perfeito para suas viagens de fins de semana.
                    Com um porta-malas de 536L1, garante o máximo de conforto em todas as situações.
                    O design do Honda City 2021 une a modernidade de suas linhas marcantes ao acabamento interno sofisticado que agrada até os mais exigentes,
                    e um mundo de tecnologias para você querer sempre estar a bordo do Honda City e aproveitar o verdadeiro prazer de dirigir
                </p>
                <div>
                    <img alt='City_image' src='https://www.honda.com.br/automoveis/sites/hab/files/styles/gallery_full_image_style/public/2020-11/EX_EXL_Multim%C2%A1dia%20Apple%20Car%20Play_0.jpg?itok=XhYkyN5Y' />
                    <div>
                        <h2 >Multimídia de 7" multi-touchscreen com interface para smartphones</h2>
                        <p>Seja para compromissos de trabalho ou lazer, o Honda City 2021 está preparado para acompanhar o seu ritmo com total desempenho e eficiência.</p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='City_image' src='https://www.honda.com.br/automoveis/sites/hab/files/styles/gallery_full_image_style/public/2018-02/Esportividade_e_sofisticacao_a_primeira_vista.jpg?itok=zMa7Y3Bh' /></Zoon>
                    <Zoon> <img alt='City_image' src='https://www.honda.com.br/automoveis/sites/hab/files/styles/gallery_full_image_style/public/2018-02/Design_moderno_para_atrair_olhares_por_onde_passa.jpg?itok=p4H8YUfC' /></Zoon>
                    <Zoon> <img alt='City_image' src='https://www.honda.com.br/automoveis/sites/hab/files/styles/gallery_full_image_style/public/2018-02/Design_arrojado_com_linhas_aerodinamicas.jpg?itok=awTf0hGk' /></Zoon>
                    <Zoon> <img alt='City_image' src='https://www.honda.com.br/automoveis/sites/hab/files/styles/gallery_full_image_style/public/2018-03/Volante_multifuncional_com_acabamento_em_couro.jpg?itok=quGBUgM6' /></Zoon>
                    <Zoon> <img alt='City_image' src='https://www.honda.com.br/automoveis/sites/hab/files/styles/gallery_full_image_style/public/2018-02/Ar_condicionado_digital_full_touchscreen.jpg?itok=pQ2cDiPv' /></Zoon>
                    <Zoon> <img alt='City_image' src='https://www.honda.com.br/automoveis/sites/hab/files/styles/gallery_full_image_style/public/2018-02/Apoio_de_braco_com_revestimento_em_couro.jpg?itok=uwnmidRM' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}


export const Compass = () => {
    return (
        <>
            <Container>
                <img alt='Compass_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/05/SE%CC%81RIE-S-T270-TURBO-FLEX.png' />
                <h2>NOVO JEEP COMPASS 2022</h2>
                <h3>O SUV MAIS TECNOLÓGICO FEITO NO BRASIL</h3>
                <p> PAINEL FULL DIGITAL, Novo quadro de instrumentos totalmente digital, com tela HD de 10,25” polegadas, oferece ótima imagem 3D do Compass
                    e dá possibilidades de personalização.CÂMBIO AUTOMÁTICO 6 OU 9 MARCHAS, Cada motor do Compass tem a sua configuração de câmbio. Modelos T270 Turbo Flex são equipados
                    com câmbio automático de 6 marchas e Jeep Traction Control+.Já as versões TD350 Turbo Diesel contam com o câmbio automático de 9 marchas e tração 4x4.
                    Central de nova geração, com tela de 8,4 ou 10,1 polegadas, espelhamento sem fio com Android Auto e Apple CarPlay e os novos pacotes para navegação embarcada e para
                    serviços conectados Jeep para a plataforma Adventure Intelligence.
                </p>
                <span>A BELEZA DE UM AUTÊNTICO JEEP.</span>
                <h2>NOVO DESIGN, NOVAS CORES E O NOSSO ESTILO DE SEMPRE.</h2>
                <p> NOVO MOTOR T270 TURBO FLEX, Simplesmente o melhor motor TurboFlex produzido no Brasil. Com 185cv de potência e 27,5 kgfm de torque,
                    é o máximo de performance e economia de combustível. NOVO MOTOR TD350 TURBO DIESEL Toda a força do Turbo Diesel agora aliada à tecnologia do ARLA32,
                    resultando em menor emissão de poluentes sem perder na performance: são 170cv e 35,7kgfm de torque. BORBOLETA NO VOLANTE, Além das novidades em design,
                    o volante oferece também a opção de trocar marchas no câmbio sequencial em alavanca estilo borboleta. Para trazer ainda mais estilo e bem-estar à direção.
                </p>
                <div>
                    <img alt='Compass_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/05/cambio-9marchas.jpg' />
                    <div>
                        <h2>CÂMBIO AUTOMÁTICO 6 OU 9 MARCHAS</h2>
                        <p> Cada motor do Compass tem a sua configuração de câmbio. Modelos T270 Turbo Flex são equipados com câmbio
                            automático de 6 marchas e Jeep Traction Control+.Já as versões TD350 Turbo Diesel contam com o câmbio automático de 9 marchas e tração 4x4.
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Compass_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/05/compass-05.jpg' /></Zoon>
                    <Zoon> <img alt='Compass_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/05/compass-06.jpg' /></Zoon>
                    <Zoon> <img alt='Compass_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/05/compass-04.jpg' /></Zoon>
                    <Zoon> <img alt='Compass_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/05/compass-01.jpg' /></Zoon>
                    <Zoon> <img alt='Compass_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/05/compass-02.jpg' /></Zoon>
                    <Zoon> <img alt='Compass_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/05/compass-03.jpg' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Renegade = () => {
    return (
        <>
            <Container>
                <img alt='Renegade_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/02/Renegade-STD.png' />
                <h2>JEEP RENEGADE 2021</h2>
                <h3>Combinando estilo icônico da marca e tecnologia atual, o Jeep Renegade é o SUV ideal para você.</h3>
                <p> As versões Renegade Sport 1.8 Flex seguem com o Uconnect com tela de cinco polegadas, com câmera de ré integrada.
                    Outra novidade é a entrada USB, antes no porta-objetos central, agora voltada para os passageiros traseiros, além de novos comandos do ar-condicionado,
                    nova posição do botão giratório Select-Terrain (agora mais alto) nas versões Diesel e novos porta-objetos.
                </p>
                <div>
                    <img alt='Renegade_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/02/central-multimidia@2x.gif' />
                    <div>
                        <h2>CENTRAL MULTÍMIDIA DE 8.4"</h2>
                        <p> A Central Multimídia possui conexão Apple CarPlay e Android Auto, além de comandos de voz para você não
                            tirar o olho da pista e a mão do volante. *A disponibilidade de itens de série, opcionais e acessórios pode variar de acordo com a versão escolhida.
                            Imagens meramente ilustrativas.
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Renegade_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/02/exterior-1@2x.jpg' /></Zoon>
                    <Zoon> <img alt='Renegade_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/02/exterior-3@2x.jpg' /></Zoon>
                    <Zoon> <img alt='Renegade_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/02/interior-4@2x.jpg' /></Zoon>
                    <Zoon> <img alt='Renegade_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/02/interior-3@2x.jpg' /></Zoon>
                    <Zoon> <img alt='Renegade_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/02/interior-6@2x.jpg' /></Zoon>
                    <Zoon> <img alt='Renegade_image' src='https://jeepbicudo.com.br/wp-content/uploads/2021/02/interior-1@2x.jpg' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Corolla = () => {
    return (
        <>
            <Container>
                <img alt='Corolla_image' src='https://www.toyota.com.br/wp-content/themes/toyota/ciclo-toyota/carros/corolla_gli_040_carPage.png' />
                <h2>Toyota Corolla 2021</h2>
                <h3>INCOMPARÁVEL, O carro mais vendido do mundo em sua melhor versão</h3>
                <p>Por dentro e por fora, o conjunto perfeito do novo design, melhor desempenho, segurança, conforto e tecnologia híbrida proporcionam a você uma experiência única.
                    O novo Corolla oferece uma ótima dirigibilidade, respondendo com precisão aos seus comandos. Mais segurança e prazer em dirigir.
                    A Toyota não é a maior montadora do mundo por acaso. As pesquisas mostram que nossos clientes são os mais satisfeitos e você também pode ser um.
                </p>
                <h2>Segurança</h2>
                <p>
                    O novo Corolla é o Sedã Médio mais seguro da América Latina e já produzido pela Toyota do Brasil.
                    Ele obteve nota máxima em segurança no Latin NCAP 20196, sendo 5 estrelas para passageiros adultos e 5 estrelas para passageiros infantis,
                    além da certificação especial Advanced Award – em que foi duplamente premiado pelo TSS™⁴ (Toyota Safety Sense) junto com a plataforma global TNGA
                    e a proteção de pedestres em caso de colisões. O pacote de segurança Toyota TSS™⁴ traz o assistente de pré-colisão3, o controle adaptativo de velocidade cruzeiro3,
                    o sistema de alerta de mudança de faixa3 e o farol alto automático, que proporcionam tranquilidade a todos a bordo. Saiba mais sobre o Toyota Safety Sense aqui.
                </p>
                <div>
                    <img alt='Corolla_image' src='https://jorgemoraes.com/wp-content/uploads/2019/09/Novo-Corolla-2020-1.jpg' />
                    <div>
                        <h2>Sistema de Alerta de Mudança de Faixa com condução assistida (LDA)</h2>
                        <p> (Lane Departure Alert System – LDA) é projetado para detectar desvios de pista quando as linhas divisórias são visíveis.
                            Ao ouvir e ver os alertas, e depois de verificar que é seguro fazê-lo, o veículo deve ser redirecionado para o centro da pista.
                            Este sistema também inclui a funcionalidade de condução assistida. Quando é ativado e se detecta que está se desviando inadvertidamente,
                            o sistema pode aplicar pequenos movimentos de correção no volante para ajudar a manter o veículo na pista.
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Corolla_image' src='https://storage.performay.com.br/models/gallery/uivyrjqUjg3iCu9Ma2677YN4dzDxp9VneOTfJsBT.jpeg' /></Zoon>
                    <Zoon> <img alt='Corolla_image' src='https://storage.performay.com.br/models/gallery/TPrHfiKnMNPyEMlRXbi64nXEo22EjvvIWemB8WdN.jpeg' /></Zoon>
                    <Zoon> <img alt='Corolla_image' src='https://storage.performay.com.br/models/gallery/BeyjDHebmzmgeFfvk4XyXiZP0bFR40jr4rbdLqA7.jpeg' /></Zoon>
                    <Zoon> <img alt='Corolla_image' src='https://storage.performay.com.br/models/gallery/W1kU40J2CaI1XXKy8zYsvvXhTOw5bbvGZuVM2jVO.jpeg' /></Zoon>
                    <Zoon> <img alt='Corolla_image' src='https://storage.performay.com.br/models/gallery/HGfjJQWwsy2pwFYuJuz9udwci7GKyd5rWdHnNZmQ.jpeg' /></Zoon>
                    <Zoon> <img alt='Corolla_image' src='https://storage.performay.com.br/models/gallery/SD3Vhicanu8Gnarc7iUPeeSTWDXbV5MHIfU59nnk.jpeg' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Hilux = () => {
    return (
        <>
            <Container>
                <img alt='Hilux_image' src='https://www.toyota.com.br/wp-content/themes/toyota/ciclo-toyota/carros/hilux-cabine-dupla_SRV_040_carPage.png' />
                <h2>Hilux Cabine Dupla SRV 4×2 Aut.</h2>
                <h3>Existe uma Hilux perfeita para você</h3>
                <p> LIDERANçA INCONTESTáVEL, só uma Hilux pode superar uma Hilux, a Hilux é líder no segmento diesel há 15 anos4 e
                    desde 2016 é lider total do segmento5 de picapes médias no Brasil. Há oito gerações estabelecendo novos padrões da categoria,
                    inspirada em um conceito global de renovação, a Hilux reafirma a proposta de produto multiuso, enraizada por um DNA essencialmente dotado de robustez,
                    além da qualidade Toyota, a Hilux tem cinco anos de garantia.

                </p>
                <h2>Tecnologia a seu favor</h2>
                <p> O interior foi renovado de forma a acompanhar a adição de novas tecnologias. A picape ganha uma nova central multimídia, com tela de 8” e compatível
                    com Android Auto e Apple CarPlay. Já o painel de instrumentos tem novo grafismo e um computador de bordo com tela TFT de 4,2”.A picape conta com sete airbags de série,
                    diferencial auto-blocante a partir da versão SRV e o pacote Toyota Safety Sense na versão topo de linha SRX. Com ele, a Hilux 2021 recebe controle de cruzeiro adaptativo,
                    alerta de mudança de faixa e sistema de pré-colisão frontal com alerta e frenagem automática de emergência.

                </p>
                <div>
                    <img alt='Hilux_image' src='https://www.toyota.com.br/wp-content/uploads/2015/11/tyt_attribute_snippet_image_90279_tyt-hilux-dupla-2016-dif-performance-motor-diesel_wh423px.png' />
                    <div>
                        <h2>Motores fortes e econômicos</h2>
                        <p> Desenvolvido sob uma plataforma mundial, o motor diesel, com torque de 50,9 kgf.m (transmissão automática), tem uma melhor aceleração e engate mais rápido
                            entre as trocas e consumo reduzido em 4% em comparação com a geração anterior.
                        </p>
                    </div>
                </div>
                <Gallery>
                    <Zoon> <img alt='Hilux_image' src='https://cdn.motor1.com/images/mgl/PN3qW/s2/oficial-nova-toyota-hilux-aposta-alto-em-tecnologia-e-seguranca.jpg' /></Zoon>
                    <Zoon> <img alt='Hilux_image' src='https://cdn.motor1.com/images/mgl/b7gwk/s2/oficial-nova-toyota-hilux-aposta-alto-em-tecnologia-e-seguranca.jpg' /></Zoon>
                    <Zoon> <img alt='Hilux_image' src='https://cdn.motor1.com/images/mgl/qzPnJ/s1/toyota-hilux-2021-brasil.jpg' /></Zoon>
                    <Zoon> <img alt='Hilux_image' src='https://cdn.motor1.com/images/mgl/LZbQR/s1/toyota-hilux-2021-brasil.jpg' /></Zoon>
                    <Zoon> <img alt='Hilux_image' src='https://cdn.motor1.com/images/mgl/nYwJx/s1/toyota-hilux-2021-brasil.jpg' /></Zoon>
                    <Zoon> <img alt='Hilux_image' src='https://cdn.motor1.com/images/mgl/6m2k7/s1/toyota-hilux-2021-brasil.jpg' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}