import React from 'react'

function Courses({ course }) {
   const {id, title, description, price, link, img} = course;
   return (
      <div onClick={()=>{window.open(link, "_blank")}} className='card text-slate-50'>
         <div className='w-full bg-slate-600 flex justify-center items-center text-xl text-center leading-5 py-3 text-slate-200'>
            <h3>{title}</h3>
         </div>
         <div className='overflow-hidden w-full h-64 relative'>
            <img src={img} alt=""/>
            <div className='absolute w-full h-full bg-slate-600 z-10 top-0 right-0 opacity-30'></div>
         </div>
         <div>
            <div className='px-4'>
               <h4 className='text-md hover:border-b text-center'><a href={link} target="_blank">{title}</a></h4>
               <h2>Price: <span className='text-yellow-300'>{price}</span>$</h2>
               <h3 className='py-3'>{description}</h3>
            </div>
         </div>
      </div>
   )
}

export default Courses