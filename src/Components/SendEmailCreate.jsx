import { useContext } from "react"
import { APIContext } from "../Context/SendEmailContext"




export function SendEmailCreate() {
    const { setSendEmail, setMail, mail, message } = useContext(APIContext)
    return (
        <div>
            <h2>Resposta da Api:</h2>
            <h4>{message}</h4>
            <div className="input-group">
                <label className="label">Email address</label>

                <input name="Email" id="Email"
                    onChange={(e) => { setMail(e.target.value) }} className="input" type="email" />

                <button className="btn" onClick={() => { setSendEmail(mail); }}>Create Email</button>
                <div></div></div>
        </div>
    )
}