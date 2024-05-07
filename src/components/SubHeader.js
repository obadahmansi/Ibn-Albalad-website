import "../asset/style/tailwind.css";
import { Link } from "react-router-dom";
function SubHeader(){

  return(
    <div>
      <ul className="border-t-2 border-b-2 pb-2 pt-2 flex justify-around text-xl font-semibold ">
        <Link to="/">
        <li className ="hover:opacity-70">
          Home
        </li>
        </Link>
        <li className ="hover:opacity-70">
          Wishlist
        </li>
        <li className ="hover:opacity-70">
          Fashion
        </li>
        <li className ="hover:opacity-70">
          Health & Beauty
        </li >
        <li className ="hover:opacity-70"> 
          Indeustial equipment
        </li>
        <li className ="hover:opacity-70">
          Electronics
        </li>
        <li className ="hover:opacity-70">
          Sports
        </li>
      </ul>
    </div>
  )
}

export default SubHeader;