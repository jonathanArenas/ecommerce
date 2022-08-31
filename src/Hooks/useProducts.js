import { useEffect, useState } from 'react'
import apiEcomerce from '../Services/apiEcomerce'

const useProducts = (query) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = (query == null) ? await apiEcomerce.getProducts() : await apiEcomerce.getProduct(query)
    if (data !== null) {
      setData(data)
    } else {
      setData([])
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
  }, [query])

  return { data, loading}
}

export default useProducts
