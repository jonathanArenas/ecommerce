import { useState } from 'react'
import Loading from '../Components/Loading/Loading'
import useProducts from '../Hooks/useProducts'
import ListCards from '../Components/ListCards/ListCards'
import { useProductContext } from '../context/ProductsContext'

const Products = () => {
    const context = useProductContext()
    //const [query, setQuery] = useState(null)
    //const { data, loading } = useProducts(query)
   
    const requiredData = context.list.filter(product => {
        if(context.search === ''){
         return product
       // Si la busqueda es vacia, retorno todas las canciones
        } else if (product.product_name.toLowerCase().includes(context.search.toLowerCase())) {
          return product// Retorno la canción que cumple con el criterio de busqueda
        }
         return null
      })
    console.log(context.list, 'desde productos')
    return (
        <>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-11'>
                        <h3 className='fs-3'></h3>
                    </div>
                </div>
                <div className='container-products'>
                {context.loading ? <Loading /> : <ListCards data={
    
                    context.list.filter(product => {
                        if(context.search === ''){
                         return product
                       // Si la busqueda es vacia, retorno todas las canciones
                        } else if (product.product_name.toLowerCase().includes(context.search.toLowerCase())) {
                          return product// Retorno la canción que cumple con el criterio de busqueda
                        }
                         return null
                      })
                } />}
                </div>
            </div>
        </>

    )
}

export default Products