import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { useEffect } from "react";
const api = axios.create({
    baseURL: "http://localhost:3004/",
})

export function useFetch(mail) {
    useEffect(() => {
        api.post('/SendEmail', {
            email: `${mail}`,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });

    }, [mail])
}