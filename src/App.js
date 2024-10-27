import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/Product/Product";
import ContactPage from "./Pages/Contact/ContactPage";

function App() {
  return (
    <div className="App">
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/ProductPage" element={<ProductPage/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    </div>
  );
}

export default App;
