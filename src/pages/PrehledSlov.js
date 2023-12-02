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
          // console.log(oneWord.data())
          result.push({id:oneWord.id, ...oneWord.data()})
          // console.log(result)
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
    <div>
    {error && <p>{error}</p>}
    {data.map((oneWord)=>{
      const{id, wordDe, wordCze} = oneWord

      return <div key={id} className="wordBorder">
              <p>{wordDe}</p>
              <p><span>překlad</span> {wordCze}</p>
              <Link to={`/one-word/${id}`} className="link">Zobrazit paměťovou větu</Link>
              <br />
              <button type="button" onClick={ ()=>deleteWord(id) }className="deleteButton">Smazat slovíčko</button> 
            </div>

    })}
    </div>
  )
}

export default PrehledSlov
