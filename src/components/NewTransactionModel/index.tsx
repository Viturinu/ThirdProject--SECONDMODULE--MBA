import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

export function NewTransactionModel(){ //Dialog.Portal faz ele sair da div=root raiz do React, o que é muito bom, pois nops dá poder de modificação e ainda segmenta o modal da aplicação
    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>
                <form action="">
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>

                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}