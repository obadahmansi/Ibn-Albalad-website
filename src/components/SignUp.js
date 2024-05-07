import Navbar from "./Navbar";
import { useState } from "react";
import logo from "../asset/images/logo.svg";
import { Link } from "react-router-dom";

function SignUp() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div>
      {/* <Navbar/> */}
      <div className="flex h-screen">
        <div className="w-full ">
          <Link to="/"><a className="absolute flex h-max">
           
            <img src={logo} className="w-20 m-6" />
          </a></Link>

          <div className="text-center font-semibold px-8 text-6xl h-full justify-center flex items-center">
          Opening new horizons for new trading concept 
          </div>
        </div>
        <div className="flex  w-full">
          <form className=" justify-center flex  text-drkblue :rounded-full *:w-2/4 *:mb-6 w-full  flex-col text-xl rounded-lg items-center text-center bg-lightblue ">
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input
              onChange={handleName}
              className="input rounded-full w-2/4 h-11 text-center"
              value={name}
              type="text"
            />

            <label className="label">Email</label>
            <input
              onChange={handleEmail}
              className="text-center input rounded-full w-2/4 h-11"
              value={email}
              type="email"
            />

            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="text-center input rounded-full w-2/4 h-11"
              value={password}
              type="password"
            />

            <button
              onClick={handleSubmit}
              className="btn rounded-full p-3 bg-drkblue text-lightblue"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
