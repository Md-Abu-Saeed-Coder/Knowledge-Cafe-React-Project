import PropTypes from 'prop-types'; 

const Book = ({bookmark}) => {
    console.log(bookmark)
   const {title}=bookmark ;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-s-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};


Book.propTypes = {
    bookmark:PropTypes.object
}

export default Book;