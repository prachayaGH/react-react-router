import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:4001/products";

function CreateProductForm() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        image: "",
        description: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(API_URL, formData)
            .then(() => navigate("/")) // กลับไปที่หน้า Home
            .catch((error) => console.error("Error creating product:", error));
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <h1>Create Product Form</h1>
            <div className="input-container">
                <label>
                    Name
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter name here"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.image}
                        onChange={handleChange}
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
                        value={formData.price}
                        onChange={handleChange}
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
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        cols={30}
                    />
                </label>
            </div>
            <div className="form-actions">
                <button type="submit">Create</button>
            </div>
        </form>
    );
}

export default CreateProductForm;