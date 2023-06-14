import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./loginPage.css";
import classes from "./loginPage.module.css";
const LoginPage = (event) => {
  const Navigate = useNavigate();

  const [enteredUserData, setEnteredData] = useState({
    email: "",
    passWord: "",
  });
  const emailChangeHandler = (e) => {
    setEnteredData({ ...enteredUserData, email: e.target.value });
  };
  const passWordChangeHandler = (e) => {
    setEnteredData({ ...enteredUserData, passWord: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "post",
      url: "https://ea-ham-backend.onrender.com/loginPost",
      data: enteredUserData,
    });
    const userType = res.data.userType;
    if (res.data.user) {
      localStorage.setItem("token", res.data.user);

      // alert("Login successful");
      if (userType === "normalUser") {
        Navigate("/");
      } else if (userType === "admin") {
        Navigate("/");
      } else if (userType === "normalClubMembers") {
        Navigate("/");
      }
    } else {
      alert("Please check your email and password");
      window.location.reload(false);
    }
  };
  const signUpHandler = () => {
    Navigate("/signUp");
  };
  const forgotPassWordHandler = () => {
    Navigate("/forgotPassWord");
  };
  return (
    <>
      <button onClick={()=>{Navigate(-1)}}>Back</button>
      <form  onSubmit={submitHandler}>
        <h3 style={{background:"transparent"}}>Login Here</h3>

        <label for="email">Email</label>
        <input
          placeholder="Email"
          type="text"
          onChange={emailChangeHandler}
          value={enteredUserData.email}
        />

        <label for="password">Password</label>
        <input
          placeholder="Password"
          id="password"
          type="text"
          onChange={passWordChangeHandler}
          value={enteredUserData.passWord}
        />
      <button type="submit" >
        Log In
      </button>
      <button onClick={signUpHandler}>SignUp</button>
      <button onClick={forgotPassWordHandler}>Forgot Password?</button>
      </form>
    </>
  );
};

export default LoginPage;
