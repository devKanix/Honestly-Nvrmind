import React from "react";
import MobileApp from "../Assets/Mobile-app.png";

const AppDownload = () => {
  return (
    <div className="flex h-[700px]">
      <div className="w-[50%] flex flex-col justify-center items-center">
        <h3 className="text-2xl text-white font-bold">DOWNLOAD APP</h3>
        <p className="w-[30%] mt-5 text-white text-center">
          Get 30% off for first transition using Honestly-Nvrmind mobile app for now
        </p>
      </div>
      <div className="flex justify-center w-[50%]">
      <div className="rounded-full bg-slate-400 h-[500px] ">
        <img src={MobileApp} alt="Mobile-app" />
    </div>
      </div>
    </div>
  );
};

export default AppDownload;
