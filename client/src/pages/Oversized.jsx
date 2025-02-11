import Navbar from "../components/Navbar"
import photo from "../Assets/front-2.png"
import Footer from "../components/Footer"

const Oversized = () => {
  return (
    <><Navbar />
    <div className="flex flex-col justify-center items-center">
      <div className="w-[70%] mt-10">
        <h1 className="text-white text-5xl font-bold">Oversized</h1>
        <div className="text-white mt-5 font-semibold mb-10">
          <div className="font-poppins mt-3">
            <div>
              <img
                src={photo}
                alt="product"
                className="object-cover w-[400px] h-[550px] rounded-[20px]"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col mt-2">
                <h3 className="font-medium text-2xl leading-10">
                  Oversized T-Shirts
                </h3>
                <p className="text-lightWhite">Explore Now!</p>
              </div>
              {/* <div className="mt-6">
                <FaArrowRightLong className="size-6 text-lightGray hover:translate-x-2" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer /></>
  )
}

export default Oversized