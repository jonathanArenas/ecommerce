import './HeaderTop.css'
import { Link, useLocation} from 'react-router-dom'

function HeaderTop() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className='Header__top'>
      <div className='Top__Info'>
        <div className='Info__telefono'><i className="fa-solid fa-phone"></i>+52 7671024456</div>
        <div className='Info__email'> <i className="fa-solid fa-at"></i> jonathanarenas@gmail.com</div>
      </div>
      <nav className='Top__user'>
        <li className="list__item">
          <Link to="/login" className={`item-link ${(location.pathname.includes('/login')? 'isActive' : '')}`}>Login</Link>
        </li>
        <li className="list__item">
          <Link to="/register" className={`item-link ${(location.pathname.includes('/register')? 'isActive' : '')}`}>Register</Link>
        </li>
        <i class="fa-solid fa-user"></i>
      </nav>
    </div>
  )
}

export default HeaderTop