import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

const SignUp = () => {

  return (
    <>
      {" "}
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2} delay={0} offset={50} animatePreScroll={false}>
      <div className="flex items-center justify-center h-screen ">
        <div className="flex h-[500px] bg-yellow-400">
          <div className="w-[500px] h-full bg-white flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-black">
              <Link to="/">Honestly-Nvrmind
              </Link>
            </h1>
            <p className="w-[90%] mt-5 font-Dancing">
              Glitch through reality, step into the future — where every 3D drop
              hits like a beat, every product drips like anime aesthetics.{" "}
              <span className="text-blue-500">Honestly-Nvrmind</span> isn’t
              just a shop, it’s a whole new dimension.
            </p>
          </div>
          <div>
            <div className="w-[500px] h-full items-center justify-center flex flex-col">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black">
                SIGN UP
              </h1>
              <form
                className="flex flex-col items-center mt-10"
              >
                <div className="flex flex-col">
                  <input
                    type="name"
                    name="name"
                    required
                    className="rounded w-96 h-10 pl-4"
                    placeholder="Full Name"
                  />
                  <div className="relative">
                    <input
                      type="number"
                      name="number"
                      required
                      className="rounded w-96 h-10 pl-4 mt-2 mb-2"
                      placeholder="Phone Number"
                    />
                    <div className="flex flex-col">
                      <input
                        type="email"
                        name="email"
                        required
                        className="rounded w-96 h-10 pl-4"
                        placeholder="Email"
                      />
                      <div className="relative">
                        <input
                          name="password"
                          required
                          className="rounded w-96 h-10 pl-4 mt-2"
                          placeholder="Password"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >

                        </button>
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
                <Link to="/signin" className="text-sm text-black duration-200 hover:text-blue-700 ">
                  Log In?
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation> 
    </>
  );
};

export default SignUp;
