import "./Form.css"
import { useState, useReducer } from "react"
import { projectFirestore } from "../firebase/config"
import Modal from "./Modal"

const Form = () => {

const[wordCze, setWordCze] = useState("")
const[wordDe, setWordDe] = useState("")
const[sentence, setSentence ]= useState("")

const[showNotification, setShowNotification ]= useState("")

const reducer =(state, action)=>{

    if(action.type === "ADD_WORD"){
        const newWords = [...state.wordDe, action.payload ]
        return{
            ...state,
            wordDe: newWords,
            wordCze:"",
            sentence:"",
            showNotification: true,
            notificationContent: "Slovo bylo přidáno"
        }
    }

    return state
}

const defaultState = {
    wordDe:[],
    showNotification: false,
    notificationContent: ""
}

const[state, dispatch] = useReducer(reducer, defaultState)




const submitForm = async (e)=>{
    e.preventDefault()

    if (wordDe && wordCze && sentence) {
        const newWord = { id: new Date().getTime(), name: wordDe }
        dispatch({ type: "ADD_WORD", payload: newWord })
      } else {
        setShowNotification(false)
      }

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
            <div className="ADDNotif">
                {state.showNotification && <Modal notificationContent={state.notificationContent}/>}
            </div>
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
            <div className="renderNewWord">
                <div className="renderNewWord--title">
                {state.wordDe.length > 0 && "Nově přidáno do seznamu slov:"}
                </div>
                <div className="renderNewWord--function">
                    <ul>
                        {state.wordDe.map((word) => (
                        <li key={word.id}>{word.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
         </div>
}

export default Form
