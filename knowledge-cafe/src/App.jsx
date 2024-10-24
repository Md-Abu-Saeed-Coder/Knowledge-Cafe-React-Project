import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMark from "./components/BookMark/BookMark";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md:flex justify-between mx-4">
        <Blogs></Blogs>
        <BookMark></BookMark>
      </main>
    </>
  );
}

export default App;
