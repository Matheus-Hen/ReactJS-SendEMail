import { memo, useEffect, useRef, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'


const Email = () => {
    const email = useRef(null)
    const [mail, setMail] = useState('')
    const api = useFetch(mail)


    return (
        <div>
            <h2>Emails gravados</h2>
            <h4>{mail}</h4>
            <div className="input-group">
                <label className="label">Email address</label>
                <input ref={email} name="Email" id="Email" className="input" type="email" />
                <button className="btn" onClick={
                    () => {
                        setMail(email.current.value)
                    }
                }>Send Email</button>
                <div></div></div>
        </div>
    )
}


export default memo(Email)