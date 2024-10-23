import { useEffect } from 'react';
import Blog from './../Blog/Blog';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
function Blogs({handelBookmarks}) {

const [blogs, setBlogs] = useState([])

  useEffect( ()=> {
      fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
    } , [])
  return (
    <div className="lg:w-3/5">
      {
        blogs.map((b) => <Blog key={b.id} blog={b} handelBookmarks={handelBookmarks}></Blog> )
      }
    </div>
  )
}

Blogs.propTypes = {
  handelBookmarks: PropTypes.func,
}

export default Blogs