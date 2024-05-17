import './App.css'

function App() {

  return (
    <>
    <div style={{display: "flex" , justifyContent: "center"}}>
      <div style={{backgroundColor: "red", }}>Hi</div>
      <div style={{backgroundColor: "blue"}}>Hello</div>
      <div style={{backgroundColor: "green"}}>Hey</div>
    </div>

    {/* we cant write class instead of className as class is a reserved word in javascript  */}
    <div className='flex justify-center'>
      <div className='bg-red-500'>Hi</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-green-300'>Hey</div>
    </div>

    {/* grid-cols-5 this number represents how many parts you want to divide your window in. if the number is 5 this means you will have 5 children of 20% each */}
    <div className='grid grid-cols-3'>
      <div className='bg-red-500'>Hi</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-green-300'>Hey</div>
    </div>

    {/* different widths for all the childrens using grids */}
    <div className='grid grid-cols-10'>
      <div className='bg-red-200 col-span-4'>Hi</div>
      <div className='bg-blue-500 col-span-4'>Hello</div>
      <div className='bg-green-400 col-span-2'>Hey</div>
    </div>

    {/* different widths for all the childrens using flex */}
    <div className='flex'>
      <div className='bg-red-200 w-[40%]'>Hi</div>
      <div className='bg-blue-500 w-[40%]'>Hello</div>
      <div className='bg-green-400 w-[20%]'>Hey</div>
    </div>
    </>
  )
}

export default App
