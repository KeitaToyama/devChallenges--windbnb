import './App.css'


function App() {
  

  return (
    <>
    <div className='max-w-screen-xl mx-auto flex flex-col justify-center'>

      <div id='header' className='flex sm:flex-row flex-col justify-between p-4 items-center'>
        <div id='logo'>
          <img src='https://ch-windbnb-h-yoshikawa44.vercel.app/logo.svg'
          className='' />
        </div>
      <div id='search' className='flex flex-row'>
<span className=" rounded-l-xl px-8 py-4 text-slate-400 drop-shadow-xl bg-white hover:bg-slate-200">add location</span>
<span className="  px-8 py-4 text-slate-400 drop-shadow-xl bg-white hover:bg-slate-200">add guests</span>
<div className='rounded-r-xl px-8 py-4 drop-shadow-xl bg-white hover:bg-slate-200'>
🔍
</div>
      </div>
      </div>
      <div id='main'>
        
      </div>

    </div>
    </>
  )
}

export default App
