import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import "./Navigace.css"

const Navigace = () => {
  return <header>
                {/* <img src="./pikto.png" className="photoB"/> */}
                {/* <img src="https://www.obrazkyvevyuce.cz/user/16840/upload/ftp_client/piktogramy.png" className="mainIcon"/> */}
                <nav>
                {/* <img src="./knihy.jpg" alt="" /> */}
                <img src="https://www.kampomaturite.cz/data/USR_052_DEFAULT/jazyky_multidimenzionalni_iq_11_2018_9597030_xxl.jpg"className="iconBook" alt="kniha" />
                <NavLink to="/">Hlavní stránka</NavLink>
                <NavLink to="review">Přehled slovíček</NavLink>
                <NavLink to="form">Přidat nové slovíčko</NavLink>
                <button>
                    <GiHamburgerMenu/>
                </button>
                </nav>
        </header>


}

export default Navigace
