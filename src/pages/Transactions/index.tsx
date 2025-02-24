import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";
import { TransactionsContext } from "../../contexts/TransacationsContext";

export function Transactions() {
    const {transactions} = useContext(TransactionsContext); //lá estamos criando o contexto e envolvendo para que consigamos ter acesso, no entanto tempos que usar o useContext para, de fato, acessar as variaveis que depositamos dentor do contexto
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map( transaction => {
                            return(
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}