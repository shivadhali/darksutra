import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import SpecialHeader from "./SpecialHeader/SpecialHeader";
import Home from "./Home/Home";
import AllCategory from "./AllCategory/AllCategory";
import AllPackages from "./AllPackages/AllPackages";
import Footer from "./Footer/Footer";
import FilteredCategory from "./FilteredCategory/FilteredCategory";
import Products from "./Products/Products";
import About from "./About/About";
import WhatsApp from "./WhatsApp/WhatsApp";
import Contact from "./Home/Contact/Contact";
import rainbow from "./images/rainbow.jpg";

function App() {
  return (
    <div className="App">
      <SpecialHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<AllCategory />} />
          <Route path="/product" element={<AllPackages />} />
          <Route path="/category/:id" element={<FilteredCategory />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <WhatsApp />
      <Footer />
    </div>
  );
}

export default App;
