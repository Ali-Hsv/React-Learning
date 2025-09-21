import { useEffect, useState } from 'react'
import './styles/App.css'
import Header from './Header'
import { projects } from './Data'
import Courses from './Courses'

function App() {

  return (
    <>
      <Header />
      <div className='my-6 w-full h-auto flex flex-col lg:flex-row items-center lg:items-start justify-around'>
        {
          projects?.map((course)=>(
            <Courses key={course.id} course={course}/>
          ))
        }
      </div>
    </>
  )
}

export default App
