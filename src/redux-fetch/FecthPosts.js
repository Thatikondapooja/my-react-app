import { useDispatch, useSelector } from "react-redux";
import {addposts,removePost} from './PostsSlice';
import {useState} from 'react';
export default function FetchPosts(){
    const dispatch = useDispatch()
    const useS=useSelector((state)=>(state.post.posts))
    console.log("useSelector",useS)// it reads the  data from the redux store.it can use in any component.
   
    const [post,setPost] = useState([])
    
     function FecthingPosts(){
      fetch("https://dummyjson.com/posts")
     .then((response)=>response.json())
     .then (data=>{console.log("data",data)
        let ss =setPost(data.posts)
        console.log(ss)
         console.log("data",data);
        
     console.log("dataposts",data.posts);

     let dispacthdata=dispatch(addposts(data.posts));    
     console.log("dispatch",dispacthdata);  // it can dispatch the payload. 
    //   let redispacthdata=dispatch(removePost(data.posts));    
    //  console.log("redispatch",redispacthdata);  // it can dispatch the payload. 
      
        
})
    }
      console.log("setvatr",post);
return(
    <div>
     
        <h1>Posts</h1>
        <div>
          {
          useS.map((post)=>
            (<p key={post.id}>{post.title}</p>))
            }
         {/* // here we can map the posts by using useSelectorvariable we can also map that post by using the useState also . */}
       </div>
        <button onClick={FecthingPosts}>Add Posts</button>
    </div>
)
}