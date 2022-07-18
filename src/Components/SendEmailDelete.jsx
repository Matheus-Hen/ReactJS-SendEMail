import { useContext } from "react"
import { APIContext } from "../Context/SendEmailContext"




export function SendEmailDelete() {
    const { deletar,setDeletar, setSendDelete, messageDelete } = useContext(APIContext)
    return (
        <div>
            <h2>Resposta da Api:</h2>
            <h4>{messageDelete}</h4>
            <div className="input-group">
                <label className="label">Delete Email address</label>

                <input name="Email" id="Email"
                    onChange={(e) => { setDeletar(e.target.value) }} className="input" type="email" />

                <button className="btn" onClick={() => { setSendDelete(deletar); }}>Delete Email</button>
                <div></div></div>
        </div>
    )
}