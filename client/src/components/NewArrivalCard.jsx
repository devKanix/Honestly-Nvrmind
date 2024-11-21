import { FaArrowRightLong } from "react-icons/fa6";
const NewArrivalCard = ({ photo, description }) => {
  return (
    <div className="font-poppins">
      <div className="">
        <img
          src={photo}
          alt="product"
          className="object-cover w-[400px] h-[550px] rounded-[20px] "
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col mt-2">
          <h3 className="font-medium text-2xl leading-10">{description}</h3>
          <p className="text-lightWhite">Explore Now!</p>
        </div>
        <div className="mt-6">
          <FaArrowRightLong className="size-6 text-lightGray" />
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
