import React from "react";
import logo from "../asset/images/logo.svg";
const MarketingCard = (props) => {
  return (
    // Container
    <div className="bg-drkblue hover:bg-blue-700 hover:transition-all cursor-pointer text-white flex flex-col gap-3 p-6 max-w-sm r rounded-xl items-center text-center justify-between">
      <div >
        <img src={props.icon} className="w-14" />
      </div>
      <div className="text-xl">
        <h2>{props.h2Text}</h2>
      </div>
      <div className="font-normal">
        <h3>{props.h3Text}</h3>
      </div>
    </div>
  );
};

export default MarketingCard;
