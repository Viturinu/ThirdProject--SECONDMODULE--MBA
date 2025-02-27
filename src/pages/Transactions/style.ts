import styled from "styled-components"

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 70rem;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate; //nos permite colocar o border-spacing, similar ao gap
    border-spacing: 0 0.5rem; //aqui, diferente dos outros lugares, o primeiro argumento é para o eixo x (deve ser porque a orientação da tabela é column)
    margin-top: 1.5rem;

    td{
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
    }
`;

interface PriceHighLightProps {
    variant: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
`;