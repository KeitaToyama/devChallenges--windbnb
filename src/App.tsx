import './App.css'
import {stays} from "../src/data/stays"
import { Stay } from './data/stays'
import Modal from "../src/components/modal"
import  { useState } from 'react'



export type add = "location" | "guests" | ""

function App() {
  
const [location, setLocation] = useState<string | null>("")
const [guests, setGuests] = useState<number | null> (1)

  const [open , setOpen] = useState<boolean>(false)
  const [select, setSelect] = useState<add>("")

  const handleOpen = (add: add): void => {
    setSelect(add)
setOpen(true)
  }
  
  return (
    <>

    <div className='max-w-screen-xl mx-auto flex flex-col justify-center font-serif'>

      <div id='header' className='flex sm:flex-row flex-col justify-between p-4 items-center'>
        <div id='logo'>
          <img src='https://ch-windbnb-h-yoshikawa44.vercel.app/logo.svg'
          className='w-32' />
        </div>
      <div id='search' className='flex flex-row '>

<button className="cursor-pointer transition-all duration-300 rounded-l-xl px-8 py-4 text-slate-400 drop-shadow-xl bg-white hover:bg-slate-200" onClick={() => handleOpen("location")}>add location</button>
<button 
onClick={() => handleOpen("guests")}
className="cursor-pointer transition-all duration-300  px-8 py-4 text-slate-400 drop-shadow-xl bg-white hover:bg-slate-200">add guests</button>

<div className='cursor-pointer transition-all duration-300 rounded-r-xl px-8 py-4 drop-shadow-xl bg-white hover:bg-slate-200'>
🔍
</div>
      </div>
      </div>
      <div id='main' className='flex flex-col items-center sm:items-start'>
        <h1 className='text-5xl p-2'>Stays in Finland</h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>{stays.map((stay:Stay, index: number) => (
          <div key={index} className='p-4 hover:bg-slate-200 flex flex-col items-center rounded-2xl cursor-pointer transition-all duration-300'>
            <img src={stay.photo} className='rounded-xl  object-cover h-64 w-80'/>
            <div id='texts' className='text-xl mt-4'>
              <div id='text-row1' className='flex flex-row items-center justify-between'>
                {stay.superHost ? 
                <div className='border-black border-2 rounded-xl p-1 m-1'>super host</div> : ""
              }
                <div>{stay.type}</div>
                <div>⭐{stay.rating}</div>
              </div>
<h1 className=''>{stay.title}</h1>

            </div>
          </div>
        ))}</div>
      </div>

    </div>
    
    <Modal  open={open} setOpen={setOpen} select={select}
    location={location} setLocation={setLocation}
    guests={guests} setGuests={setGuests}
    />

    </>
  )
}

export default App
