import React, { useState } from 'react'
import { add } from '../App';
import {stays} from "../data/stays"
import { Stay } from '../data/stays'

const Modal = (props: any) => {
  
const setLocation = (button:string):void => {
  props.setLocation(button)
}

const setGuests = (button:number):void => {
  props.setGuests(button)
}

  const closeModal = ():void => {
    props.setOpen(false)
  }
  const places= Array.from(new Set(stays.map(stay => stay.city)))

  

  return (
    <>
     {props.open ? (
      <> 
        <div id="overlay" 
        className=' fixed top-0 left-0 w-full h-full bg-slate-400 opacity-60 flex flex-row items-center justify-center z-20'
        onClick={() => closeModal()}
        >
        </div>
          <div id="modalContent"
          className='bg-white p-4 rounded-xl fixed top-0 left-0 z-40 w-full h-80 flex flex-col font-serif'
          >

            <div id='upper' className='flex flex-row w-full justify-between text-2xl'>
              <div>Edit your search</div>
              <button onClick={() => closeModal()}>&times;</button>
            </div>

            <div id='searches' className='grid grid-cols-3 items-center py-4 '>
<div className='cursor-pointer transition-all duration-300 rounded-xl px-8 py-4  drop-shadow-xl bg-white hover:bg-slate-200 flex flex-col'>
  <div>LOCATION</div>
  <div >
    {props.location ? (
<span>{props.location}</span>
    ):(
      <span className='text-slate-400'>add location</span>
    )}
    </div>
</div>
<div className='cursor-pointer transition-all duration-300  px-8 py-4 rounded-xl drop-shadow-xl bg-white hover:bg-slate-200 flex flex-col'>
  <div>GUESTS</div>
  {props.guests ? (
<span>{props.guests}</span>
    ):(
      <span className='text-slate-400'>1</span>
    )}
</div>
<div className='flex  justify-center cursor-pointer transition-all duration-300 drop-shadow-xl hover:bg-red-700 rounded-xl px-8 py-4 bg-red-500 text-white'>🔍search</div>
            </div>
            
            <div id='selecta' className='grid grid-cols-3 items-center py-4'>
              <div >
                {places.map(place => 
                <p onClick={() => setLocation(place)}>{place}</p>
                )}
              </div>
              <div className='flex flex-col'>
                <div>adult</div>
                <div>child</div>
              </div>
              
              <div>{props.select}</div>
            </div>

            
            
          </div>
</>
      ) : ""}
    </>
  );
};

export default Modal;


