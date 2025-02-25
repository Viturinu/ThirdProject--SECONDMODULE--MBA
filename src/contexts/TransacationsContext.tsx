import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction{ //interface com a mascara da transação
    id:number;
    description:string;
    type:"income" | "outcome";
    price: number;
    category: string;
    createdAt: string;
}

interface CreateTransactionInput{ //tem um type lá do hookform, mas não é bom utilizar pois criaria uma dependencia do contexto com o hook form, o que não é uma boa pratica.]
    description: string;
    price:number;
    category: string;
    type: "income" | "outcome";
}

interface TransactionContextType{ //interface pro contexto
    transactions: Transaction[];
    fetchTransactions: (query?:string) => Promise<void>; //retorno como uma Promise<void> - retorna void; isso é o mesmo que dizer que essa função é assincrona 
    createTransaction: (data:CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps{ //interface pra passar children pro provider
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType); //temos que exportar pra gente conseguir utilizar ele em outras paginas

export function TransactionsProvider({children}:TransactionsProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // export const TransactionsContext = createContext<TransactionContextType>({
    //     transactions: []
    // }); 

    async function fetchTransactions(query?: string){
        const response = await api.get("/transactions", {
            params: {
                _sort: "createdAt",
                _order:  "desc",
                q: query,
            }
        });

        setTransactions(response.data);
        // const url = new URL("http://localhost:3333/transactions");

        // if(query){ //se existir o argumento query, ou seja, alguém está escrevendo no input query e apertando 'enter'
        //     url.searchParams.append('q', query); //cria a consulta na url /transactions?q=query
        // }
        // console.log(url)
        // const response = await fetch(url);
        // const data = await response.json();
    }      

    async function createTransaction(data: CreateTransactionInput ){

        const { description, price, category, type } = data;

        const response = await api.post("transactions", {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        })

        setTransactions((state) => [response.data, ...state]); //sempre colocar arrow function quando depender do estado anterior (aquela questão de lembrança lexa - às vezes ele sai da sua esfera e acaba não atualizando de forma rapida)

    }

    useEffect(() => {
        fetchTransactions();
    }, [])

    return(
        <TransactionsContext.Provider value={{
             transactions,
             fetchTransactions,
             createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}