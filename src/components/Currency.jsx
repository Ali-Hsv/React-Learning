import React, { useState } from 'react'
import axios from 'axios';

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'
let API_KEY = 'fca_live_cI1FHquzqzjl2DkWczdoUBvolacHXxhV5lQOojRC'

function Currency() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('RUB');
  const [result, setResult] = useState();

  const exchange = async()=>{
    // console.log(amount)
    // console.log(fromCurrency)
    // console.log(toCurrency)
    // console.log(result)
    let response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    console.log((response.data.data[toCurrency]) * amount)
    const result = (response.data.data[toCurrency] * amount).toFixed(2)
    setResult(result)
  }

  return (
    <div className='flex flex-col justify-center items-center gap-5 border border-green-400'>
      <div className='text-slate-100 text-3xl w-full bg-green-950 p-4 flex text-center justify-center items-center'>
        <h2>Foreign exchange rate application</h2>
      </div>
      <div className='flex justify-between items-center h-1/2 p-3 gap-5'>
        <input value={amount} onChange={(e)=>{setAmount(e.target.value)}} id="amount" type="number" className='input-def' />

        <select onChange={(e)=>{setFromCurrency(e.target.value)}} name="" id="">
            <option>USD</option>
            <option>EUR</option>
            <option>RUB</option>
            <option>TRY</option>
        </select>

        <select onChange={(e)=>{setToCurrency(e.target.value)}} name="" id="">
            <option>RUB</option>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>

        <input value={result} onChange={(e)=>{setResult(e.target.value)}} id="result" type="number" className='input-def' />
      </div>

      <button
       onClick={exchange} 
      className='button-def mb-5'>Convert</button>
    </div>
  )
}

export default Currency