import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 50px;
    background-color:  ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.shadow};

    @media screen and (max-width: 560px){
        padding: 8px 40px;
    }

    @media screen and (max-width: 440px){
        padding: 8px 30px;
    }
  

    >div{
        display: flex;
        align-items: center;
    }
`;

export const Links = styled(Link)`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text};
    margin: 0px 10px;

    @media screen and (max-width: 560px){
        font-size: 1.1rem;
    }

    @media screen and (max-width: 440px){
        font-size: 0.900rem;
        margin: 0px 4px;
    }
`
export const Icon = styled.div`
    font-size: 20px;
    cursor: pointer;
    padding: 20px 20px 20px 0px;

    @media screen and (max-width: 560px){
        font-size: 18px;
    }

`
