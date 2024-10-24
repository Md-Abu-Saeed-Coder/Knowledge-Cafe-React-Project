import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({hendleBookMark,sepentTimeHendeler}) => {

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
                blogs.map(blo=> <Blog hendleBookMark={hendleBookMark} sepentTimeHendeler={sepentTimeHendeler} key={blo.id} blog={blo}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    hendleBookMark:PropTypes.func,
    sepentTimeHendeler:PropTypes.func
    

}
export default Blogs;