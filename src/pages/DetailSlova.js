import "./DetailSlova.css"
import { useParams } from "react-router-dom"

const DetailSlova = () => {

  const { wordId } = useParams()


  return (
    <div>
      {wordId}
    </div>
  )
}

export default DetailSlova
