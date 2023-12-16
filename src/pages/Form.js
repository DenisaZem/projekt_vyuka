import "./Form.css"
import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {

const[wordCze, setWordCze] = useState("")
const[wordDe, setWordDe] = useState("")
const[sentence, setSentence ]= useState("")


const submitForm = async (e)=>{
    e.preventDefault()

    const newWord = {
        wordCze,
        wordDe,
        sentence
    }

    try{
        await projectFirestore.collection("deutsch").add(newWord)
        setWordCze("")
        setWordDe("")
        setSentence("")
    }catch (err){
        console.log(err.message)
    }


    setWordCze("")
    setWordDe("")
    setSentence("")
}


  return <div>
             <h1>Přidat nové slovo</h1>
             <form onSubmit={submitForm}>
                <input 
                    type="text"
                    placeholder="České slovo" 
                    value={wordCze}
                    onChange={(e)=>{setWordCze(e.target.value)}}
                />
                <br />
                <input 
                    type="text"
                    placeholder="Německý překlad" 
                    value={wordDe}
                    onChange={(e)=>{setWordDe(e.target.value)}}
                />
                <br />
                <input 
                    type="text"
                    placeholder="Vaše příkladová věta" 
                    value={sentence}
                    onChange={(e)=>{setSentence(e.target.value)}}
                />
                <br />
                <input 
                    type="submit" 
                    value="Přidat nové slovíčko do databáze" 
                />   
             </form>
         </div>
}

export default Form
