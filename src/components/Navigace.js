import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import{ useState } from "react"
import "./Navigace.css"

const Navigace = () => {
  const[showMenu, setShowMenu] =useState(false)


  return <header>
                {/* <img src="./pikto.png" className="photoB"/> */}
                {/* <img src="https://www.obrazkyvevyuce.cz/user/16840/upload/ftp_client/piktogramy.png" className="mainIcon"/> */}
                <nav className={`${showMenu ? "nav show" : "nav hide"}` }>
                {/* <img src="./knihy.jpg" alt="" /> */}
                <img src="https://www.kampomaturite.cz/data/USR_052_DEFAULT/jazyky_multidimenzionalni_iq_11_2018_9597030_xxl.jpg"className="iconBook" alt="kniha" />
                <div>
                <NavLink to="/">Hlavní stránka</NavLink>
                <NavLink to="review">Přehled slovíček</NavLink>
                <NavLink to="form">Přidat nové slovíčko</NavLink>
                </div>
                </nav>
                <div className="justBut">
                <button onClick={()=>setShowMenu(!showMenu)}>
                    <GiHamburgerMenu className="buttonHam"/>
                </button>
                </div>
               
        </header>


}

export default Navigace
