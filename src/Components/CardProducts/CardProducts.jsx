import React from 'react'
import './CardProducts.css' 
import ProductNotFound from '../../assets/images/product-not-available.png'
const CardProducts = ({ product_name, description, image, images, category, price}) => {
  return (

    <div className="product-card">
  <div className="badge">Hot</div>
  <div className="product-tumb">
  <img src={(image !== undefined ) ? image: (image === undefined) ? ProductNotFound : images } alt="Product" className="img-responsive" />
  </div>
  <div className="product-details">
    <span className="product-catagory">{category} </span>
    <div className='product-name'>
        <h4><a href>{product_name}</a></h4>
    </div>
    
    <div className='description'>
       <p className='line-clamp'>{description}</p>
    </div>
    <div className="product-bottom-details">
      <div className="product-price"><small> </small>{`$${price}.00`} </div>
      <div className="product-links">
        <a href><i className="fa fa-heart" /></a>
        <a href><i className="fa fa-shopping-cart"/></a>
      </div>
    </div>
  </div>
</div>

//     <>
   
// <div className="wsk-cp-product">
//   <div className="wsk-cp-img">
//     <img src={(image !== undefined ) ? image: (image === undefined) ? ProductNotFound : images } alt="Product" className="img-responsive" />
//   </div>
//   <div className="wsk-cp-text">
//     <div className="category">
//       <span>{category}</span>
//     </div>
//     <div className='title-product'>
//       <h3>{product_name} </h3>
//     </div>
//     <div className="description-prod">
//       <p>{description} </p>
//     </div>
//     <div className="card-footer">
//       <div className="wcf-left"><span className="price">{price}</span></div>
//       <div className="wcf-right"><a href="#" className="buy-btn"><i className="zmdi zmdi-shopping-basket" /></a></div>
//     </div>
//     </div>
//     </div>
//   </>

  )
}

export default CardProducts