import { useEffect } from 'react';
import Blog from './../Blog/Blog';
import { useState } from 'react';
function Blogs() {

const [blogs, setBlogs] = useState([])

  useEffect( ()=> {
      fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
    } , [])
  return (
    <div className="lg:w-3/5">
      {

        blogs.map((b) => <Blog key={b.id} blog={b}></Blog> )
      }
    </div>
  )
}

export default Blogs