import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransacationsContext";


export function useSummary(){
    const {transactions} = useContext(TransactionsContext); //no momento da pesquisa, como acontece a atualização do estado do transactions, logo os componentes dependentes, como este, também são renderizados novamente, por isso acontece a atualização aqui.
    
        const summary = transactions.reduce((acc, transaction) => {
            if(transaction.type === "income"){
                acc.income += transaction.price;
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price
            }
            return acc;
        }, {
            income: 0,
            outcome: 0,
            total: 0,
        })

        return summary;
}
