import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction{ //interface com a mascara da transação full
    id:number;
    description:string;
    type:"income" | "outcome";
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType{ //interface pro contexto
    transactions: Transaction[];
}

interface TransactionsProviderProps{ //interface pra passar children pro provider
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType); //temos que exportar pra gente conseguir utilizar ele em outras paginas

export function TransactionsProvider({children}:TransactionsProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransaction(){
        const response = await fetch("http://localhost:3333/transactions");
        const data = await response.json();
        setTransactions(data);
    }      
    useEffect(() => {
        loadTransaction();
    }, [])

    return(
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}