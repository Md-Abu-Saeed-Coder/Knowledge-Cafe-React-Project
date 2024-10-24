import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("blog.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h3>Blogs:{blogs.length}</h3>
            {
                blogs.map(blo=> <Blog blog={blo}></Blog>)
            }
        </div>
    );
};

export default Blogs;