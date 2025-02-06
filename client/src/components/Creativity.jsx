import { TshirtCanvas } from "./canvas/Tshirt";
import {Link} from 'react-router-dom';

const Creativity = () => {
  return (
    <div className=" flex justify-evenly items-center gap-80 m-4 h-96 sm:m-8 md:m-12 lg:m-16 xl:m-20 bg-yellow-400 rounded-3xl">
      <div className="mr-36 h-80"><TshirtCanvas /></div>
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
          PAY-LESS
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ">
          SALE NOW
        </h1>
        <p className="w-80 mt-2 text-dullBalck font-poppins leading-normal text-black">
          Spend minimal RS 1000 get 15% off in your order
        </p>
        <Link to="/products"><button className="bg-black w-36 sm:w-60 md:w-72 lg:w-80 h-14 font-semibold text-white mt-6 rounded-lg  transition-bg transition-text duration-200 hover:bg-customGray hover:text-black">
          SHOP NOW
        </button>
        </Link>
      </div>
    </div>
  );
};
export default Creativity;
