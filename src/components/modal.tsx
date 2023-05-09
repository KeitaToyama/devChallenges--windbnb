import React from 'react'
import { add } from '../App';
import {stays} from "../data/stays"
import { Stay } from '../data/stays'

const Modal = (props: any) => {
  const closeModal = ():void => {
    props.setOpen(false)
  }
  return (
    <>
     {props.open ? (
      <> // showFlagがtrueだったらModalを表示する
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

            <div id='searches' className='grid grid-cols-3 items-center py-4'>
<div className='cursor-pointer transition-all duration-300 rounded-xl px-8 py-4  drop-shadow-xl bg-white hover:bg-slate-200 flex flex-col'>
  <div>LOCATION</div>
  <div className='text-slate-400'>add location</div>
</div>
<div className='cursor-pointer transition-all duration-300  px-8 py-4 rounded-xl drop-shadow-xl bg-white hover:bg-slate-200 flex flex-col'>
  <div>GUESTS</div>
  <div>0</div>
</div>
<div className='flex  justify-center cursor-pointer transition-all duration-300 drop-shadow-xl hover:bg-red-700 rounded-xl px-8 py-4 bg-red-500 text-white'>🔍search</div>
            </div>
            
            <div id='selecta' className='grid grid-cols-3 items-center py-4'>
              <div className='flex flex-col'>
                {stays.map((stay: Stay, index: number) => (
                  <div>{stay.city}</div>
                ))}
              </div>
              <div>1</div>
              <div>{props.select}</div>
            </div>

            
            
          </div>
</>
      ) : ""}
    </>
  );
};

export default Modal;