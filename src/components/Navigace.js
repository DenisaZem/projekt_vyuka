import { NavLink } from "react-router-dom"
import "./Navigace.css"

const Navigace = () => {
  return <header>
            <nav>
            <NavLink to="/">Hlavní stránka</NavLink>
            <NavLink to="review">Přehled slovíček</NavLink>
            <NavLink to="form">Přidat nové slovíčko</NavLink>
            </nav>
        </header>

}

export default Navigace
