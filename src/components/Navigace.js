import { NavLink } from "react-router-dom"

const Navigace = () => {
  return <header>
            <NavLink to="/">Hlavní stránka</NavLink>
            <NavLink to="prehled">Přehled slovíček</NavLink>
        </header>

}

export default Navigace
