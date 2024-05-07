import { Link } from "react-router-dom";
import logo from "../asset/images/logo.svg";
import "../asset/style/tailwind.css";
import mySvg from "../asset/images/photoPlus.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { imageDb } from '../firebase'; 
import {db} from '../firebase';
import {listAll ,ref , uploadBytes } from "firebase/storage"


const Navbar = () => {
 
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  var x ;
  
   async function handleImageFile(e)  {

      setImageFile(e.target.files[0]);
      x= e.target.files[0];
   

  
     console.log(imageFile)
     try{
         const imgRef = ref(imageDb , `image/${x.name}`)
       await  uploadBytes(imgRef,x);
 
         console.log("Document written with ID: ", imgRef)
     }catch(e){
       console.error("Error adding document: ", e);
     }
 
    navigate("/ImageSearchResults");
  }

  async function uploadingHandler(e){
    e.preventDefault();

    
  }

  function uploadHandler(){

    navigate("/UploadItems")
  }
  return (
    <header className=" w-full  p-6 text-xl text-rgblue font-semibold">
      <div className="flex justify-between items-center">
        <Link to="/">
          <a>
            <img src={logo} className="w-20" />
          </a>
        </Link>

        <input
          className="rounded-full w-2/4 h-11 border-2 border-drkblue placeholder:pl-3"
          placeholder="Search..."
        
         
        />
        <a className="cursor-pointer">
          <label htmlFor="image-input">
            <img src={mySvg} className="w-10" />
          </label>
          <input
            type="file"
            name="image"
            className="hidden"
            id="image-input"
            accept="image/png, image/jpeg"
            onChange={handleImageFile}
          ></input>
        </a>
        <div className="flex gap-x-5 items-center">
          <div className="cursor-pointer" onClick={uploadHandler}>Upload Your Items</div>
          <a> Shop By Category</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
