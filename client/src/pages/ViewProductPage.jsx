import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:4001/products";

function ViewProductPage() {
  const { productId } = useParams(); // ดึง productId จาก URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // ดึงข้อมูลสินค้าจาก API
  useEffect(() => {
    axios
      .get(`${API_URL}/${productId}`)
      .then((response) => setProduct(response.data.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        {product ? (
          <>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="350" height="350" />
            <h3>Price: {product.price} Baht</h3>
            <p>{product.description}</p>
          </>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
