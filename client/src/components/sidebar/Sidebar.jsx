import React from "react";
import {axiosInstance} from "../../config"
import { useState, useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(()=>{
    const getCats = async () =>{
      const res = await axiosInstance.get("/api/categories")
      setCats(res.data)
    }

    getCats();
  },[])
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsCZhu7x_5zyALJEBUXomJ8MAQzT1Cd04YOg&usqp=CAU"
          alt=""
        />
        <p> Hey Bloggers Welcome to our Blog App. I hope You are enjoying our blogs and also telling some of the best stories of 
         your life through Blog.<br/><br/> This is a platform made to just tell the stories to the world. </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATGORIES</span>
        <ul className="sideBarList">
        {cats.map((c) => (
          <Link to = {`/?cat=${c.name}`} className="link"><li className="sideBarListItem">{c.name}</li></Link>
          
        ))}
         
        </ul>
      </div>
    </div>
  );
}
