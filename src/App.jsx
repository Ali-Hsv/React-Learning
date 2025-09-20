import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [firstName, setFirstName] = useState("Musteceb");
  const [lastName, setLastName] = useState("Memmedzade")

  useEffect(()=>{
    console.log("work every time")
  });

  useEffect(()=>{
    console.log("work in first render")
  }, []);

  useEffect(()=>{
    console.log("work in first render & when change firstName useState")
  }, [firstName]);

  useEffect(()=>{
    console.log("work in first render & when change lastName useState")
  }, [lastName]);

  return (
    <div className='flex flex-col text-2xl items-center gap-3'>
        <button onClick={()=>{setFirstName("Atas")}} className='p-3 px-5 rounded-xl bg-slate-700 hover:bg-slate-800 text-slate-200'>Change Name</button>
        <button onClick={()=>{setLastName("Memmedov")}} className='p-3 px-5 rounded-xl bg-slate-700 hover:bg-slate-800 text-slate-200'>Change Lastname</button>
    </div>
  )
}

export default App
