import PropTypes from "prop-types";
import Book from "../Boook/Book";

const BookMark = ({ bookmark,sepentTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
      <p className="font-bold text-2xl text-center">Spent time on read :{sepentTime}</p>
      <h3 className="font-bold text-2xl text-center mt-10">
        Bookmarked Blogs :{bookmark.length}
      </h3>
      {
        bookmark.map(bmark=> <Book key={bmark.id} bookmark={bmark} ></Book>)
      }
    </div>
  );
};

BookMark.propTypes = {
  bookmark: PropTypes.object,
  sepentTime:PropTypes.func
};

export default BookMark;
