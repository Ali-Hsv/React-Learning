import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('Ali');
  const [lastName, setLastName] = useState('Alisoy');

  const changeLastname = ()=>{
    setLastName('Besirli')
  }

  const [name, setName] = useState(["name1", "name2", "name3", "name4", "name5"]);


  return (
    <div className='flex flex-col text-2xl items-center'>
      <div className='flex flex-col items-center mb-5'>
        <p>{firstName}</p>      
        <p>{lastName}</p> 
      </div> 
      <div className=''>
        <button onClick={()=>{setFirstName("Mehemmed")}} className='rounded p-2 px-3 bg-slate-600 text-center text-white'>Change Name</button>
        <button onClick={changeLastname} className='ml-3 rounded p-2 px-3 bg-slate-600 text-center text-white'>Change Lastname</button>
      </div>   

      <div className='flex flex-col items-center mt-5'>
        {name.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>  
    </div>
  )
}

export default App
