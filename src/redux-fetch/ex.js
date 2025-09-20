import React,{useState} from 'react';
import {useEffect} from 'react'
// import React from 'react';
export default function Ex(){
   const [loading,setLoading] = useState(true);
   const [error,setError] = useState(null);
    const [data,setData] = useState([]);
    useEffect(()=>{
       async function fetchData(){
                 try{
                    const dataResponse= await fetch("https://dummyjson.com/posts");
                    console.log("dataResponse",dataResponse);
                    if(!dataResponse.ok){
                        throw new Error(`HTTP error! status:${dataResponse.status}`)
                    }
                    const result=await dataResponse.json();
                    setData(result.posts);
                    console.log("result",result)
                    console.log("result.posts",result.posts)

                   
                 }
                 
                 catch(error){
                    setError(error);
                 }
                 finally{
                    setLoading(false);
                 }
    console.log("data",data)
               

        };
                            

            fetchData();
    },[]);
    
    if(loading){
        return<div>Loading data.....</div>
    }

    if(error){
        return<div>Errorfrom data:{error.message}</div>
    }

    return(
        <div>
            <h1>Fetch data by using async &await  wraping in side useEffect.</h1>
         
                { data.map(item=>{
                    return <li>{item.title}</li>})}
        
              
        </div>
    );
 }

