import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransacationsContext";

const searchFormSchema = z.object({
    query: z.string(),
});

type searchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {

    const {fetchTransactions} = useContext(TransactionsContext);

    const {register, handleSubmit, formState:{isSubmitting}} = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data:searchFormInputs){
        await fetchTransactions(data.query);
        //new Promise((resolve) => setTimeout(resolve, 5000));
        
        // console.log(data);
    }

    return (
        <div>
            <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
                <input
                    type="text"
                    placeholder="Busque por transações"
                    {...register("query")}
                 />
                <button type="submit" disabled={isSubmitting}>
                    <MagnifyingGlass size={20} />
                    Buscar
                </button>
            </SearchFormContainer>
        </div>
    )
}