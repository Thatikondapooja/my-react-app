import { Link } from "react-router-dom";

export default function BlogsList({blogs}){
    return(
        <div>
            
               { blogs.map((blog)=>(
                     <div className="blog" key={blog.id}>
                        <Link to={`/blog/${blog.id}`}> 
                        <h3>{blog.title}</h3>
                        <p>written by {blog.author}</p>
                        </Link>
                       
            
                    </div>) ) }

             
        </div>
    )
}