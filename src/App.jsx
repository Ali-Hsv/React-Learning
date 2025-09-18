import { useState } from 'react'
import './App.css'
import Login from './Login'

function App() {

  return (
    <div className='flex flex-col gap-5'>
      <Login/>
      <hr />
      <Login/>
    </div>
  )
}

export default App
