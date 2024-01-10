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

    if (action.type === "ADD_WORD") {
        const newWords = [...state.wordDe, action.payload]
        console.log("vše ok")
        return {
          ...state,
          wordDe: newWords,
          wordCze: "",
          sentence: "",
          showNotification: true,
          notificationContent: "Slovo bylo přidáno"
        }
      } 
      
      if (action.type === "NO_WORD_ADDED") {
        console.log("není vyplneno")
        return {
          ...state,
          showNotification: true,
          notificationContent: "Vyplňte prosím všechny údaje",
        }
      }

      if(action.type === "CLEAR_NOTIFICATION"){
        return{
            ...state,
          showNotification: false,
          notificationContent: ""
        }
      }

      return new Error ("Chyba - žádná shoda s action.type")
      
      
}

const defaultState = {
    wordDe:[],
    wordCze: [],
    sentence: [],
    showNotification: false,
    notificationContent: ""
}

const[state, dispatch] = useReducer(reducer, defaultState)


const submitForm = async (e)=>{
    e.preventDefault()

    if (wordDe && wordCze && sentence) {
        const newWord = { name: wordDe, wordCze, sentence };
        dispatch({ type: "ADD_WORD", payload: newWord });
      

    // const newWord = {
    //     wordCze,
    //     wordDe,
    //     sentence
    // }

    try {
        await projectFirestore.collection("deutsch").add(newWord);
        setWordCze("");
        setWordDe("");
        setSentence("");
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Not all fields filled");
      dispatch({ type: "NO_WORD_ADDED" });
    }


    // setWordCze("")
    // setWordDe("")
    // setSentence("")
}

const clearNotification = () =>{
    dispatch({type: "CLEAR_NOTIFICATION"})

}

  return <div>
            <div className="container--ADDNotif">
                <div className="ADDNotif">
                    {state.showNotification && <Modal notifContent={state.notificationContent}
                    clearNotif={clearNotification}
                    />}
                </div>
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
                        <li>{word.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
         </div>
}

export default Form
