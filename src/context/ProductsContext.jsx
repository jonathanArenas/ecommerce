import { useEffect, useState, createContext, useContext } from 'react'
import apiEcomerce from '../Services/apiEcomerce'
// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir LA MISMA información entre diferentes niveles de componentes

// Para usar Context necesitamos seguir una serie de pasos

// #1 Creación de mi contexto vacío
const ProductsContext = createContext()

// #2 Creación del proveedor del contexto
// Es decir, maneja de donde se obtiene y como se pasa la información
function ProductProvider (props) {
  //const [selectedSong, setSelectedSong] = useState({}) // La canción seleccionada
  const [loading, setLoading] = useState(true) // Nos va a indicar cuando los datos estan disponibles
  const [search, setSearch] = useState('') // Guardo la palabra que busco
  const [list, setList] = useState([])


  const getData = async () => {
    const { data } = await apiEcomerce.getProducts()
    if (data !== null) {
      setList(data)
    } else {
      setList([])
    }
    setLoading(false)
  }
  /*
  const serialize = ({ data }) => {
    return {
      data: data.map(function (item) {
        return item.person
      })
    }
  }*/

  useEffect(() => {
    getData()
  }, [])
  // Tenemos que indicar en el Provider que DATOS debe proveer.
  // Estos datos son públicos para todos los componentes
  const value = {
    list,
    loading,
    search,
    setSearch
  }

  return (
    <ProductsContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
// Brindar acceso a la data global de mi contexto
const useProductContext = () => {
  const context = useContext(ProductsContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumer
export {
  ProductProvider,
  useProductContext
}
