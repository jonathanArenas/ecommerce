import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiEcomerce from '../Services/apiEcomerce'
import ProductNotFound from '../assets/images/product-not-available.png'

const Product = () => {
  const { productID } = useParams()
  const [dataProduct, setDataProduct] = useState(null)
  const navigate = useNavigate()

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
          <div className='col-6'>
          <img src={(dataProduct.image !== undefined ) ? dataProduct.image: (dataProduct.image === undefined) ? ProductNotFound : dataProduct.images } alt="Product" className="img-fluid" />          </div>
          <div className='col-6'>
            <div className='product-detail'>
                <div className='title'>
                  {dataProduct.product_name}
                </div>
                <div className='precie'>
                  {dataProduct.price}
                </div>
                <div className='description'>
                  {dataProduct.description}
                </div>
                <div className='stock'>
                  {(dataProduct.isActive) ?  'Yes': 'No' }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Product