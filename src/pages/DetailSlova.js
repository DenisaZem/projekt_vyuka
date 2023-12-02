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
        setError ("Pamětová věta nelze zobrazit")
      }
    }).catch((err)=>{
      setError(err.message)
    })

  },[wordId])


  return <section>
     {error && <p>{error}</p>}
     
          <h1>{data.wordCze}</h1>
          <h3>{data.wordDe}</h3>
          <p>{data.sentence}</p>
          <Link to="/review">Zpět na přehled</Link>
        </section>
}

export default DetailSlova
