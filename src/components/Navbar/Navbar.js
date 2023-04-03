import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logotype from '../../assets/pol_eko_logo_menu/pol-eko-logo-color.png'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'




const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logotype} alt="logo" style={{maxWidth: '150px', marginTop: '-5px'}}/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */} icon
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <a href="/produkty">Produkty</a>
            </li>
            <li>
                <a href="/projekty">Projekty</a>
            </li>
            <li>
                <a href="/o-nas">O Nas</a>
            </li>
            <li>
                <a href="/kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar