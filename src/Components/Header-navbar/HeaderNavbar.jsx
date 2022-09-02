import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.jsx';
import { useContext } from 'react';
function HeaderNavbar() {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();
  return (
    
    <nav className="header">
      <div className='container'>
        <ul className="header__nav-list">
          <li className="header__list-item">
            <Link to='/' className={
              (location.pathname.includes('/create-product') || location.pathname.includes('/product') || location.pathname.includes('/signup') || location.pathname.includes('/login')? `header__item-link header__item-link` :  `header__item-link header__item-link--is-active`)
              }>Home</Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default HeaderNavbar