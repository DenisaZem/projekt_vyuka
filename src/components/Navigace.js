import { NavLink } from "react-router-dom"
import "./Navigace.css"

const Navigace = () => {
  return <header>
            <nav>
            <NavLink to="/">Hlavní stránka</NavLink>
            <NavLink to="prehled">Přehled slovíček</NavLink>
            </nav>
        </header>

}

export default Navigace
