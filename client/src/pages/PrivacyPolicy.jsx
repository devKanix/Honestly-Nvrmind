import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white font-bold mt-10">Privacy Policy</h1>
        <div className="w-[70%] h-[750px] bg-yellow-400 rounded-lg p-4 mt-10">
          <h2 className="text-xl font-semibold text-blue-800">
            Last Updated:{" "}
            <span className="text-lg font-normal text-black">8 feb 2025</span>
          </h2>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">Introduction</h2>
          <p>
            Welcome to Honestly-Nvrmind. We are committed to protecting your
            privacy and ensuring transparency in how we handle your data. This
            policy outlines how we collect, use, and safeguard your information.
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">Information We Collect</h2>
          <p>
            Personal Data: Name, email, shipping address, and payment details
            (processed securely via third-party gateways). <br></br>
            Usage Data: Browser type, IP address, and pages visited (collected
            via cookies for analytics).
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">How We Use Your Information</h2>
          <p>
            - To process orders and deliver products. <br></br>- To communicate
            updates, offers, or policy changes. <br></br>- To improve website
            functionality and user experience.
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">Data Sharing</h2>
          <p>We do not sell your data. Limited sharing may occur with:</p>
          <p>
            - Service Providers: Payment processors, shipping partners.{" "}
            <br></br>- Legal Obligations: If required by law.
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">Security</h2>
          <p>
            We implement industry-standard measures to protect your data.
            However, no online transmission is 100% secure.
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">Your Rights</h2>
          <p>
            You may request access, corrections, or deletion of your data by
            contacting us at help@honestlynvrmind.com.{" "}
          </p>{" "}
          <br></br>
          <h2 className="text-xl font-semibold text-blue-800">Policy Updates</h2>
          <p>
            Changes will be posted here. Continued use of our site implies
            acceptance.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
