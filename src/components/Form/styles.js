import styled from 'styled-components';

export const Section = styled.body`
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 560px){
        padding: 20px;
    }
`
export const Form = styled.form`
    width: 480px;
    height: auto;
    padding: 30px;
    box-shadow: ${props => props.theme.colors.shadow};
    border-radius: 4px;
  
`;

export const Title = styled.h1`
    text-align: center;
    color: #FFA500;
    margin-bottom: 15px;

    @media screen and (max-width: 560px){
        font-size: 1.4rem;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 5px;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid gray;
    font-size: 1rem;
    border-radius: 4px;
    color: ${props => props.theme.colors.text};
`;

export const Error = styled.span`
    font-size: 1rem;
    color: var(--color-red);
    margin-top: 3px;
`

export const Button = styled.button`
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    background-color: #FFA500;
    color: #fff;
    font-size: 1rem;
    transition:  all ease 0.5s ;

    &:hover{
        background-color: #CD853F;
    }
`