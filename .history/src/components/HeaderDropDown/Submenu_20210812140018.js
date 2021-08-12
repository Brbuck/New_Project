import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.li`
    cursor: pointer;
    font-size: 1rem;
    color: var(--color-gray);
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover{
        background-color: #BEBEBE;
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
    color: var(--color-black);
    padding: 15px 0px;
    
    &:hover{
        background-color: var(--color-hover-card);
    }

   >div{
        margin-left: 30px;
    }

`
const Titles = styled.p`
    font-size: 1rem;
    color: red;
    cursor: default;
    
    `


function Header({ item }) {
    const [subitens, setSubitens] = useState(false)
    const showSubitem = () => {
        setSubitens(!subitens)
    }
    return (
        
        <>
            <Container onClick={item.subitem && showSubitem}>
                <div>
                    {item.marca}
                </div>
                <span>
                    {
                        item.subitem && subitens ? item.iconOpened : item.subitem ? item.iconClosed : null
                    }
                </span>
            </Container>
            {
                subitens && item.subitem.map((item, index) => {
                    return (<SubItemMenu key={index} to={item.path}><span></span><div>{item.modelo}</div></SubItemMenu>)
                })
            }
        </>
    );
}

export default Header;

