import photo1 from "../Assets/front-2.png";
import photo2 from "../Assets/back.png";
import photo3 from "../Assets/front.png";
import { Link } from "react-router-dom";

import NewArrivalCard from "./NewArrivalCard";

const NewArrivals = () => {
  return (
    <div className="text-white w-full flex flex-col gap-12 my-12">
      <div className="ml-80 font-poppins font-bold text-4xl">
        <h1>NEW ARRIVALS</h1>
      </div>

      <div
        className="flex flex-wrap justify-center gap-10"
      >
        <Link to="/oversized"><NewArrivalCard photo={photo1} description={"Oversized T-Shirts"} /></Link>
        <Link to="/special"><NewArrivalCard photo={photo2} description={"H-N Special"} /></Link>
        <Link to="/compresive"><NewArrivalCard photo={photo3} description={"Compresive T-Shirt"} /></Link>
      </div>
    </div>
  );
};

export default NewArrivals;
