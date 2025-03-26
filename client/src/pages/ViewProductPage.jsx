import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function ViewProductPage() {
  const [product, setProduct] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  const getProduct = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/products/${params.productId}`
      )
      setProduct(result)
    } catch (error) {}
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <h1>View Product Page</h1>
      <div className='view-product-container'>
        <h2>{product.name}</h2>
        <p>{product.price} THB</p>
        <p>{product.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  )
}

export default ViewProductPage
