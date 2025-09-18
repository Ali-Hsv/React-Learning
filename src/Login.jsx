import React from 'react'

function Login() {
  return (

    <div className='flex flex-col items-center p-10 bg-slate-600 rounded-xl text-slate-300 gap-2'>
        <div className='flex flex-col items-center'>
            <h1>Write username</h1>
            <input className='bg-slate-400 text-white rounded' type="text" />
        </div>
        <div className='flex flex-col items-center'>
            <h1>Write password</h1>
            <input className='bg-slate-400 text-white rounded' type="text" />
        </div>

        <button className='mt-4 bg-slate-700 rounded-lg w-7/12 py-1 hover:bg-slate-800 '>Login</button>
    </div>

  )
}

export default Login