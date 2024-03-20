import './Header.scss'
import logo from './../assets/logo.png'

function Header() {

  return (
    <header>
        <img src={logo} alt=""/>
        <input type="text" placeholder="Suche..."/>
    </header>
  )
}

export default Header
