import React from 'react'

function Currency() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 border border-green-400'>
      <div className='text-slate-100 text-3xl w-full bg-green-950 p-4 flex text-center justify-center items-center'>
        <h2>Foreign exchange rate application</h2>
      </div>
      <div className='flex justify-between items-center h-1/2 p-3 gap-5'>
        <input value={0} id="amount" type="number" className='input-def' />
        <select name="" id="">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">RUB</option>
            <option value="">AZN</option>
            <option value="">TL</option>
        </select>
        <select name="" id="">
            <option value="">EUR</option>
            <option value="">USD</option>
            <option value="">RUB</option>
            <option value="">AZN</option>
            <option value="">TL</option>
        </select>
        <input value={0} id="result" type="number" className='input-def' />
      </div>
      <button className='button-def mb-5'>Convert</button>
    </div>
  )
}

export default Currency