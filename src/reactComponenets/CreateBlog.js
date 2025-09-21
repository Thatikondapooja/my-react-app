import {useState} from 'react';
// import {useHistory} from 'react-router-dom';
export default function CreateBlog(){
    const[title,setTitle] = useState("")
    const[text,setText] = useState("")
    const[author,setAutor] = useState("teja")
    const[pendng,setIsPending] = useState(false)
    // const history=useHistory()

   function addTitle(e){
      setTitle(e.target.value)
      
    }  
     function addText(e){
      setText(e.target.value)
     }
     function addAuthor(e){
      setAutor(e.target.value)
     }

    function AddBlogs(e){
        e.preventDefault()
        const blog={title,text,author};
        setIsPending(true)

        // console.log(blog);
        fetch("http://localhost:8000/blogs",{
             method:'POST',
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify(blog)
            }).then(()=>{
                console.log("New Blog Added");
                setIsPending(false)
                //   history.push('/')
            })

          
    } 


     return(
        <div>
            <h2>Create New Blogs</h2><br></br>
            <form>
                <label>
                    Blog Title
                </label><br></br>
                <input type="text" value={title} onChange={addTitle} required/><br></br><br></br>
                <label>Blog body</label><br></br>
                <textarea placeholder="text here" value={text} onChange={addText}></textarea><br></br><br></br>
                <label>Author</label><br></br>
                <select value={author} onChange={addAuthor}>
                    <option value="pooja"> pooja</option>
                    <option value="teja"> teja</option>
                    <option value="rishi"> rishi</option>

                </select><br></br>
                {!pendng&&<button onClick={AddBlogs}>Add Blog</button>}
                {pendng&&<button Desabled >Adding Blog....</button>}


            </form><br></br><br></br>
           {/* { !pending&&<button onClick={AddBlogs}>Add Blog</button>} */}

          


        </div>
    )
}