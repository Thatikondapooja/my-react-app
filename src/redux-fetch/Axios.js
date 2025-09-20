import {useState,useEffect} from 'react';
import axios from 'axios';
export default function Axios(){
  const [meals,setMeals] = useState([]);
useEffect(()=>{
    async function Meals(){
        try{
            const mealData=await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((response)=>{
             setMeals(response.data.meals);
             console.log("response",response);
             console.log("response.data.meals",response.data.meals);
           })
       if(!mealData.ok){
        throw new Error(`error mealStatus`,mealData.status)
       }
        
    }
  catch(error){
    console.log("error")
  }
finally{
    console.log("false")
}

    }
    Meals();
},[])

return(
    <div>
        {
            meals.map((meal)=>(
                <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400} />
            ))
        }
    </div>
)
}



//  this code same as above code but without async and await


// import { useEffect, useState } from 'react'
// import axios from 'axios'
// const Axios = () => {
//   const [meals, setMeals] = useState([])
//   useEffect(() => {
//     axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
//       .then((res) => {
//         setMeals(res.data.meals);
//       })
//   }, [])

//   return (
//     <div>
//       {meals.map((meal) => (
//       <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400}/>
//       ))}
//     </div>
//   )}


// above axios is a library for fetch the APIS in react . before use axios library first we need to install it.