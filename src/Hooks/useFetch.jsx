import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: "http://localhost:3004/SendEmail/",
})

export function useFetch(mail, event, newemail, emailAtual,deletar) {
    const [message, setMessage] = useState("");
    const [messageUpdate, setMessageUpdate] = useState('')
    const [messageDelete, setMessageDelete] = useState('')
    const [read, setRead] = useState([])
    useEffect(() => {
        if (mail != "" && mail != undefined) {
            {
                api.post('create', {
                    "email": `${mail}`,
                })
                    .then(function (response) {
                        setMessage(response.data.message);
                        console.log(response);
                    })
                    .catch(function (error) {
                        setMessage(error.response.data.message);
                        console.error(error);
                    });
            }
        }
        else setMessage("");
    }, [mail])

    useEffect(() => {
        if (event == true) {
            api.get('read', {})
                .then(function (response) {
                    console.log(response.data);
                    setRead(response.data)
                })
        }
        else setRead([])
    }, [event])
    useEffect(()=>{
        if(newemail!=''){
            api.put('update',{
                'emailAtual':`${emailAtual}`,
                'emailNovo' : `${newemail}`
            })
            .then(function (response) {
                setMessage(response.data.message);
                console.log(response);
            })
            .catch(function (error) {
                setMessageUpdate(error.response.data.message);
                console.error(error);
            });
        }
        else setMessage('')
    },[newemail])
    useEffect(() => {
        if (deletar != "" && deletar != undefined) {
            {
                api.post('delete', {
                    email: `${deletar}`,
                })
                    .then(function (response) {
                        setMessageDelete(response.data.message);
                        console.log(response);
                    })
                    .catch(function (error) {
                        setMessageDelete(error.response.data.message);
                        console.error(error);
                    });
            }
        }
        else setMessageDelete("");
    }, [deletar])
    return { message, read, messageUpdate, messageDelete };
}
