import { Routes, Route, Outlet } from 'react-router-dom'
import Header from '../Layouts/Header/Header'
import Products from '../Pages/Products'
import Product from '../Pages/Product'
import { ProductProvider } from '../context/ProductsContext'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const Public = () => {
  return (
    <div>
      <ProductProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path='/product/:productID' element={<Product />} />
          
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>     
      </ProductProvider>
    </div>

  )
}

export default Public
