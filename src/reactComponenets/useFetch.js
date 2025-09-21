import {useState,useEffect} from 'react';
export default function useFetch(url){
// this code is component for fetch the api .we can use it in any component. custom hook. here we can identifies the custom hooks by see the component name when component start with a "use" like "useFetch" it is a custom hook.and it returns the state values like this return { data, isPending, error };
  const [data,setData] = useState(null)
     const [isPending,setIsPending] = useState(true)
     const [error,setError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
        fetch(url)
        .then((response)=>{
            if(!response.ok){
                throw Error('cloud not fetch the data for that resource');
            }
            return response.json()
        })
        .then((data)=>{
            console.log("data",data);
           setData(data);
           setIsPending(false);
           setError(null);
        }) 
        .catch(err=>{
              setIsPending(false);
              setError(err.message);
        })
    },1000);
    
    },[url])
    return(
    
       {data,isPending,error}
    
    )
}



// same code but using async and await.

// import { useState, useEffect } from 'react';

// export default function useUserData(url) {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // simulate delay (optional)
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error("could not fetch the data for that resource");
//         }

//         const result = await response.json();
//         setData(result);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsPending(false); // always stop loading
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, isPending, error };
// }
