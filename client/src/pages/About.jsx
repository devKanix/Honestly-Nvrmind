import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <>
      <Navbar />
      <ScrollAnimation animatePreScroll={false} duration={1} delay={0} offset={0} animateIn="fadeIn">
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-white text-5xl font-bold">About Us</h1>
        <div className="w-[70%] h-[500px] mt-10 bg-yellow-400 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-800">Who We Are</h2>
          <p>
            We are a dedicated group based in Western Uttar Pradesh, India,
            committed to empowering local communities while delivering
            authentic, high-quality products to our customers. Our startup was
            founded with a dual purpose: to showcase the craftsmanship of rural
            artisans and to create sustainable employment opportunities for
            skilled villagers, including tailors, textile makers, and printers.
          </p>
          <h2 className="text-xl font-semibold mt-5 text-blue-800">Our Mission</h2>
          <p>
            By bridging the gap between traditional artisans and modern markets,
            we aim to preserve cultural heritage while fostering economic growth
            in rural areas. Every product we offer is meticulously crafted to
            ensure authenticity, durability, and timeless appeal. We take pride
            in supporting local talent and providing our customers with
            ethically sourced, premium-quality goods.
          </p>
          <h2 className="text-xl font-semibold mt-5 text-blue-800">
            Sustainability Commitment
          </h2>
          <p>
            In alignment with our vision to build a greener India, we prioritize
            eco-friendly practices. All our products are packaged in
            biodegradable paper wraps, <span className="font-semibold">never polyethylene or plastic
            materials</span>. By eliminating plastic waste, we strive to reduce
            environmental harm and inspire conscious consumerism. Join us in
            celebrating craftsmanship, empowering communities, and protecting
            our planet.
          </p>
          <h2 className="text-xl font-semibold mt-5 text-blue-800">Notes:</h2>
          <p>
            {" "}
            - I added a dedicated{" "}
            <span className="font-semibold">
              Sustainability Commitment
            </span>{" "}
            section to highlight your eco-friendly packaging. <br></br>-
            Emphasized the avoidance of plastic to align with your mission and
            India’s environmental goals. <br></br>- Kept the tone consistent
            with the rest of the page.
          </p>
        </div>
      </div>
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default About;
