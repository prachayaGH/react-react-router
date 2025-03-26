import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/product/view/:productId" element={<ViewProductPage/>}></Route>
        <Route path="/product/create" element={<CreateProductPage/>}></Route>
        <Route path="/product/edit/:productId" element={<EditProductPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
