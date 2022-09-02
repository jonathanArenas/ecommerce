import { useProductContext } from '../../context/ProductsContext'
import './HeaderBarCenter.css'
import { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'

function HeaderBarCenter() {
  const location = useLocation();
  const context = useProductContext()
  const [text, setText] = useState();
  const handleSearch = (e) => {
    e.preventDefault()
    context.setSearch(text)
  }

  return (
    <div className='container__BarCenter'>
      <div className='container'>
      <div className='Header__BarCenter'>
        <div className='BarCenter__Logo'>
          <Link to='/'>SevenEleven</Link>
        </div>
        {( location.pathname.includes('/login') || location.pathname.includes('/signup') || location.pathname.includes('/create-product') || location.pathname.includes('/product'))
        ? 
        (<></>)
        :
        (<form className='BarCenter__search' onSubmit={handleSearch}>
        <input type="text" placeholder='search..' onChange={(e) =>{ setText(e.target.value)}} />
        <input type="submit" value="Search" className='btn-search'/>
      </form>) 
        }
        
        <div className='BarCenter__car'>

        </div>
      </div>
    </div>
    </div>
  )
}

export default HeaderBarCenter