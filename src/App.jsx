import { useEffect, useState } from 'react'
import './App.css'

function App() {

  
  const [number1, setNumberOne] = useState(0);
  const [number2, setNumberTwo] = useState(0);

  const [obResult, setObResult] = useState("No Result");

  const findAverage = () => {
    const totalResult = average() / 2;
    wright(totalResult);
  }

  const average = () => {
    const total = (number1 + number2);
    debugger;
    return total;
  }

  const wright = (result)=>{
    debugger;
    console.log(`Result is - ${result}`);
    setObResult(`Result is - ${result}`);
  }



  return (
    <div className='flex-col-item text-2xl gap-3'>

      <input type="number" className='input-def' value={number1} onChange={(e)=> setNumberOne(Number(e.target.value))}/>

      <input type="number" className='input-def' value={number2} onChange={(e)=> setNumberTwo(Number(e.target.value))}/>

      <button onClick={findAverage} className='button-def'>Find The Average</button>

      <div>{obResult}</div>
    </div>
  )
}

export default App
