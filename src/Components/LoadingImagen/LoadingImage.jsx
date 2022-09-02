import './LoadingImage.css'
function LoadingImage({data}) {
    
  return (
    <div className='container-img'>
        <img src={data} alt='imagen product' className='img-fluid' />
    </div>
  )
}

export default LoadingImage