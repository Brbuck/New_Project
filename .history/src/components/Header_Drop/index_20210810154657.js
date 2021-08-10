import React, { useState } from 'react';
import styled from 'styled-components';

import { Container, Links, Icon } from './styles';

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Data } from './Data';
import Submenu from './Submenu'

const DropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100vh;
    position: absolute;
    background-color: var(--color-white);
    box-shadow: 0px 0px 8px 5px var(--color-border);
    top: 0;
    left: ${({ click }) => (click ? '0' : '-100%')};
    transition: ease all .5s;
    padding: 8px 0px;

    >div{
        padding-left: 280px;
        text-align: right;
    }
`;

function Header() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <Container>
                <div>
                    <Icon onClick={handleClick}> <FaBars /></Icon>
                </div>
                <div>
                    <Links to='/revista'>Revista</Links>
                    <Links to='/tabela_fipe'>Tabela Fipe</Links>
                    <Links to='/login'>Login</Links>
                </div>
            </Container>
            <DropDown click={click} >
                <div>
                    <Icon onClick={handleClick}> <AiOutlineClose /></Icon>
                </div>
                {
                    Data.map((item, index) =>{
                        return <Submenu key={index} item={item} />
                    })
                }
            </DropDown>
        </>
    );
}

export default Header;