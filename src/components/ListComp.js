import React, { useState } from "react";
import test from "../asset/images/search-main.jpg"
const ListComp = (props) => {
  const [showPara, setShowPara] = useState(false);

  function paraHandler() {
    setShowPara(true);
    console.log("works");
  }

  function falseParaHandler(e) {
    setShowPara(false);
  }

  return (
    <li
      className="flex flex-row w-full group text-4xl justify-between "
      onMouseEnter={paraHandler}
      onMouseLeave={falseParaHandler}
    >
      <div className="flex flex-row justify-center items-center">
      <div className="group-hover:bg-drkblue rounded-full  transition-all w-max m-2 p-2">
        <img className="w-12  " src={props.icon} />
      </div>
      <div>
        <div className="font-medium ">
        {props.message}
        </div>
        {showPara ? <div className="text-base font-normal max-w-lg">{props.descr}</div> : <></>}
        </div>
        </div>
        {showPara ?<div><img className="w-80 rounded-3xl hover:transition-all" src={props.imageFrame} /> </div>: <></>}
      
    </li>
  );
};

export default ListComp;
