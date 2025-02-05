import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HNStrip from "./components/HNStrip";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import Creativity from "./components/Creativity";
import SignIN from "./components/SignIN";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import Fashion from "./components/Fashion";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
            <Hero />
            <HNStrip />
            <NewArrivals />
            <Creativity />
            <Footer />
          </>
        } />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/signin" element={<SignIN />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;