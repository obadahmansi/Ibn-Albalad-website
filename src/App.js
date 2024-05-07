import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useActionData,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader";
import HomeFirst from "./components/HomeFirst";
import SignUp from "./components/SignUp";
import SearchResults from "./components/SearchResults";
import SignIn from "./components/SignIn";
import ImageSearchResults from "./components/ImageSearchResults";
import React, { useState } from "react";
import { searchImage } from "./Context/WebsiteContext";
import "./App.css"
import UploadingItems from "./components/UploadingItems";
export const Context = React.createContext();

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <searchImage.Provider value={[signedIn, setSignedIn]}>
 
      <BrowserRouter>
        
        <Routes>
          {!signedIn ? (
              <Route path="/" element={<SignIn />} />
          ) :<></>}
           <Route path="/" element={<HomeFirst />}></Route>
          <Route path="SearchResults" element={<SearchResults />} />
          <Route path="ImageSearchResults" element={<ImageSearchResults />} />
          <Route path="UploadItems" element={<UploadingItems />} />
        </Routes>
      </BrowserRouter>
    </searchImage.Provider>
  );
}

export default App;
