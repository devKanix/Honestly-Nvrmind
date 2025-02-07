import { FaArrowRightLong } from "react-icons/fa6";

const YoungFavouriteCard = ({ photo, description }) => {
  return (
<div className="font-poppins">
      <div>
        <img
          src={photo}
          alt="product"
          className="object-cover w-[620px] h-[550px] rounded-[20px]"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col mt-2">
          <h3 className="font-medium text-2xl leading-10">{description}</h3>
          <p className="text-lightWhite">Explore Now!</p>
        </div>
        <div className="mt-6">
          <FaArrowRightLong className="size-6 text-lightGray hover:translate-x-2" />
        </div>
      </div>
    </div>
  )
}

export default YoungFavouriteCard