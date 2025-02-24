import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">R$ 1.200,00</PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2025</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="outcome">- R$ 1.200,00</PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2025</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}