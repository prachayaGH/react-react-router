import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function EditProductForm() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const params = useParams()
  const navigate = useNavigate()

  const getProduct = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/products/${params.productId}`
      )
      const product = result.data.data
      setName(product.name)
      setImage(product.image)
      setPrice(product.price)
      setDescription(product.description)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  const editProduct = async () => {
    const inputInfo = {
      name,
      image,
      price,
      description,
    }
    try {
      await axios.put(
        `http://localhost:4001/products/${params.productId}`,
        inputInfo
      )
    } catch (error) {
      console.log(error)
    }
    setName("")
    setImage("")
    setPrice("")
    setDescription("")
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editProduct()
  }

  return (
    <form className='product-form' onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className='input-container'>
        <label>
          Name
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Enter name here'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
      </div>
      <div className='input-container'>
        <label>
          Image Url
          <input
            id='image'
            name='image'
            type='text'
            placeholder='Enter image url here'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
      </div>
      <div className='input-container'>
        <label>
          Price
          <input
            id='price'
            name='price'
            type='number'
            placeholder='Enter price here'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>
      </div>
      <div className='input-container'>
        <label>
          Description
          <textarea
            id='description'
            name='description'
            type='text'
            placeholder='Enter description here'
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            cols={30}
            value={description}
          />
        </label>
      </div>
      <div className='form-actions'>
        <button type='submit'>Update</button>
      </div>
    </form>
  )
}

export default EditProductForm
