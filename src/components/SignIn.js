import { GoogleLogin } from "@react-oauth/google";
import { useState , useContext } from "react";
import {searchImage} from "../Context/WebsiteContext"

function SignIn() {

    const [signedIn , setSignedIn] = useContext(searchImage)
    return (
        <div>
            {/* <Navbar/> */}
            <div className="flex h-screen">
                <div className="w-full ">
                    <div className="text-center font-semibold px-8 text-6xl h-full justify-center flex items-center">
                        Opening new horizons for new trading concept
                    </div>
                </div>
                <div className="flex  w-full">
                    <form className=" justify-center flex  text-drkblue :rounded-full *:w-2/4 *:mb-6 w-full  flex-col text-xl rounded-lg items-center text-center bg-lightblue ">
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                                setSignedIn(true);
                            }}
                            onError={() => {
                                console.log("Login Failed");
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
