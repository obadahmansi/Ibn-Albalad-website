import Navbar from "./Navbar";
import ShopItem from "./ShopItem";
import SubHeader from "./SubHeader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function SearchResults() {


    const location = useLocation();
   console.log(location);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${location.state.value}`)
    .then((res) => res.json())
    .then(data => (setRecords(data) ));
  }, []);
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
  
            {records.map((list , index)=>(
                <ShopItem key={index} title={list.title} price={list.price} productImage={list.image}/>
            ))}
         
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
