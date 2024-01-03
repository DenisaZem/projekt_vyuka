import "./DetailSlova.css"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { projectFirestore } from "../firebase/config"


const DetailSlova = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const { wordId } = useParams()

  useEffect(()=>{
    projectFirestore.collection("deutsch").doc(wordId).get().then((document)=>{
      console.log(document)

      if(document.exists){
        setData(document.data())
      }else{
        setError ("Příkladová věta nelze zobrazit")
      }
    }).catch((err)=>{
      setError(err.message)
    })

  },[wordId])


  return <div className="main">
          <section>
         {error && <p>{error}</p>}

            <h1>{data.wordDe}</h1>
            <h3>{data.wordCze}</h3>
            <p> <span>Příklad:</span></p>
            <p>{data.sentence}</p>
            <Link to="/review" className="linkBack">Zpět na přehled</Link>
          </section>
        </div>
}

export default DetailSlova
