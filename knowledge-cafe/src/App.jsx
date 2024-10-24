import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMark from "./components/BookMark/BookMark";
import Header from "./components/Header/Header";

function App() {
  const [bookmark,setmark]=useState([])
  const [sepentTime,setSepentTime]=useState(0)

  const sepentTimeHendeler=(id,time)=>{
    const newtime=sepentTime+time
    setSepentTime(newtime)
    // Remove the BooK Mark 
    const remaningBookMark=bookmark.filter(book=>book.id !==id)
    setmark(remaningBookMark)
  }

  const hendleBookMark=mark=>{
    const newMark=[...bookmark,mark]
    setmark(newMark)
  
  }
  return (
    <>
      <Header className="max-w-7xl mx-auto"></Header>
      <main className="md:flex justify-between gap-6 max-w-7xl mx-auto">
        <Blogs hendleBookMark={hendleBookMark} sepentTimeHendeler={sepentTimeHendeler}></Blogs>
        <BookMark bookmark={bookmark} sepentTime={sepentTime}></BookMark>
      </main>
    </>
  );
}

export default App;
