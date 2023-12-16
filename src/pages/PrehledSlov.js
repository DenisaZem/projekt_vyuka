import "./PrehledSlov.css"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const PrehledSlov = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

   useEffect (()=>{
    const unsubscribe = projectFirestore.collection("deutsch").onSnapshot((snapshot)=>{
      console.log(snapshot)

      if(snapshot.empty){
        setError("Žádná slovíčka k zobrazení")
      } else{
        let result = []
        snapshot.docs.forEach((oneWord)=>{
          result.push({id:oneWord.id, ...oneWord.data()}) 
        })
        setData(result)
      }

    }, (err)=> setError(err.message))
    return () =>unsubscribe()
    
  },[])

  const deleteWord = (id) =>{
    projectFirestore.collection("deutsch").doc(id).delete()
  }

  return (
    <div className="con">
    <h1>Přehled slov</h1>
     <div className="container">
      {error && <p>{error}</p>}
      {data.map((oneWord)=>{
      const{id, wordDe, wordCze,} = oneWord

      return <div key={id} className="wordBorder">
              <p className="transWorsDe">{wordDe}</p>
              <p className="trans">překlad </p> <br />
              <p className="transWordCz">{wordCze}</p>
              <div className="buttons">
                <Link to={`/one-word/${id}`} className="linkView">Zobrazit větu</Link>
                <br />
                <button type="button" onClick={ ()=>deleteWord(id) }className="deleteButton">Smazat slovo</button>      
              </div>
            </div>

    })}
      </div>
    </div>
  )
}

export default PrehledSlov
