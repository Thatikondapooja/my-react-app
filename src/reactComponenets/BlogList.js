export default function BlogsList({blogs}){
    return(
        <div>
            
               { blogs.map((blog)=>(
                     <div className="blog" key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>written by {blog.author}</p>
            
                    </div>) ) }

             
        </div>
    )
}