
import './App.css'
import { SendEmailCreate } from './Components/SendEmailCreate'
import { SendEmailDelete } from './Components/SendEmailDelete'
import { SendEmailRead } from './Components/SendEmailRead'
import { SendEmailUpdate } from './Components/SendEmailUpdate'
import { APIContextProvider } from './Context/SendEmailContext'

function App() {
  
  return (
    <APIContextProvider >
      <div className="App">
        <SendEmailCreate />
        <SendEmailRead />
        <SendEmailUpdate />
        <SendEmailDelete /> 
      </div>
    </APIContextProvider>
  )
}

export default App
