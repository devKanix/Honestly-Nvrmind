import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Form Data:", formData);

    try {
      const response = await fetch("https://your-api.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Signup Successful");
        navigate("/");
      } else {
        console.error("Signup Failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex h-[500px] bg-yellow-400 rounded-lg">
        <div className="w-[500px] h-full bg-white flex flex-col items-center justify-center rounded-lg">
          <h1 className="text-4xl font-bold text-black">
            <Link to="/">Honestly-Nvrmind</Link>
          </h1>
          <p className="w-[90%] mt-5 font-Dancing">
            Glitch through reality, step into the future — where every 3D drop
            hits like a beat, every product drips like anime aesthetics.{" "}
            <span className="text-blue-500">Honestly-Nvrmind</span> isn’t
            just a shop, it’s a whole new dimension.
          </p>
        </div>
        <div>
          <div className="w-[500px] h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-black text-black">SIGN UP</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
              <input
                type="text"
                name="name"
                required
                className="rounded w-96 h-10 pl-4"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="number"
                name="number"
                required
                className="rounded w-96 h-10 pl-4 mt-2 mb-2"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                className="rounded w-96 h-10 pl-4"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                required
                className="rounded w-96 h-10 pl-4 mt-2"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-40 h-10 bg-black mt-2 text-white rounded transition-bg duration-200 hover:bg-yellow-300 hover:text-black"
              >
                Sign Up
              </button>
              <Link to="/signin" className="text-sm text-black duration-200 hover:text-blue-700">
                Log In?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
