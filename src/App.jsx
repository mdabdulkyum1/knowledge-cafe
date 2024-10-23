import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
 const [blogs, setBlogs] = useState([])

 const [times, setTime] = useState(0)

 const handelBookmarks = (blog , time) => {
    const remainingBlog = [...blogs, blog];
    setBlogs(remainingBlog)
    setTime(times+time)
    
 }

  return (
    <>
     
     <Header></Header>
    <div className="max-w-screen-xl mx-auto md:flex justify-between px-4 lg:px-0 mt-4">
        <Blogs handelBookmarks={handelBookmarks}/>
        <Bookmarks blogs={blogs} times={times}/>
    </div>
    
    </>
  )
}

export default App
   