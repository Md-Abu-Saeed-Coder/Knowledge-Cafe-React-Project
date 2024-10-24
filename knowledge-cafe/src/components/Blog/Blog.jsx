import PropTypes from "prop-types";
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({ blog ,hendleBookMark,sepentTimeHendeler}) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtag,
  } = blog;

  return (
    <div className="pb-20">
      <img src={cover} alt={`cover picther of the title ${title}`} />
      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-6 items-center">
          <div>
            <img className="w-[60px] h-[60px]" src={author_img} alt="" />
          </div>
          <div>
            <h3 className="font-bold text-2xl ">{author}</h3>
            <p className="font-semibold text-base text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="text-[#11111199] font-medium text-xl">
          {reading_time}min read <button onClick={()=>hendleBookMark(blog)}><MdOutlineBookmarks /></button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-[40px] font-bold">{title}</h2>
      </div>
      <p><a href="">{hashtag}</a></p>
      <button onClick={()=>sepentTimeHendeler(id,reading_time)} className="mt-3 underline text-fuchsia-800 text-xl">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  hendleBookMark:PropTypes.func,
  sepentTimeHendeler:PropTypes.func
    
  }

export default Blog;
