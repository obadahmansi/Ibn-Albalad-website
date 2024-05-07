import Navbar from "./Navbar";
import ShopItem from "./ShopItem";
import SubHeader from "./SubHeader";
import { useEffect, useState } from "react";
import gpu1 from "../asset/images/gpu1.jpeg"


function ImageSearchResults() {



  return (
    <div>
      <div>
        <Navbar />
        <SubHeader />
      </div>
      {/* Shoping Items Page */}
      <div className="flex w-screen justify-between mt-6">
        <div>
          {/* fillter */}
          <div className="*:mb-6 bg-bgblue rounded-3xl p-4 m-3">
            <div className="  text-3xl font-semibold">Filters</div>

            <div className="flex flex-col ">
              <div className="text-2xl font-medium">Features</div>
              <form className="text-l font-normal">
                <input type="checkbox" value="Verified Factory"></input>
                <label htmlFor="vehicle1">
                  Verified Factory
                  <br />
                </label>
                <input type="checkbox" value="Verified Distributor"></input>
                <label htmlFor="vehicle1">Verified Distributor</label>
              </form>
            </div>
            <div>
              <div className="text-2xl font-medium">Price </div>
              <form className="flex *:rounded-full *:placeholder:pl-2" >
                <input

                  type="number"
                  className="border-2 w-1/3"
                  placeholder="min"
                ></input>
                <div>-</div>
                <input
                  type="number"
                  className="border-2 w-1/3"
                  placeholder="max"
                ></input>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full px-6 flex flex-col gap-5 *:border-b-[1px] *:border-black-700 *:pb-5">

        {/* Here should be the image detection results */}
          <div className="w-full bg-gray-100 rounded-xl p-1 flex justify-between "> 
          <div className="flex text-3xl gap-5"> <img className="p-5 rounded-xl max-w-xs" src={gpu1}/>
          <div className="flex flex-col justify-between font-semibold">
            <div>Search Results for ...</div>
            <div>Showing 200000+ product for the item</div>
          </div>
          </div>
        
          <div className="flex flex-col justify-evenly font-semibold">
            <div className="w-full bg-gray-300 rounded-3xl p-1 flex flex-col items-center content-center justify-self-center justify-center">
              <h3>91%</h3>
              <h4>Detection accuracy</h4>
            </div>
            <div className="flex justify-between gap-5">
              <a className="bg-green-400 p-4 cursor-pointer rounded-full">
                agree
              </a>
              <a className="bg-red-400 p-4 cursor-pointer rounded-full">
                Disagree
              </a>
            </div>
          </div>
          
           </div>
            {/* Here should be the list of images results */}
         
        </div>
      </div>
    </div>
  );
}

export default ImageSearchResults;
