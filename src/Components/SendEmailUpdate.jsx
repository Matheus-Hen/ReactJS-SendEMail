import { useContext } from "react"
import { APIContext } from "../Context/SendEmailContext"

export function SendEmailUpdate() {
    const { setEmailAtual, setNewmail, setSendNewEmail, newmail, messageUpdate } = useContext(APIContext)
    return (
        <div>
            <h2>Resposta da Api:</h2>
            <h4>{messageUpdate}</h4>
            <div className="input-group">
                <label className="label">Email address Atual</label>
                <input name="Email" id="Email"
                    onChange={(e) => { setEmailAtual(e.target.value) }} className="input" type="email" />

                <label className="label">New Email address</label>
                <input name="Email" id="Email"
                    onChange={(e) => { setNewmail(e.target.value) }} className="input" type="email" />

                <button className="btn" onClick={() => {setSendNewEmail(newmail);}}>Update Email</button>
                <div></div></div>
        </div>
    )
}