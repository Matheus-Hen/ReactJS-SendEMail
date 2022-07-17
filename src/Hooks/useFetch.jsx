import axios from "axios";
import { useEffect,useState } from "react";
const api = axios.create({
    baseURL: "http://localhost:3004/",
})

export function useFetch(mail) {
    const [message, setMessage] = useState("");
    useEffect(() => {
        if (mail != "") {
            {
                api.post('/SendEmail', {
                    email: `${mail}`,
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

    return { message };
}