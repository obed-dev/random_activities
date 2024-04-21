import { useState , useEffect } from 'react'
import './App.css'

function App() {
 
  const [type , setTypes ] = useState("");
  const [activity , setActivities  ] = useState("");
  const [participants , setParticipants  ] = useState("");
 


const apiURL = "https://www.boredapi.com/api/activity";

useEffect(() => { 
  
  
  const fetchData = async  () =>  {
  
  
  
  try {
  let res = await fetch(apiURL);
  let data = await res.json();
 
  setTypes(data.type);
  setActivities(data.activity);
  setParticipants(data.participants);
 
 
 
   
 } catch (error) {
   console.log('Error fetching data');
 }

}   
fetchData();
} , [] );








  return (
    <>

         <div className='card'>
         <ul>

       <h1>Activity: {activity}</h1> 
        <h2>Type: {type}</h2>
         <h3>Participants: {participants}</h3> 
    
        </ul>

        </div>
    </>
  )
}

export default App
