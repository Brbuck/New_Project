import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 50px;
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
