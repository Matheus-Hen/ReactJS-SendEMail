import { createContext, useState } from "react";
import { useFetch } from '../Hooks/useFetch'

export const APIContext = createContext()

export function APIContextProvider({ children }) {
    //Create
    const [mail, setMail] = useState('')
    const [sendEmail, setSendEmail] = useState('')
    //Read
    const [event, setEvent] = useState(false)
    //Update
    const [EmailAtual, setEmailAtual] = useState('')
    const [newmail, setNewmail] = useState('')
    const [sendNewEmail, setSendNewEmail] = useState('')
    //Delete
    const [deletar, setDeletar] = useState('')
    const [sendDelete, setSendDelete] = useState('')
    //API
    const { message, read, messageUpdate, messageDelete } = useFetch(sendEmail, event, sendNewEmail, EmailAtual, sendDelete)

    return (
        <APIContext.Provider value={{
            mail, setMail, setSendEmail,
            event, setEvent, newmail, setNewmail, sendNewEmail,
            setSendNewEmail, setEmailAtual, EmailAtual, deletar,
            setDeletar, setSendDelete,
            message, read, messageUpdate, messageDelete
        }}>
            {children}
        </APIContext.Provider>
    )
}

