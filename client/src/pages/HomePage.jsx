import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function HomePage() {
  const [products, setProducts] = useState([])
  const [isError, setIsError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()

  const getProducts = async () => {
    try {
      setIsError(false)
      setIsLoading(true)
      const results = await axios("http://localhost:4001/products")
      setProducts(results.data.data)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleCreateBtn = () => {
    navigate(`/product/create`)
  }

  const handleViewBtn = (productId) => {
    navigate(`/product/view/${productId}`)
  }

  const handleEditBtn = (productId) => {
    navigate(`/product/edit/${productId}`)
  }

  const handleDeleteBtn = async (productId) => {
    const deleteReq = await axios.delete(
      `http://localhost:4001/products/${productId}`
    )
    getProducts()
  }

  return (
    <div>
      <div className='app-wrapper'>
        <h1 className='app-title'>Products</h1>
        <button onClick={() => handleCreateBtn()}>Create Product</button>
      </div>
      <div className='product-list'>
        {products.map((product) => {
          return (
            <div className='product' key={`${product.id} - ${product.name}`}>
              <div className='product-preview'>
                <img
                  src='https://via.placeholder.com/250/250'
                  alt='some product'
                  width='250'
                  height='250'
                />
              </div>
              <div className='product-detail'>
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className='product-actions'>
                  <button
                    className='view-button'
                    onClick={() => handleViewBtn(product.id)}
                  >
                    View
                  </button>
                  <button
                    className='edit-button'
                    onClick={() => handleEditBtn(product.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>

              <button
                className='delete-button'
                onClick={() => handleDeleteBtn(product.id)}
              >
                x
              </button>
            </div>
          )
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  )
}

export default HomePage
