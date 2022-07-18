import { useContext } from "react"
import { APIContext } from "../Context/SendEmailContext"




export function SendEmailRead() {
    const { setEvent, event, read } = useContext(APIContext)
    return (
        <div className="Read">
            <div>            <h2>Resposta da Api:</h2>
                <button className="btn" onClick={() => { return event == true ? setEvent(false) : setEvent(true) }}>Read Email</button>
            </div>
            <div className="ReadAPI">
                <h4>{read.map((read) => {
                    return (<p>{read.EmailMarktUser}</p>)
                })}</h4>
            </div>
            <div></div></div>
    )
}