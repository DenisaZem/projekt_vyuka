import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import "./Navigace.css";

const Navigace = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (event) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  };

  const toggleNav = () => {
    setShowMenu(!showMenu);
  }

// aby se postranní menu nezůstávalo otevřené
  useEffect(() => {
    if (showMenu) {
      toggleNav()
    }
  }, [])


  return (
    <header>
      <nav
        className={`menu-overlay ${showMenu ? "show" : "hide"}`}
        onClick={toggleNav}
      >
        <img
          src="https://img.freepik.com/free-vector/online-education-cartoon-concept-with-people-learning-online-vector-illustration_1284-84460.jpg?w=1380&t=st=1703592219~exp=1703592819~hmac=fe62f9ff88493f74888e4fb2a22f0425f10da0d31cd47180961cf14ea001a4d9"
          className="iconBook"
          alt="onlineEdu"
        />
        <div className="work-menu">
          <div className="menu-overlay"></div>
          <div className="nav-menu">
          <div className="close-nav-menu" onClick={handleMenuToggle}>
              <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45782/cross-mark-emoji-clipart-md.png" alt="Close" />
            </div>
      
            <div className="menu">
              
              <NavLink to="/">Hlavní stránka</NavLink>
              <NavLink to="review">Přehled slovíček</NavLink>
              <NavLink to="form">Přidat nové slovíčko</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="justBut">
        <button className="menuButton" onClick={handleMenuToggle}>
          <GiHamburgerMenu className="buttonHam" />
        </button>
      </div>
    </header>
  );
};

export default Navigace;
