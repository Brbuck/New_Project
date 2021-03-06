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
    import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    margin: 80px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 85%;

    @media screen and (max-width: 960px){
        width: 90%;
        
    }

>img{
    margin-top: 20px;
    width: 500px;

    @media screen and (max-width: 960px){
        width: 400px;
    }

        @media screen and (max-width: 768px){
            width: 300px;
        }

}

>h2{
    font-size: 2rem;
    margin: 10px 0px;
    color: ${props => props.theme.colors.text};
    
    @media screen and (max-width: 960px){
            font-size: 1.8rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.6rem;
    }

    @media screen and (max-width: 560px){
        font-size: 1.3rem;
    }

    @media screen and (max-width: 420px){
        font-size: 1rem;
    }
}

>p{
    text-align: left;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text};

    @media screen and (max-width: 960px){
            font-size: 1rem;
    }

    @media screen and (max-width: 768px){
        font-size: 0.900rem;
    }

    @media screen and (max-width: 560px){
        font-size: 1.3rem;
    }

    @media screen and (max-width: 420px){
        font-size: 1rem;
    }
}

>h3, span{
    font-size: 1.5rem;
    margin: 6px 0px;
    color: ${props => props.theme.colors.text};

    @media screen and (max-width: 768px){
            font-size: 1.2rem;
    }
}
`;

const Gallery = styled.section`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
                <h3>??CONE ENTRE AS SUPERESPORTIVAS.</h3>
                <p> A S 1000 RR provocou uma revolu????o na categoria das superesportivas no seu lan??amento em 2009. Desde ent??o,
                    a moto continua em evolu????o, lapidando ainda mais seu projeto testado e aprovado por pilotos do mundo todo.
                    Com 207 cv e torque de 113 Nm ?? 11.000rpm, a S 1000 RR continua arrasadora e traz o que h?? de mais moderno
                    em termos de tecnologia embarcada. O resultado ?? uma moto com menos peso e uma melhoria evidente no desempenho.
                    Eleita a Moto do Ano pela premia????o de mesmo nome organizada pela Revista Duas Rodas.
                </p>
                <h2>Concebida para a pole position.</h2>
                <p> Cada pe??a da RR foi concebida para extrair o melhor desempenho. Vejamos, por exemplo, a configura????o da cicl??stica
                    com uma nova tecnologia de suspens??o que torna a RR mais leve e ainda mais precisa. Al??m disso, temos uma posi????o
                    de condu????o com uma ergonomia perfeita, devido ao quadro modificado e ao design das carenagens. Os far??is LED de s??rie
                    conferem ?? motocicleta uma imagem din??mica e agressiva. Os piscas dianteiros foram deslocados das carenagens para os
                    espelhos retrovisores, resultando em uma nova est??tica, al??m de gerar melhor visibilidade. Vista desde a traseira,
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
                <h3>O desafio das curvas e dos quil??metros.</h3>
                <p> N??o abdiques de nada, exige tudo. N??o apenas de ti, mas tamb??m da tua moto. Sempre na procura da trajet??ria ideal:
                    cada curva com mais uns graus de inclina????o e uns mil??metros mais fechada. Quil??metro ap??s quil??metro. A S 1000 XR
                    ?? uma moto que tamb??m n??o se intimida com nada. Conjuga na perfei????o a sua aptid??o para longas viagens com o car??cter
                    desportivo. A sua agressividade desportiva descende da RR. Por outro lado, a sua excelente ergonomia oferece uma posi????o
                    de condu????o direita e descontra??da para que possas lutar por cada curva e cada reta durante todo o dia. Uma corrida que s??
                    termina quando tu quiseres. Como deve ser. Esse ?? o nosso conceito de XR. E o teu? #NeverStopChallenging.
                </p>
                <span></span>
                <h2>?? procura da trajet??ria ideal, tamb??m no design.</h2>
                <p> As linhas marcantes definem a carenagem frontal e os far??is. O conjunto das linhas destaca-se pelos tra??os bem evidentes;
                    agressiva e consistente at?? ao final: n??o ?? por acaso que a traseira curta remete para uma moto desportiva.
                    O bico acentuado, a linha de cintura elevada e o guiador confort??vel revelam uma vontade incontrol??vel de devorar quil??metros.
                    Quil??metros que, numa posi????o adequada para longos trajetos, podem ser percorridos com muito prazer dia ap??s dia. Claro que a
                    melhoria da aerodin??mica e das carenagens tamb??m s??o um importante contributo. Agora tens uma melhor prote????o contra os ru??dos,
                    o frio, o vento e as condi????es meteorol??gicas. E o vidro defletor regul??vel deixa bem claro aquilo que ?? mais importante: fazer
                    muitos quil??metros, sem preocupa????es com o vento.
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
                <h3>Evolu????o na m??xima pot??ncia.</h3>
                <p>Com tecnologia blackout e diferentes cores para facilitar a visualiza????o das principais informa????es de pilotagem,
                    o painel digital da CB 1000R conta ainda com indicador de troca de marcha configur??vel (Upshit Light) para m??xima performance.
                    Comandos na manopla possibilitam ao piloto configurar a pot??ncia, torque e freio motor da motocicleta em 3 modos de pilotagem
                    pr??-definidos + 1 modo customiz??vel. Assim, voc?? pode escolher o ajuste perfeito para seu tipo de pilotagem, seja na cidade ou na estrada.
                </p>
                <h2>Seguran??a e Design</h2>
                <p> Sempre que precisar fazer uma frenagem brusca e inesperada, o pisca-alerta ?? acionado automaticamente, mantendo a sinaliza????o at?? o piloto
                    soltar o freio. Isso significa mais seguran??a em diversas condi????es de pilotagem. O design Neo Sports Caf?? ?? um ??cone de autenticidade.
                    Inspirada no esp??rito de customiza????o dos Caf?? Racers e equipada com a mais alta tecnologia, a CB 1000R Neo Sports Caf?? nunca passa desapercebida.
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
                <p> A Honda CBR 1000RR Fireblade ?? simplesmente uma del??cia de superbike, porque ela combina elementos ultra modernos num pacote sofisticado
                    que facilita o acesso para explorar al??m dos seus limites. Voc?? realmente pilota melhor, mais ?? vontade. A verdade ?? que a cada volta com
                    a nova Fireblade voc?? fica mais r??pido ao descobrir como reagir ?? sensa????o do incr??vel feedback de seguran??a que a motocicleta transmite.
                    A nova Honda CBR 1000RR Fireblade ?? extremamente refinada e permite que o piloto tire o melhor proveito da motocicleta com um n??vel de explora????o
                    adicional de suas habilidades com muito mais confian??a.
                </p>
                <h2>Design e Seguran??a</h2>
                <p> Mais fina e com melhor aerodin??mica, a nova carenagem deixou a CBR 1000RR Fireblade com um visual mais agressivo e esportivo,
                    o que tem tudo a ver com o conceito ???Forward-looking lines???.A CBR 1000RR Fireblade possui freios ABS de disco duplo na frente
                    e simples atr??s, possuindo pin??as totalmente novas, mais leves e eficientes. Na vers??o SP, conta com a tecnologia das marcas Brembo.
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
                <p> Ao contr??rio das demais cruisers, a Vulcan S ?? projetada para transportar os pilotos para o mundo esportivo com estilo de sobra.
                    Mesclando uma pilotagem mais esportiva com o estilo retr?? e um potente motor de 649 cc, ela proporciona uma experi??ncia nunca vista antes.
                    Seja indo ao trabalho ou curtindo um passeio, a Vulcan S ?? sua parceira confi??vel para qualquer ocasi??o.
                </p>
                <h2>PRINCIPAIS DESTAQUES</h2>
                <p> Equipado com um motor derivado da Ninja de 649 cc, a Vulcan S entrega pot??ncia com um amplo torque de baixas a m??dias rota????es para um passeio emocionante.
                    A Vulcan S entrega uma amocionante performance de uma sport cruiser para o maximo de divers??o em cada passeio.O chassi derivado de uma Sportbike e a suspens??o
                    proporcionam um amnuseio leve e responsivo para f??cil manobrabilidade e uma sensa????o de esportividade.
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
                <h3>Vis??o Geral</h3>
                <p> A carro??aria esculpida d?? vida ao design agressivo Z de inspira????o Sugomi. Todos os floreios desnecess??rios foram removidos para real??ar com ousadia
                    a funcionalidade brutal. Aumentando o impacto de condu????o, o motor de 4 cilindros em linha de 1.043 cc e o chassi r??gido oferecem uma pilotagem mais
                    r??gida e direta que transforma o Z1000 na Supernaked mais radical do mercado. Z1000 ??? Liberte-se.
                </p>
                <h2>DESIGN SUGOMI</h2>
                <p> Sugomi pode ser visto como um predador na ca??a. Parado ?? beira de explodir em a????o, seus olhos est??o fixos em sua presa com um foco intenso,
                    seu corpo agachado, m??sculos tensos em antecipa????o. Est?? concentrado t??o intensamente na tarefa em m??os que a energia que est?? reunindo em
                    prepara????o para atacar torna-se virtualmente palp??vel, discern??vel para aqueles que est??o nas proximidades. O design sugomi do Z1000 se baseia
                    no brilho intensamente intenso do predador e em uma forma din??mica que irradia com a antecipa????o da a????o explosiva.
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
                <h3>VIS??O GERAL</h3>
                <p> O esp??rito Z encontra sua express??o mais recente no Z900 com estilo Sugomi. Pot??ncia ao m??ximo, manuseio instintivo e controle de tra????o redefinem
                    a experi??ncia supernaked. Luzes LED e um display TFT trazem a mais recente tecnologia. Ultrapasse os limites e domine as ruas.quipado com componentes
                    eletr??nicos de alta qualidade, o Z900 combina pot??ncia com os mais recentes avan??os em tecnologia para motocicletas.
                </p>
                <h2>ESTILO Z</h2>
                <p> Refinado, apresentando a mais recente evolu????o do estilo Sugomi, a motocicleta Z900 tem pa??neis atualizados. Eles s??o compactos e contribuem inegavelmente
                    para uma imagem agressiva.Pilotar uma Kawasaki Z ?? uma experi??ncia visceral. O Z900 torna a experi??ncia do piloto uma prioridade m??xima, esteja voc?? acelerando
                    em estradas sinuosas, ruas da cidade ou cruzando em rodovias abertas.Equipado com componentes eletr??nicos de alta qualidade, o Z900 combina pot??ncia com os mais
                    recentes avan??os em tecnologia para motocicletas.
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
                <h3>??CONE ENTRE AS SUPERESPORTIVAS.</h3>
                <p> A S 1000 RR provocou uma revolu????o na categoria das superesportivas no seu lan??amento em 2009. Desde ent??o,
                    a moto continua em evolu????o, lapidando ainda mais seu projeto testado e aprovado por pilotos do mundo todo.
                    Com 207 cv e torque de 113 Nm ?? 11.000rpm, a S 1000 RR continua arrasadora e traz o que h?? de mais moderno
                    em termos de tecnologia embarcada. O resultado ?? uma moto com menos peso e uma melhoria evidente no desempenho.
                    Eleita a Moto do Ano pela premia????o de mesmo nome organizada pela Revista Duas Rodas.
                </p>
                <h2>Concebida para a pole position.</h2>
                <p> Cada pe??a da RR foi concebida para extrair o melhor desempenho. Vejamos, por exemplo, a configura????o da cicl??stica
                    com uma nova tecnologia de suspens??o que torna a RR mais leve e ainda mais precisa. Al??m disso, temos uma posi????o
                    de condu????o com uma ergonomia perfeita, devido ao quadro modificado e ao design das carenagens. Os far??is LED de s??rie
                    conferem ?? motocicleta uma imagem din??mica e agressiva. Os piscas dianteiros foram deslocados das carenagens para os
                    espelhos retrovisores, resultando em uma nova est??tica, al??m de gerar melhor visibilidade. Vista desde a traseira,
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
                <h3>O desafio das curvas e dos quil??metros.</h3>
                <p> N??o abdiques de nada, exige tudo. N??o apenas de ti, mas tamb??m da tua moto. Sempre na procura da trajet??ria ideal:
                    cada curva com mais uns graus de inclina????o e uns mil??metros mais fechada. Quil??metro ap??s quil??metro. A S 1000 XR
                    ?? uma moto que tamb??m n??o se intimida com nada. Conjuga na perfei????o a sua aptid??o para longas viagens com o car??cter
                    desportivo. A sua agressividade desportiva descende da RR. Por outro lado, a sua excelente ergonomia oferece uma posi????o
                    de condu????o direita e descontra??da para que possas lutar por cada curva e cada reta durante todo o dia. Uma corrida que s??
                    termina quando tu quiseres. Como deve ser. Esse ?? o nosso conceito de XR. E o teu? #NeverStopChallenging.
                </p>
                <span></span>
                <h2>?? procura da trajet??ria ideal, tamb??m no design.</h2>
                <p> As linhas marcantes definem a carenagem frontal e os far??is. O conjunto das linhas destaca-se pelos tra??os bem evidentes;
                    agressiva e consistente at?? ao final: n??o ?? por acaso que a traseira curta remete para uma moto desportiva.
                    O bico acentuado, a linha de cintura elevada e o guiador confort??vel revelam uma vontade incontrol??vel de devorar quil??metros.
                    Quil??metros que, numa posi????o adequada para longos trajetos, podem ser percorridos com muito prazer dia ap??s dia. Claro que a
                    melhoria da aerodin??mica e das carenagens tamb??m s??o um importante contributo. Agora tens uma melhor prote????o contra os ru??dos,
                    o frio, o vento e as condi????es meteorol??gicas. E o vidro defletor regul??vel deixa bem claro aquilo que ?? mais importante: fazer
                    muitos quil??metros, sem preocupa????es com o vento.
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
                <h3>Evolu????o na m??xima pot??ncia.</h3>
                <p>Com tecnologia blackout e diferentes cores para facilitar a visualiza????o das principais informa????es de pilotagem,
                    o painel digital da CB 1000R conta ainda com indicador de troca de marcha configur??vel (Upshit Light) para m??xima performance.
                    Comandos na manopla possibilitam ao piloto configurar a pot??ncia, torque e freio motor da motocicleta em 3 modos de pilotagem
                    pr??-definidos + 1 modo customiz??vel. Assim, voc?? pode escolher o ajuste perfeito para seu tipo de pilotagem, seja na cidade ou na estrada.
                </p>
                <h2>Seguran??a e Design</h2>
                <p> Sempre que precisar fazer uma frenagem brusca e inesperada, o pisca-alerta ?? acionado automaticamente, mantendo a sinaliza????o at?? o piloto
                    soltar o freio. Isso significa mais seguran??a em diversas condi????es de pilotagem. O design Neo Sports Caf?? ?? um ??cone de autenticidade.
                    Inspirada no esp??rito de customiza????o dos Caf?? Racers e equipada com a mais alta tecnologia, a CB 1000R Neo Sports Caf?? nunca passa desapercebida.
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
                <p> A Honda CBR 1000RR Fireblade ?? simplesmente uma del??cia de superbike, porque ela combina elementos ultra modernos num pacote sofisticado
                    que facilita o acesso para explorar al??m dos seus limites. Voc?? realmente pilota melhor, mais ?? vontade. A verdade ?? que a cada volta com
                    a nova Fireblade voc?? fica mais r??pido ao descobrir como reagir ?? sensa????o do incr??vel feedback de seguran??a que a motocicleta transmite.
                    A nova Honda CBR 1000RR Fireblade ?? extremamente refinada e permite que o piloto tire o melhor proveito da motocicleta com um n??vel de explora????o
                    adicional de suas habilidades com muito mais confian??a.
                </p>
                <h2>Design e Seguran??a</h2>
                <p> Mais fina e com melhor aerodin??mica, a nova carenagem deixou a CBR 1000RR Fireblade com um visual mais agressivo e esportivo,
                    o que tem tudo a ver com o conceito ???Forward-looking lines???.A CBR 1000RR Fireblade possui freios ABS de disco duplo na frente
                    e simples atr??s, possuindo pin??as totalmente novas, mais leves e eficientes. Na vers??o SP, conta com a tecnologia das marcas Brembo.
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
                <p> Ao contr??rio das demais cruisers, a Vulcan S ?? projetada para transportar os pilotos para o mundo esportivo com estilo de sobra.
                    Mesclando uma pilotagem mais esportiva com o estilo retr?? e um potente motor de 649 cc, ela proporciona uma experi??ncia nunca vista antes.
                    Seja indo ao trabalho ou curtindo um passeio, a Vulcan S ?? sua parceira confi??vel para qualquer ocasi??o.
                </p>
                <h2>PRINCIPAIS DESTAQUES</h2>
                <p> Equipado com um motor derivado da Ninja de 649 cc, a Vulcan S entrega pot??ncia com um amplo torque de baixas a m??dias rota????es para um passeio emocionante.
                    A Vulcan S entrega uma amocionante performance de uma sport cruiser para o maximo de divers??o em cada passeio.O chassi derivado de uma Sportbike e a suspens??o
                    proporcionam um amnuseio leve e responsivo para f??cil manobrabilidade e uma sensa????o de esportividade.
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
                <h3>Vis??o Geral</h3>
                <p> A carro??aria esculpida d?? vida ao design agressivo Z de inspira????o Sugomi. Todos os floreios desnecess??rios foram removidos para real??ar com ousadia
                    a funcionalidade brutal. Aumentando o impacto de condu????o, o motor de 4 cilindros em linha de 1.043 cc e o chassi r??gido oferecem uma pilotagem mais
                    r??gida e direta que transforma o Z1000 na Supernaked mais radical do mercado. Z1000 ??? Liberte-se.
                </p>
                <h2>DESIGN SUGOMI</h2>
                <p> Sugomi pode ser visto como um predador na ca??a. Parado ?? beira de explodir em a????o, seus olhos est??o fixos em sua presa com um foco intenso,
                    seu corpo agachado, m??sculos tensos em antecipa????o. Est?? concentrado t??o intensamente na tarefa em m??os que a energia que est?? reunindo em
                    prepara????o para atacar torna-se virtualmente palp??vel, discern??vel para aqueles que est??o nas proximidades. O design sugomi do Z1000 se baseia
                    no brilho intensamente intenso do predador e em uma forma din??mica que irradia com a antecipa????o da a????o explosiva.
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
                <h3>VIS??O GERAL</h3>
                <p> O esp??rito Z encontra sua express??o mais recente no Z900 com estilo Sugomi. Pot??ncia ao m??ximo, manuseio instintivo e controle de tra????o redefinem
                    a experi??ncia supernaked. Luzes LED e um display TFT trazem a mais recente tecnologia. Ultrapasse os limites e domine as ruas.quipado com componentes
                    eletr??nicos de alta qualidade, o Z900 combina pot??ncia com os mais recentes avan??os em tecnologia para motocicletas.
                </p>
                <h2>ESTILO Z</h2>
                <p> Refinado, apresentando a mais recente evolu????o do estilo Sugomi, a motocicleta Z900 tem pa??neis atualizados. Eles s??o compactos e contribuem inegavelmente
                    para uma imagem agressiva.Pilotar uma Kawasaki Z ?? uma experi??ncia visceral. O Z900 torna a experi??ncia do piloto uma prioridade m??xima, esteja voc?? acelerando
                    em estradas sinuosas, ruas da cidade ou cruzando em rodovias abertas.Equipado com componentes eletr??nicos de alta qualidade, o Z900 combina pot??ncia com os mais
                    recentes avan??os em tecnologia para motocicletas.
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

