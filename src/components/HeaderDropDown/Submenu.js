import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthContext from '../../providers/auth';

const Menu = styled.li`
    cursor: pointer;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover{
        background-color: ${props => props.theme.colors.background_hover2};
    }

    >div{
        margin-left: 30px;
    }

    span{
        font-size: 25px;
        margin-right: 18px;
    }

`;

const SubItemMenu = styled(Link)`
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    padding: 15px 0px;
    
    &:hover{
        background-color: ${props => props.theme.colors.background_hover};
    }

   >div{
        margin-left: 30px;
    }

`

function SubMenu({item}) {
    const [subitens, setSubitens] = useState(false)
    const showSubitem = () => {
        setSubitens(!subitens)
    }

    const [click, setClick] = useContext(AuthContext)

    return (
        
        <>
            <Menu onClick={item.subitem && showSubitem}>
                <div>
                    {item.marca}
                </div>
                <span>
                    {
                        item.subitem && subitens ? item.iconOpened : item.subitem ? item.iconClosed : null
                    }
                </span>
            </Menu>
            { 
                subitens && item.subitem.map((item, index) => {
                    return (<SubItemMenu onClick={() => setClick(!click)} key={index} to={item.path}><span></span><div>{item.modelo}</div></SubItemMenu>)
                })
            }
        </>
    );
}

export default SubMenu;

