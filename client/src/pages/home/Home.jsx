import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {axiosInstance} from "../../config"

export default function Home() {
  const {search} = useLocation();
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axiosInstance.get("/api/posts"+search)
      setPosts(res.data);
    }

    fetchPosts()

  },[search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        <Sidebar />
      </div>
    </>
  );
}
