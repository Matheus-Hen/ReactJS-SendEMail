import { memo, useEffect, useRef, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'


const Email = () => {
    const email = useRef(null)
    const [mail, setMail] = useState('')
    const {message} = useFetch(mail)


    return (
        <div>
            <h2>Resposta da Api:</h2>
            <h4>{message}</h4>
            <div className="input-group">
                <label className="label">Email address</label>
                <input ref={email} name="Email" id="Email" className="input" type="email" />
                <button className="btn" onClick={
                    () => {
                        setMail(email.current.value)
                        email.current.value = ''
                    }
                }>Send Email</button>
                <div></div></div>
        </div>
    )
}


export default memo(Email)