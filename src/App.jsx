
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {


  return (
    <>
     
     <Header></Header>
    <div className="max-w-screen-xl mx-auto md:flex justify-between px-4 lg:px-0 mt-4">
        <Blogs/>
        <Bookmarks />
    </div>
    
    </>
  )
}

export default App
   