import {useState} from 'react';
import BlogsList from './BlogList';
import {useEffect} from 'react'
export default function NewHome(){

     const [blogs,setBlog] = useState(null)
     const [isPending,setIsPending] = useState(true)

  
    
    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then((response)=>{
            return response.json()})
         
        .then((data)=>{
            console.log("data",data)
           setBlog(data)
           setIsPending(false)
        }) 
    
    },[])
    return(
        <div className="content">
            <h1>Home Page.</h1>
            {isPending&&<div>Loading......</div>}
         {   blogs&&<BlogsList blogs={blogs}  />}
            

           
        </div>
    )
}