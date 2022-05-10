import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {axiosInstance }from "../../config"

export default function Register() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try{
      const res = await axiosInstance.post("/api/auth/register",{
        username,
        email,
        password,
      })
      res.data && window.location.replace("/login")
    }catch(err){
      console.log(err);
      setError(true);
    }
    
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit = {handleSubmit}className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange = {e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange = {e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange = {e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type = "submit">REGISTER</button>
      </form>
      <button className="registerLoginButton ">
        {" "}
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
      {error && <span style= {{color: "tomato"}}>Something went wrong!</span>}
    </div>
  );
}
