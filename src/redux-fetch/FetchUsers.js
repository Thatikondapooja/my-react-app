import {useState,useEffect} from 'react';
export default function FetchUsers(){
    const [users,setUser] = useState([])
    
    useEffect(()=>{
     async function DisplayUsers(){
        try{
        const userdata=await fetch('https://dummyjson.com/users')
         if(!userdata.ok){
            throw new Error('error status',userdata.status);
        }
        const user=await(userdata.json())
        console.log("user",user.users)
        setUser(user.users)
    }
        catch(error){
            console.log("Ooops...! Error");
        }
        finally{
            console.log("finally data");
        }
  
     }
     DisplayUsers()
    },[])

return(
    <div>
        <h1>users data</h1>
        {
            users.map((user)=>{
                return(
                    <div key={user.id}>
                        {user.firstName}
                          {user.age}
                    </div>
                )
            })
        }
    </div>
)
}