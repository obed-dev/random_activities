import { useState , useEffect } from 'react'
import './App.css'

function App() {
 
  const [type , setTypes ] = useState("");
  const [activity , setActivities  ] = useState("");
  const [participants , setParticipants  ] = useState("");
 


const apiURL = "https://www.boredapi.com/api/activity?limit=1";

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

         <div >
         <ul>

        <ol><h1>Activity: {activity}</h1></ol>  
        <ol><p>Type: {type}</p></ol>  
        <ol> <p>Participants: {participants}</p> </ol>   
    
        </ul>

        </div>
    </>
  )
}

export default App
