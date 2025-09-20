import {useState} from 'react';
import BlogsList from './BlogList';
import {useEffect} from 'react'
export default function Home(){

   const [age,setAge]=useState(25)
    const [namse,setHome] = useState("wellcome") // wellcome is replays by the console value
     const [blogs,setBlog] = useState([
        {title:"happy new year",body:"hello",author:"pooja",id:1},
        {title:"poor dad and rich dad",body:"poor and rich",author:"teja",id:2},
        {title:"Mom's story",body:"mom's magic",author:"rishi",id:3},
        
     ])

     const [name,setNmae]=useState("mario")
    function handleClick(){
       setNmae ("hello pooja ")
       setHome("pooja")
    //    setAge("32")
      
    }


    function handleDelete(id){
        const delBlogs=blogs.filter(blog=>blog.id !== id);
        setBlog(delBlogs)
    }


    useEffect(()=>{
       console.log("useeffect Runs");
       console.log(blogs)
    },[])
    return(
        <div className="content">
            <h1>Home Page.</h1>
            <p>{name},{namse} </p>
            {/* {
                blog.map((blo)=>(
                    <div className="blog" key={blo.id}>
                        <h3>{blo.title}</h3>
                        <p>written by {blo.author}</p>
                    </div>))} */}

 {/* <BlogsList blog={blog} />// using props */}

            <BlogsList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogsList blogs={blogs.filter((blo)=>blo.author==="pooja")} title="pooja's Blogs!"/>
            <BlogsList blogs={blogs.filter((blo)=>blo.author==="teja")} title="teja's Blogs!"/>
            <BlogsList blogs={blogs.filter((blo)=>blo.author==="rishi")} title="rishi's Blogs!"/>


           
            <button onClick={handleClick}>Click</button>
        </div>
    )
}