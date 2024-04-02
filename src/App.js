import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import BlogList from './blogs/BlogsList';
import { useState } from 'react';
function App() {
  const title = "Homepage";
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'React Hooks Tutorial', author: 'John Doe' },
    { id: 2, title: 'JavaScript Best Practices', author: 'Jane Smith' },
    { id: 3, title: 'Introduction to CSS Grid', author: 'Chris Johnson' }
  ]);
  const addBlog =() =>{
      const newBlog = {id:Date.now(),title:'New Blog',author:'Pranavi'};
      setBlogs([...blogs, newBlog]);
  };
  return (
    <div className="App">
      <Navbar/>
      <div className="Blogs">
      <button onClick={addBlog}>Add New Blog</button>
        <BlogList blogs={blogs}/>
      </div>
    </div>
  );
}

export default App;
