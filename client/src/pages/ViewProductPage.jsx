import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewProductPage() {
  //state สำหรับสินค้าเดียว
  const [products,setProducts] = useState([])
  const param = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getProducts()
  },[]) 
  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/products/${param.productId}`);
      setProducts(response.data.data)
    } catch (error) {
      console.error("Error fetching product:",error)
    }
  }
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name: {products.name}</h2>
        <p>{products.price} THB</p>
        <p>{products.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
