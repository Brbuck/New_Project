import React, {useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';
import AuthContext from '../../providers/auth'
import { Container, Links, Icon } from './styles';

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Data } from './Data';
import Submenu from './Submenu'

const DropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    position: absolute;
    background-color: ${props => props.theme.colors.background};
    box-shadow: 0px 0px 8px 5px var(--color-border);
    position: fixed;
    top: 0;
    left: ${({ click }) => (click ? '0' : '-100%')};
    z-index: 10;
    overflow-x: scroll;
    transition: ease all .5s;
    padding: 8px 0px;

    >div{
        padding-left: 240px;
        text-align: right;
    }
`;

function Header(props) {
    const [click, setClick] = useContext(AuthContext)
    const handleClick = () => {
        setClick(!click)
    }
    const { colors, title } = useContext(ThemeContext);
    return (
        <>
            <Container>
                <div>
                    <Icon onClick={handleClick}><FaBars /></Icon>
                </div>
                <div>
                    <Links to='/revista'>Revista</Links>
                    <Links to='/tabela_fipe'>Tabela Fipe</Links>
                    <Links to='/login'>Login</Links>
                    <Switch
                       onChange={props.toggleTheme}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={40}
                        handleDiameter={20}
                        offColor={shade(0.20, colors.primary)}
                        onColor={colors.secundary}
                    />
                </div>

            </Container>
            <DropDown click={click} >
                <div>
                    <Icon onClick={handleClick}> <AiOutlineClose /></Icon>
                </div>
                {
                    Data.map((item, index) => {
                        return <Submenu key={index} item={item} />
                    })
                }
            </DropDown>
            
        </>
    );
}

export default Header;