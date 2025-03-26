import axios from "axios"
import { useState } from "react"

function CreateProductForm() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputInfo = {
      name,
      image,
      price,
      description,
    }
    try {
      const createProduct = await axios.post(
        "http://localhost:4001/products",
        inputInfo
      )
    } catch (error) {
      console.log(error)
    }

    setName("")
    setImage("")
    setPrice("")
    setDescription("")
  }
  return (
    <form className='product-form' onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
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
        <button type='submit'>Create</button>
      </div>
    </form>
  )
}

export default CreateProductForm
