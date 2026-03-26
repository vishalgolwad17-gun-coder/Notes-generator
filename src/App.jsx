import { Key } from 'lucide-react'
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [inpuu, setinpuu] = useState('')
  const [details, setdetails] = useState('')

  const [task, settask] = useState([])

  let deletehandler = (idx) =>{
    let deleted = [...task]
    deleted.splice(idx,1);
    settask(deleted);
  }


  let submithandler = (e) => {
    e.preventDefault();
    
    let copytask = [...task,{
      title: inpuu,
      details: details
    }]
    settask(copytask);

    setinpuu('')
    setdetails('')
  }


  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={submithandler} className='flex lg:w-1/2 items-start p-10 gap-5 flex-col'>
     <h1 className='text-4xl font-bold'>Add cards</h1>

        <input type="text" 
        placeholder='Enter notes heading' 
        className='px-5 w-full py-2 border-2 rounded-lg text-center'
        value={inpuu}
        onChange={(e) =>(setinpuu(e.target.value))}
        />

        <textarea type="text" 
        className='px-5 w-full py-10 border-2 rounded-lg text-center' 
        placeholder='Enter the box' 
        value={details}
        onChange={(f) => (setdetails(f.target.value))}
        />
        <button className='bg-white w-full text-black p-3 rounded-lg active:bg-gray-700'>add notes</button>
      </form>
      <div className=' lg:w-1/2 lg:border-l-2  bg-gray-900 flex-wrap p-10'>
      <h1 className='text-4xl font-bold '>Recent cards</h1>
      <div className='flex flex-wrap gap-5 mt-6 h-full overflow-auto'>
        {task.map((card,idx) => {
          return (
            <div key={idx} className="h-52 w-40 rounded-2xl text-black flex flex-col bg-[url('https://imgs.search.brave.com/GXRxW_JMbnG9uqybuRMc0aVgi4lojfUwhdTXVNcGajQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3OS9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')] bg-cover">
              <button onClick={() => deletehandler(idx)} className='flex justify-center bg-red-700 p-1 rounded-full text-white w-8 cursor-pointer self-end m-1'><i className="ri-close-line"></i></button>
              <h1 className='font-bold text-xl mx-4 leading-tight flex justify-center'>{card.title}</h1>
              <p className='m-3 leading-tight font-medium text-gray-500 flex justify-center'>{card.details}</p>
            </div>
          )
        })}
       
        </div>
      </div>
    </div>
  )
}

export default App
