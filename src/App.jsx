import { useEffect, useState } from 'react'
import './styles/App.css'
import axios from 'axios'
import Currency from './components/Currency'

const BASE_URL = ''

function App() {

  return (
    <div className='w-full h-3/5 flex justify-center items-start'>
      <Currency/>
    </div>

  )
}

export default App
