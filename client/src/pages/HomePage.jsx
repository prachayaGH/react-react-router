import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:4001/products";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // ดึงข้อมูลสินค้าทั้งหมด
  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await axios.get(API_URL);
      setProducts(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  // ลบสินค้า
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button onClick={() => navigate("/product/create")}>Create Product</button>
      </div>

      {isError && <h1>Request failed</h1>}
      {isLoading ? (
        <h1>Loading ....</h1>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="product-preview">
                <img
                  src={product.image || "https://via.placeholder.com/250"}
                  alt={product.name}
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name}</h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description}</p>
                <div className="product-actions">
                  <button className="view-button" onClick={() => navigate(`/product/view/${product.id}`)}>
                    View
                  </button>
                  <button className="edit-button" onClick={() => navigate(`/product/edit/${product.id}`)}>
                    Edit
                  </button>
                </div>
              </div>
              <button className="delete-button" onClick={() => deleteProduct(product.id)}>x</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
