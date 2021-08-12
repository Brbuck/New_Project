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
    background-color: var(--color-white);
    box-shadow: 0px 0px 8px 0px var(--color-border);
`;

export const Links = styled(Link)`
    font-size: 1.2rem;
    color: var(--color-gray);
    margin-left: 15px;
`
export const Icon = styled.div`
    font-size: 20px;
    cursor: pointer;
    padding: 20px;
`
