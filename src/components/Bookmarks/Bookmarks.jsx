import { PropTypes } from 'prop-types';

function Bookmarks({blogs, times}) {
  return (
    <>
    <div className="lg:w-1/3">
    <div className="py-5 px-10 border border-blue-400 bg-blue-100 rounded-xl" >
        <h3 className="text-blue-500 font-bold">Spent time on read : {times} min</h3>
     </div>
      <div className="bg-slate-200 my-3 py-3 pl-3 rounded-lg">
        <h1 className="text-xl lg:text-4xl font-bold mt-2">Bookmarked Blogs : {blogs.length}</h1>
         

         {
           blogs.map((b, idx) => 
            <div key={idx} className="">
            <h1 className='p-5 bg-white m-2 rounded-md font-bold'>{b.title}</h1>
         </div>
           )
         }
      </div>
    </div>
    </>
  );
}

Bookmarks.propTypes = {
  blogs: PropTypes.array.isRequired,
  times: PropTypes.number.isRequired
}
export default Bookmarks;
