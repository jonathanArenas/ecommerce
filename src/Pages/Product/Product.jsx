import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import apiEcomerce from '../../Services/apiEcomerce'
import ProductNotFound from '../../assets/images/product-not-available.png'
import { AuthContext } from '../../context/Auth.jsx';
import { useContext } from 'react';
import './Product.css'
const Product = () => {
  const { productID } = useParams()
  const [dataProduct, setDataProduct] = useState(null)
  const navigate = useNavigate()
  const { isAuth } = useContext(AuthContext);

  const getDataProduct = async () => {
    const { data } = await apiEcomerce.getProduct(productID)
    if (data !== null) {
      setDataProduct(data)
    } else {
      dataShow === null && navigate('/404')
    }
  }

  useEffect(() => {
    // dataMovie === null && navigate('/404')
    getDataProduct()
    // people = serializePeople(dataShow['_embedded'].cast)
  }, [])

  console.log(dataProduct)
  return dataProduct &&(
    <div className='container'>
      <div className='row mb-5'>
                    <div className='col-11'>
                        <h3 className='fs-3'></h3>
                    </div>
        </div>
      <div>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <div className='container-imagen'>
            <img src={(dataProduct.image !== undefined ) ? dataProduct.image: (dataProduct.image === undefined) ? ProductNotFound : dataProduct.images } alt="Product" className="img-fluid" />          </div>

            </div>
          <div className=' col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <div className='product-detail'>
                <div className='brand'>
                  {dataProduct.brand}
                </div>
                <div className='title'>
                  {dataProduct.product_name}
                </div>
                <div className='price'>
                  {`$${dataProduct.price}.00`}
                </div>
                <div className='description'>
                  {dataProduct.description}
                </div>
                <div className='stock'>
                  Stock - {(dataProduct.isActive) ?  <label className='yes'>Yes</label>:  <label className='no'>No</label> }
                </div>
                {
                  !isAuth
                  ?
                    (<div className='button'>
                      <Link to='/signup' className='login'>Sign Up</Link>
                    </div>)
                  :
                    ((<div className='button'>
                        <button className='btn btn-danger'> <i class="fa-solid fa-cart-plus"></i> add to Car</button>
                        <button className='btn btn-danger'> <i class="fa-solid fa-sack-dollar"></i> Buy</button>
                    </div>))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Product