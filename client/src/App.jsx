import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HNStrip from "./components/HNStrip";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import Creativity from "./components/Creativity";
import SignIN from "./pages/SignIN";
import SignUp from "./pages/SignUp";
import Categories from "./components/Categories";
import Fashion from "./pages/Fashion";
import Products from "./pages/Products";
import YoungFavourite from "./components/YoungFavourite"
import AppDownload from "./components/AppDownload";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Location from "./pages/Location";
import Tracking from "./pages/Tracking";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
            <YoungFavourite />
            <AppDownload />
            <Footer />
          </>
        } />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/signin" element={<SignIN />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;