import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../src/pages/HomePage"
import ViewProductPage from "../src/pages/ViewProductPage"
import CreateProductPage from "../src/pages/CreateProductPage"
import EditProductPage from "../src/pages/EditProductPage"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route
            path='/product/view/:productId'
            element={<ViewProductPage />}
          ></Route>
          <Route path='/product/create' element={<CreateProductPage />}></Route>
          <Route
            path='/product/edit/:productId'
            element={<EditProductPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
