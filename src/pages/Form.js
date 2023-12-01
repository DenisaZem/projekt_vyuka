import "./Form.css"
import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {

const[wordCze, setWordCze] = useState("")
const[wordDe, setWordDe] = useState("")
const[sentence, setSentence]=useState("")


const submitForm = (e)=>{
    e.preventDefault()
}


  return <form onSubmit={submitForm}>
            <input 
                type="text"
                placeholder="České slovíčko" 
             />
             <br />
            <input 
                type="text"
                placeholder="Němeské slovíčko" 
             />
             <br />
            <input 
                type="text"
                placeholder="Vaše paměťová věta" 
             />
             <br />
            <input 
                type="submit" 
                value="Přidat nové slovíčko do databáze" 
            />   
         </form>
}

export default Form
