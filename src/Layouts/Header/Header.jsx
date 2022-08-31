
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import HeaderNavbar from '../../Components/Header-navbar/HeaderNavbar'
import HeaderBarCenter from '../../Components/HeaderBarCenter/HeaderBarCenter'
import './Header.css'

function Header() {
  return (
    <header>
        <HeaderTop />
        <HeaderBarCenter />
        <HeaderNavbar />
    </header>
  )
}

export default Header