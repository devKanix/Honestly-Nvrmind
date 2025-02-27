import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", JSON.stringify(formData, null, 2));
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
            <span className="text-blue-500">Honestly-Nvrmind</span> isn’t just a
            shop, it’s a whole new dimension.
          </p>
        </div>
        <div>
          <div className="w-[500px] h-full items-center justify-center flex flex-col">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black">
              SIGN UP
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded w-96 h-10 pl-4"
                  placeholder="Full Name"
                />
                <div className="relative">
                  <input
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    className="rounded w-96 h-10 pl-4 mt-2 mb-2"
                    placeholder="Phone Number"
                  />
                  <div className="flex flex-col">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded w-96 h-10 pl-4"
                      placeholder="Email"
                    />
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="rounded w-96 h-10 pl-4 mt-2"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-40 h-10 bg-black mt-2 text-white rounded transition-bg transition-text duration-200 hover:bg-yellow-300 hover:text-black"
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
