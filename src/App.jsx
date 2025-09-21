import { useEffect, useState } from 'react'
import './styles/App.css'
import axios from 'axios'

const BASE_URL = 'http://localhost:3005'

function App() {

  const getAllUsers = async() => {
    const response = await axios.get(BASE_URL + '/users');
    console.log(response.data)
  }

  const getUserById = async(userId) => {
    const responseId = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(responseId.data)
  }

  useEffect(() => {
    // getAllUsers();
    getUserById(1);
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
