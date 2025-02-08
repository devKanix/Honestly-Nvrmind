import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-5xl font-bold">Terms and Conditions</h1>
        <div className="w-[70%] h-[650px] bg-yellow-400 rounded-lg mt-10 p-4">
          <h2 className="text-xl font-semibold text-blue-800">
            Last Updated:{" "}
            <span className="text-lg font-normal text-black">7-feb-2025</span>
          </h2>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">
            Acceptance of Terms
          </h2>
          <p>
            By using Honestly-Nvrmind, you agree to comply with these terms.{""}
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">
            Orders & Payments
          </h2>
          <p>
            All prices are in Rupees. <br></br>
            Payment gateways process transactions securely; we are not liable
            for third-party errors.
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">
            Shipping & Returns
          </h2>
          <p>
            Delivery timelines vary based on location. <br></br>
            Returns/exchanges must be initiated within 4 days of receipt.
            Damaged items require proof.{" "}
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">
            Intellectual Property
          </h2>
          <p>
            All content (logos, text, images) is owned by Honestly-Nvrmind.
            Unauthorized use is prohibited.
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">
            Limitation of Liability
          </h2>
          <p>
            We are not liable for indirect damages (e.g., loss of profits)
            arising from product use or website issues.
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Disputes will be
            resolved in courts of Uttar Pradesh.
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">Contact</h2>
          <p>
            {" "}
            For questions, email help@Honestlynvrmind or visit our Contact page.{" "}
          </p>
          <br></br>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
