import {useParams} from 'react-router-dom'
// import BlogsList from './BlogList';
import useFetch from './useFetch';
export default function BlogDetails(){
    const { id }=useParams()
        const {data:blog, isPending, error} = useFetch("http://localhost:8000/blogs/"+id)
    //  const history=useHistory()
       


        function handleDelete(){

            fetch("http://localhost:8000/blogs/"+blog.id,{
             method:'DELETE',
             
            }).then(()=>{
                console.log("New Blog Added");
                //   history.push('/')
            })
        }
    return(
        <div>
            <h2>Blog Details-{id}</h2>
                        {isPending&&<div>Loading......</div>}
                         {error&&<div>{error}</div>}
                     {   blog&&(
                        <article>
                            <h2>{blog.title}</h2>
                          <p>{blog.body}</p>
                           <button onClick={handleDelete}>delete</button>
                        </article>
                     )}
        </div>
    )
}