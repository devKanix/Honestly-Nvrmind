import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen mt-10">
        <h1 className="text-white text-4xl font-bold">Terms and Conditions</h1>
        <div className="w-[80%] h-[1000px] bg-yellow-400 rounded mt-10 p-4">
          <h3 className="text-xl font-bold">
            Last Updated:{" "}
            <span className="text-lg font-normal text-blue-800 underline">
              7-feb-2025
            </span>
          </h3>{" "}
          <br></br>
          <h3 className="text-xl font-bold">Acceptance of Terms</h3>
          <p className="text-lg">
            By using Honestly-Nvrmind, you agree to comply with these terms.{""}
          </p>{" "}
          <br></br>
          <h3 className="text-xl font-bold">Orders & Payments</h3>
          <p className="text-lg">
            All prices are in Rupees. <br></br>
            Payment gateways process transactions securely; we are not liable
            for third-party errors.
          </p>{" "}
          <br></br>
          <h3 className="text-xl font-bold">Shipping & Returns</h3>
          <p className="text-lg">
            Delivery timelines vary based on location. <br></br>
            Returns/exchanges must be initiated within 4 days of receipt.
            Damaged items require proof.{" "}
          </p>{" "}
          <br></br>
          <h3 className="text-xl font-bold">Intellectual Property</h3>
          <p className="text-lg">
            All content (logos, text, images) is owned by Honestly-Nvrmind.
            Unauthorized use is prohibited.
          </p>{" "}
          <br></br>
          <h3 className="text-xl font-bold">Limitation of Liability</h3>
          <p className="text-lg">
            We are not liable for indirect damages (e.g., loss of profits)
            arising from product use or website issues.
          </p>{" "}
          <br></br>
          <h3 className="text-xl font-bold">Governing Law</h3>
          <p className="text-lg">
            These terms are governed by the laws of India. Disputes will be
            resolved in courts of Uttar Pradesh.
          </p>{" "}
          <br></br>
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="text-lg">
            {" "}
            For questions, email help@Honestlynvrmind or visit our Contact page.{" "}
          </p>
          <br></br>
          <h3 className="text-xl font-bold">Notes:</h3>
          <p className="text-lg">
            Replace placeholders (e.g., Honestly-Nvrmind, Ruppee) with
            your details. <br></br>
            Consult a legal professional to ensure compliance with local
            regulations. <br></br>
            Customize policies further based on your specific operations (e.g.,
            refund windows, data storage practices).
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
