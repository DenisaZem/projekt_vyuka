import { NavLink } from "react-router-dom"
import { GiHamburgerMenu, GiCancel } from "react-icons/gi"
import { useState, useEffect } from "react"
import "./Navigace.css"

const Navigace = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (event) => {
    event.preventDefault()
    setShowMenu(!showMenu)
  }

  const toggleNav = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    if (showMenu) {
      toggleNav()
    }
  }

// aby se postranní menu nezůstávalo otevřené
useEffect(() => {
  const handleResize = () => {
    if (showMenu) {
      closeMenu()
    }
  }
  // Event listener pro změnu rozlišení
  window.addEventListener("resize", handleResize);
  // Čištění event listeneru při odmontování komponenty
  return () => {
    window.removeEventListener("resize", handleResize);
  }
  }, [showMenu])


  return (
    <header>
      <nav className={`menu-overlay ${showMenu ? "show" : "hide"}`}>
        <img
          src="https://img.freepik.com/free-vector/online-education-cartoon-concept-with-people-learning-online-vector-illustration_1284-84460.jpg?w=1380&t=st=1703592219~exp=1703592819~hmac=fe62f9ff88493f74888e4fb2a22f0425f10da0d31cd47180961cf14ea001a4d9"
          className="iconBook"
          alt="onlineEdu"
        />
        <div className="work-menu">
          <div className="menu-overlay"></div>
          <div className="nav-menu">
            <div className="close-nav-menu" onClick={handleMenuToggle}>
              {showMenu ? (
                <GiCancel className="close-icon" />
              ) : (
                <GiHamburgerMenu className="menu-icon" />
              )}
            </div>
            <div className="menu">
              <NavLink to="/" onClick={closeMenu}>
                Hlavní stránka
              </NavLink>
              <NavLink to="/review" onClick={closeMenu}>
                Přehled slovíček
              </NavLink>
              <NavLink to="/form" onClick={closeMenu}>
                Přidat nové slovíčko
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
  <div className="nav-menu-button">
        <button className="menuButton" onClick={handleMenuToggle}>
          {showMenu ? (
            <GiCancel className="buttonHam" />
          ) : (
            <GiHamburgerMenu className="buttonHam" />
          )}
        </button>
  </div>
   
    </header>
  );
};

export default Navigace;