import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProductForm() {
  const navigate = useNavigate()
  const param = useParams()
  const [editProduct,setEditProduct] = useState({
    name:"",
    image:"",
    price:"",
    description:""
  })
  
  const updateProduct = (e) => {
    const {name,value} = e.target
    setEditProduct({...editProduct, [name]: value})
  }
  const handleUpdate = async(e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4001/products/${param.productId}`,editProduct)
      console.log("Product updated:", editProduct);
      navigate("/")
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }
  return (
    <form className="product-form" onSubmit={handleUpdate}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={editProduct.name}
            onChange={updateProduct}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={editProduct.image}
            onChange={updateProduct}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={editProduct.price}
            onChange={updateProduct}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={editProduct.description}
            onChange={updateProduct}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
