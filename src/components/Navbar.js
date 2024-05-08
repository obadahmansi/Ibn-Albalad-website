import { Link } from "react-router-dom";
import logo from "../asset/images/logo.svg";
import "../asset/style/tailwind.css";
import mySvg from "../asset/images/photoPlus.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { imageDb } from "../firebase";
import { db } from "../firebase";
import { listAll, ref, uploadBytes } from "firebase/storage";

const Navbar = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [searchText, setSearchText] = useState();
  const fileInputRef = useRef(null)
  var x;

  async function handleImageFile(e) {

    const files =fileInputRef.current.files;

    console.log(files)

    const formData = new FormData();

    formData.append("file" , files[0])

    try{
      const response = await fetch("http://localhost:5000/uploads" ,{
        method:"POST",
        body:formData
      });

      const data = await response.json();
      console.log(data.files)
      console.log("end of try")
    }catch(error){
      console.log("error uploading file")
      console.log(error)
    }

    setImageFile(e.target.files[0]);
    x = e.target.files[0];

    console.log(imageFile);
    try {
      const imgRef = ref(imageDb, `image/${x.name}`);
      await uploadBytes(imgRef, x);

      console.log("Document written with ID: ", imgRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    navigate("/ImageSearchResults", { state: { value: e.target.files[0] } });
  }

  function textHandler(e) {
    setSearchText(e.target.value);
    console.log(e.target.value);
  }
  function uploadHandler() {
    navigate("/UploadItems");
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
          onChange={textHandler}
          value={searchText}
          onKeyDown={(e) => {
            if (e.key == "Enter" && searchText != "") {
              navigate("/");
              navigate("/SearchResults", { state: { value: searchText } });
            }
          }}
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
            ref={fileInputRef}
            onChange={handleImageFile}
          ></input>
        </a>
        <div className="flex gap-x-5 items-center">
          <div className="cursor-pointer" onClick={uploadHandler}>
            Upload Your Items
          </div>
          <a> Shop By Category</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
