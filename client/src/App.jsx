import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HNStrip from "./components/HNStrip";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import Creativity from "./components/Creativity";
import SignIN from "./components/SignIN";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HNStrip />
      <NewArrivals />
      <Creativity />
      <Footer />
      <SignIN />
    </div>
  );
}

export default App;
