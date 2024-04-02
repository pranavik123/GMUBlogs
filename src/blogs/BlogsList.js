import './Blogs.css';
const BlogsList = (props) =>{
    const blogs=props.blogs;
    return(
        <div className="blog-list">
        <h3>Blogs List</h3>


            {blogs.map((blog)=>(
                <div className="blog-pre" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} 
        </div>
    );
}
export default BlogsList;