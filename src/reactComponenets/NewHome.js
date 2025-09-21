import BlogsList from './BlogList';
import useFetch from './useFetch';
export default function NewHome(){

    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
 
    //  const [blogs,setBlog] = useState(null)
    //  const [isPending,setIsPending] = useState(true)
    //  const [error,setError] = useState(null)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //     fetch("http://localhost:8000/blogs")
    //     .then((response)=>{
    //         if(!response.ok){
    //             throw Error('cloud not fetch the data for that resource');
    //         }
    //         return response.json()
    //     })
    //     .then((data)=>{
    //         console.log("data",data);
    //        setBlog(data);
    //        setIsPending(false);
    //        setError(null);
    //     }) 
    //     .catch(err=>{
    //           setIsPending(false);
    //           setError(err.message);
    //     })
    // },1000);
    
    // },[])


    return(
        
        <div className="content">
     
            <h1>Home Page.</h1>
            {error&&<div>{error}</div>}
            {isPending&&<div>Loading......</div>}
         {   blogs&&<BlogsList blogs={blogs}  />}
            

           
        </div>
    )
}