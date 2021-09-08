import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
margin: 80px auto 0;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 1200px;
background-color:  ${props => props.theme.colors.background};

>img{
    margin-top: 20px;
    width: 500px;
}

>h2{
    font-size: 2rem;
    margin: 10px 0px;
    color: ${props => props.theme.colors.text};
}

>p{
    text-align: left;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text}
}

>h3, span{
    font-size: 1.5rem;
    margin: 6px 0px;
    color: ${props => props.theme.colors.text};
}
`;

const Gallery = styled.section`
width: 1200px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
gap: 8px;
align-items: center;
justify-items: center;
margin: 20px auto 40px;

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

export const S100XR = () => {
    return (
        <>
            <Container>
                <img alt='S100XR_image' src='https://imgd.aeplcdn.com/1280x720/bw/models/bmw-s1000xr-2020-standard20191129161142.jpg?q=80' />
                <h2>A NOVA BMW S 1000 XR</h2>
                <h3>O desafio das curvas e dos quilómetros.</h3>
                <p> Não abdiques de nada, exige tudo. Não apenas de ti, mas também da tua moto. Sempre na procura da trajetória ideal:
                    cada curva com mais uns graus de inclinação e uns milímetros mais fechada. Quilómetro após quilómetro. A S 1000 XR
                    é uma moto que também não se intimida com nada. Conjuga na perfeição a sua aptidão para longas viagens com o carácter
                    desportivo. A sua agressividade desportiva descende da RR. Por outro lado, a sua excelente ergonomia oferece uma posição
                    de condução direita e descontraída para que possas lutar por cada curva e cada reta durante todo o dia. Uma corrida que só
                    termina quando tu quiseres. Como deve ser. Esse é o nosso conceito de XR. E o teu? #NeverStopChallenging.
                </p>
                <span></span>
                <h2>À procura da trajetória ideal, também no design.</h2>
                <p> As linhas marcantes definem a carenagem frontal e os faróis. O conjunto das linhas destaca-se pelos traços bem evidentes;
                    agressiva e consistente até ao final: não é por acaso que a traseira curta remete para uma moto desportiva.
                    O bico acentuado, a linha de cintura elevada e o guiador confortável revelam uma vontade incontrolável de devorar quilómetros.
                    Quilómetros que, numa posição adequada para longos trajetos, podem ser percorridos com muito prazer dia após dia. Claro que a
                    melhoria da aerodinâmica e das carenagens também são um importante contributo. Agora tens uma melhor proteção contra os ruídos,
                    o frio, o vento e as condições meteorológicas. E o vidro defletor regulável deixa bem claro aquilo que é mais importante: fazer
                    muitos quilómetros, sem preocupações com o vento.
                </p>
                <Gallery>
                    <Zoon><img alt='S100XR_image' src='https://imgd.aeplcdn.com/1280x720/n/cw/ec/48962/bmw-s-1000-xr-front-three-quarter2.jpeg?q=80' /></Zoon>
                    <Zoon><img alt='S100XR_image' src='https://imgd.aeplcdn.com/1280x720/n/cw/ec/48962/bmw-s-1000-xr-instrument-cluster0.jpeg?q=80' /></Zoon>
                    <Zoon> <img alt='S100XR_image' src='https://imgd.aeplcdn.com/1280x720/n/cw/ec/48962/bmw-s-1000-xr-front-footpeg4.jpeg?q=80' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}


export const CB1000R = () => {
    return (
        <>
            <Container>
                <img alt='CB1000r_image' src='https://www.honda.com.br/motos/sites/hda/files/2020-12/Motos_carrossel_0016_CORES_VERMELHA_CB1000R_860x550_.png' />
                <h2>CB 1000R</h2>
                <h3>Evolução na máxima potência.</h3>
                <p>Com tecnologia blackout e diferentes cores para facilitar a visualização das principais informações de pilotagem,
                    o painel digital da CB 1000R conta ainda com indicador de troca de marcha configurável (Upshit Light) para máxima performance.
                    Comandos na manopla possibilitam ao piloto configurar a potência, torque e freio motor da motocicleta em 3 modos de pilotagem
                    pré-definidos + 1 modo customizável. Assim, você pode escolher o ajuste perfeito para seu tipo de pilotagem, seja na cidade ou na estrada.
                </p>
                <h2>Segurança e Design</h2>
                <p> Sempre que precisar fazer uma frenagem brusca e inesperada, o pisca-alerta é acionado automaticamente, mantendo a sinalização até o piloto
                    soltar o freio. Isso significa mais segurança em diversas condições de pilotagem. O design Neo Sports Café é um ícone de autenticidade.
                    Inspirada no espírito de customização dos Café Racers e equipada com a mais alta tecnologia, a CB 1000R Neo Sports Café nunca passa desapercebida.
                </p>
                <Gallery>
                    <Zoon><img alt='CB1000r_image' src='https://www.motoo.com.br//fotos/2020/11/1280_960/honda_cb-1000r_2021_8_18112020_19695_1280_960.jpg' /></Zoon>
                    <Zoon><img alt='CB1000r_image' src='https://www.motoo.com.br//fotos/2020/11/1280_960/honda_cb-1000r_2021_8_18112020_19694_1280_960.jpg' /></Zoon>
                    <Zoon> <img alt='CB1000r_image' src='https://www.motoo.com.br//fotos/2020/11/1280_960/honda_cb-1000r_2021_9_11112020_18649_1280_960.jpg' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const CBR1000RR_Fireblade = () => {
    return (
        <>
            <Container>
                <img alt='CBR1000RR_Fireblade_image' src='https://www.honda.com.br/motos/sites/hda/files/2020-12/Motos_carrossel_0029_cbr1000rr_sp_0.png' />
                <h2>CBR 1000RR Fireblade </h2>
                <h3>Total Control.</h3>
                <p> A Honda CBR 1000RR Fireblade é simplesmente uma delícia de superbike, porque ela combina elementos ultra modernos num pacote sofisticado
                    que facilita o acesso para explorar além dos seus limites. Você realmente pilota melhor, mais à vontade. A verdade é que a cada volta com
                    a nova Fireblade você fica mais rápido ao descobrir como reagir à sensação do incrível feedback de segurança que a motocicleta transmite.
                    A nova Honda CBR 1000RR Fireblade é extremamente refinada e permite que o piloto tire o melhor proveito da motocicleta com um nível de exploração
                    adicional de suas habilidades com muito mais confiança.
                </p>
                <h2>Design e Segurança</h2>
                <p> Mais fina e com melhor aerodinâmica, a nova carenagem deixou a CBR 1000RR Fireblade com um visual mais agressivo e esportivo,
                    o que tem tudo a ver com o conceito “Forward-looking lines”.A CBR 1000RR Fireblade possui freios ABS de disco duplo na frente
                    e simples atrás, possuindo pinças totalmente novas, mais leves e eficientes. Na versão SP, conta com a tecnologia das marcas Brembo.
                </p>
                <Gallery>
                    <Zoon><img alt='CBR1000RR_Fireblade_image' src='https://media.motociclismoonline.com.br/uploads/2020/12/image-39.png' /></Zoon>
                    <Zoon><img alt='CBR1000RR_Fireblade_image' src='https://media.motociclismoonline.com.br/uploads/2020/12/cbr-1000rr-detalhe_motor-motociclismoonline.jpg' /></Zoon>
                    <Zoon> <img alt='CBR1000RR_Fireblade_image' src='https://media.motociclismoonline.com.br/uploads/2020/12/detalhe_suspensao-cbr-1000rr-motociclismoonline.jpg' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Vulcan = () => {
    return (
        <>
            <Container>
                <img alt='Vulcan_image' src='https://content2.kawasaki.com/ContentStorage/KMB/ProductTrimGroup/69/577f5333-2608-43d4-bb72-4820951e968a.png?w=750' />
                <h2>Vulcan S</h2>
                <h3>ONDE A ESPORTIVIDADE ENCONTRA O ESTILO ESTRADEIRO</h3>
                <p> Ao contrário das demais cruisers, a Vulcan S é projetada para transportar os pilotos para o mundo esportivo com estilo de sobra.
                    Mesclando uma pilotagem mais esportiva com o estilo retrô e um potente motor de 649 cc, ela proporciona uma experiência nunca vista antes.
                    Seja indo ao trabalho ou curtindo um passeio, a Vulcan S é sua parceira confiável para qualquer ocasião.
                </p>
                <h2>PRINCIPAIS DESTAQUES</h2>
                <p> Equipado com um motor derivado da Ninja de 649 cc, a Vulcan S entrega potência com um amplo torque de baixas a médias rotações para um passeio emocionante.
                    A Vulcan S entrega uma amocionante performance de uma sport cruiser para o maximo de diversão em cada passeio.O chassi derivado de uma Sportbike e a suspensão
                    proporcionam um amnuseio leve e responsivo para fácil manobrabilidade e uma sensação de esportividade.
                </p>
                <Gallery>
                    <Zoon><img alt='Vulcan_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4958/81d73a60-6dd0-4fc9-9f46-008d61a0a252.jpg?w=510&h=340&mode=crop' /></Zoon>
                    <Zoon><img alt='Vulcan_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4958/5696ce75-1cab-4e7d-a94b-811d282ec6a0.jpg?w=510&h=340&mode=crop' /></Zoon>
                    <Zoon> <img alt='Vulcan_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4958/5567f936-5cb7-487c-ac68-8af071104e81.jpg?w=510&h=340&mode=crop' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Z1000 = () => {
    return (
        <>
            <Container>
                <img alt='Z1000_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4952/2837b038-9475-46fa-88ae-ac30abd0cbbd.png?w=800&h=449' />
                <h2>Z1000</h2>
                <h3>Visão Geral</h3>
                <p> A carroçaria esculpida dá vida ao design agressivo Z de inspiração Sugomi. Todos os floreios desnecessários foram removidos para realçar com ousadia
                    a funcionalidade brutal. Aumentando o impacto de condução, o motor de 4 cilindros em linha de 1.043 cc e o chassi rígido oferecem uma pilotagem mais
                    rígida e direta que transforma o Z1000 na Supernaked mais radical do mercado. Z1000 – Liberte-se.
                </p>
                <h2>DESIGN SUGOMI</h2>
                <p> Sugomi pode ser visto como um predador na caça. Parado à beira de explodir em ação, seus olhos estão fixos em sua presa com um foco intenso,
                    seu corpo agachado, músculos tensos em antecipação. Está concentrado tão intensamente na tarefa em mãos que a energia que está reunindo em
                    preparação para atacar torna-se virtualmente palpável, discernível para aqueles que estão nas proximidades. O design sugomi do Z1000 se baseia
                    no brilho intensamente intenso do predador e em uma forma dinâmica que irradia com a antecipação da ação explosiva.
                </p>
                <Gallery>
                    <Zoon><img alt='Z1000_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4952/7290480a-0423-48f1-8c85-58ae612897ea.jpg?w=510&h=340&mode=crop' /></Zoon>
                    <Zoon><img alt='Z1000_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4952/b6078b2e-3c8e-41a4-bae3-1f2705008678.jpg?w=510&h=340&mode=crop' /></Zoon>
                    <Zoon> <img alt='Z1000_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4952/04fa6ff4-fd8c-4625-8bff-09624b56856f.jpg?w=510&h=340&mode=crop' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

export const Z900 = () => {
    return (
        <>
            <Container>
                <img alt='Z900_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4950/3a4db646-18cb-403a-8e8d-fbf5dbca0cfd.png?w=800&h=449' />
                <h2>Z900</h2>
                <h3>VISÃO GERAL</h3>
                <p> O espírito Z encontra sua expressão mais recente no Z900 com estilo Sugomi. Potência ao máximo, manuseio instintivo e controle de tração redefinem
                    a experiência supernaked. Luzes LED e um display TFT trazem a mais recente tecnologia. Ultrapasse os limites e domine as ruas.quipado com componentes
                    eletrônicos de alta qualidade, o Z900 combina potência com os mais recentes avanços em tecnologia para motocicletas.
                </p>
                <h2>ESTILO Z</h2>
                <p> Refinado, apresentando a mais recente evolução do estilo Sugomi, a motocicleta Z900 tem paíneis atualizados. Eles são compactos e contribuem inegavelmente
                    para uma imagem agressiva.Pilotar uma Kawasaki Z é uma experiência visceral. O Z900 torna a experiência do piloto uma prioridade máxima, esteja você acelerando
                    em estradas sinuosas, ruas da cidade ou cruzando em rodovias abertas.Equipado com componentes eletrônicos de alta qualidade, o Z900 combina potência com os mais
                    recentes avanços em tecnologia para motocicletas.
                </p>
                <Gallery>
                    <Zoon><img alt='Z900_image' src='https://content2.kawasaki.com/ContentStorage/KMB/ProductTopFeature/1013/cd2e09d1-6240-4976-8b37-b41180df2c77.jpg?w=800' /></Zoon>
                    <Zoon><img alt='Z900_image' src='https://content2.kawasaki.com/ContentStorage/KMB/Products/4950/0a456f86-ba75-4289-af6d-f9a714195fbb.jpg?w=510&h=340&mode=crop' /></Zoon>
                    <Zoon> <img alt='Z900_image' src='https://content2.kawasaki.com/ContentStorage/KMB/ProductTopFeature/1013/01d28d30-d9b9-45d5-a914-7a4e70e428e1.jpg?w=800' /></Zoon>
                </Gallery>
            </Container>
        </>
    );
}

