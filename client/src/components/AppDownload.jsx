import React from "react";
import MobileApp from "../Assets/Mobile-app.png";
import photo1 from "../Assets/app-store.png";
import photo2 from "../Assets/play-store.png";

const AppDownload = () => {
  return (
    <div className="flex h-[700px]">
      <div className="w-[50%] flex flex-col justify-center items-center">
        <h3 className="text-4xl text-white font-bold">DOWNLOAD APP</h3>
        <p className="w-[30%] mt-5 text-white text-center">
          Get 30% off for first transition using Honestly-Nvrmind mobile app for
          now
        </p>
        <div className="flex items-center mt-5">
          <img
            href="https://www.apple.com/in/app-store/"
            src={photo1}
            alt="app-store"
            className="w-[150px] h-[50px]"
          />
          <img
            href="https://play.google.com/store"
            src={photo2}
            alt="play-store"
            className="w-[200px] h-[80px]"
          />
        </div>
      </div>
      <div className="flex justify-center w-[50%]">
        <div className="flex justify-center items-center rounded-full bg-white w-[700px] h-[700px] ">
        <img src={MobileApp} alt="mobile-app" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
