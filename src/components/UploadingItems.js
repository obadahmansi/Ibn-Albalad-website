import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadingItems = () => {
  const [productName, setProductName] = useState();
  const [imageName, setImageName] = useState();
  const [descriptionName, setDescriptionName] = useState();
  const [priceName, setPriceName] = useState();
  const navigate = useNavigate();

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/csv": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      // Call your backend API endpoint to upload files
    },
  });

  function nameHandler(e) {

   setProductName(e.target.value);

  }
  function imageHandler(e) {setImageName(e.target.value)}
  function descriptionHandler(e) {setDescriptionName(e.target.value)}
  function priceHandler(e) {setPriceName(e.target.value)}

  function sumbitHandler(){

    if(productName && imageName && priceName && descriptionName && uploadedFiles.length > 0){
        alert("Your file have been uploaded field ❤")
        navigate("/")
    }else{
        alert("you are missing some fields")
        console.log(uploadedFiles.length);
    }
  }

  return (
    <div className="">
      <Navbar />

      <div className="bg-lightblue ">
        <Section>
          <div className="flex flex-row justify-around">
            <div
              {...getRootProps()}
              className="bg-white text-xl p-8 rounded-xl cursor-pointer text-center border-2 border-dashed border-drkblue justify-center gap-5 items-center flex flex-col"
            >
              <input {...getInputProps()} />
              <div> <p className=" font-semibold">Drag and drop files here or click to browse.</p>
              <p>Note: One file is the maximum number</p></div>
             
              <ul>
                {uploadedFiles.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col justify-center text-center">
                  <div className="text-4xl font-semibold ">Columns name</div>
                  <div>
                    Note: In this section you need to type the column name
                    related to the input file according to the column name in
                    your *.CSV file
                  </div>
                </div>

                <form className="flex flex-col gap-8 w-96 font-semibold">
                  <div className="flex flex-row gap-4 justify-around ">
                    <label>Product Name Column</label>
                  
                    <input
                      type="text"
                      required
                      id="productName"
                      className="rounded-md p-2 border-drkblue border-2"
                      placeholder="ex: Product_Name_column"
                      onChange={nameHandler}
                    ></input>
                  </div>
                  <div className="flex flex-row gap-4 justify-around">
                    <label>Product Image Column</label>
                   
                    <input
                      type="text"
                      required
                      id="productName"
                      className="rounded-md p-2 border-drkblue border-2"
                      placeholder="ex: Product_Image_column"
                      onChange={imageHandler}
                    ></input>
                  </div>
                  <div className="flex flex-row gap-4 justify-around">
                    <label>Product Description Column</label>
                   
                    <input
                      type="text"
                      required
                      id="productName"
                      className="rounded-md p-2 border-drkblue border-2"
                      placeholder="ex: Product_Description_column"
                      onChange={descriptionHandler}
                    ></input>
                  </div>
                  <div className="flex flex-row gap-4 justify-around">
                    <label>Product Price Column</label>
                  
                    <input
                      type="text"
                      required
                      id="productName"
                      className="rounded-md p-2 border-drkblue border-2"
                      placeholder="ex: Product_Price_column"
                      onChange={priceHandler}
                    ></input>
                  </div>
                  <input
                    type="button"
                    value="Submit"
                    onClick={sumbitHandler}
                    className="rounded-full bg-drkblue p-4 text-white text-2xl"
                  />
                </form>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default UploadingItems;
