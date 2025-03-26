import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/view/:productId" element={<ViewProductPage />} />
        <Route path="/product/create" element={<CreateProductPage />} />
        <Route path="/product/edit/:productId" element={<EditProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
