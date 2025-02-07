import photo1 from "../Assets/front-2.png";
import photo2 from "../Assets/back.png";
import YoungFavouriteCard from "./YoungFavouriteCard";

const YoungFavourite = () => {
  return (
    <div className="text-white w-full flex flex-col gap-12 my-12">
      <div className="ml-80 font-poppins font-bold text-4xl">
        <h1>YOUNG'S FAVOURITE</h1>
      </div>

      <div
        className="flex flex-wrap justify-center gap-10"
      >
        <YoungFavouriteCard photo={photo1} description={"Trending on instagram"} />
        <YoungFavouriteCard photo={photo2} description={"All under Rs 800"} />
      </div>
    </div>
  );
};

export default YoungFavourite;
