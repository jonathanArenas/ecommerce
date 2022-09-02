import './HeaderTop.css'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.jsx';
import { useContext } from 'react';

function HeaderTop() {
  const location = useLocation()
  console.log(location.pathname)
  const { isAuth, logout, user } = useContext(AuthContext);
  console.log(user)
  return (
    <div className='Header__top'>
      <div className='Top__Info'>
        <div className='Info__telefono'><i className="fa-solid fa-phone"></i>+52 7671024456</div>
        <div className='Info__email'> <i className="fa-solid fa-at"></i> jonathanarenas@gmail.com</div>
      </div>
      <nav className='Top__user'>
        {
          !isAuth ?
            (
              <>
              <li className="list__item">
               <Link to="/login" className={ (location.pathname.includes('/login'))? ' item-link-isActive' : 'item-link'}>Login</Link>
              </li>
              <li className="list__item">
               <Link to="/signup" className={(location.pathname.includes('/signup'))? ' item-link-isActive' : 'item-link'}>Sing Up</Link>
              </li>
              <i className="fa-solid fa-user"></i>
              </>
            )
            : (
              <>
              <li className="list__item">
                <Link to="/login" className={`item-link`} onClick={logout}>Logout</Link>
              </li>
              <li className="list__item">
                    {user.role}
              </li>
              </>
            )
        }

      </nav>
    </div>
  )
}

export default HeaderTop