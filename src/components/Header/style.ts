import styled from "styled-components";

export const HeaderContainer = styled.div`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NewTransactionButton = styled.button`
    height: 3rem;
    border: 0;
    background: ${props => props.theme["green-500"]};
    color:${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s; //colocando transition aqui no :hover, temos uma transição somente quando acontece a passagem do mouse - lá noNewTransactionButton já aconteceria tanto na entrada do mouse como na saída
    }
`