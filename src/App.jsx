import { useCallback, useState,useEffect } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState('false')
  const [charAllowed, setCharAllowed] = useState('false')
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "~`!@#$%^&*()_-+= {}[]|;:<>,./?"
    for (let index = 1; index <= length; index++) {
let char=Math.floor( Math.random()* str.length +1)
pass+= str.charAt(char)


    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

 useEffect(()=>{
passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 bg-teal-950 text-black rounded-md'  > 
    <h1 className='text-white text-center my-3 '>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4' >
       <input type="text"
      value={password}
      className='outline-none w-full  py-1 px-3 text-slate-950 '
      placeholder="Password"
      readOnly
       />
       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sml gap-x-2'>
      <div className='flex items-center gap-x-1' >
<input 
type="range" 
min={6}
max={100}
value={length}
className='cursor-pointer'
onChange={(e)=>{setLength(e.target.value)}}
/>
<label className='text-yellow-400'>Length: {length}</label>
      </div>
     <div className='flex items-center gap-x-1'>
      <input type="checkbox"
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={()=>{
        setNumberAllowed((prev)=>!prev)
      }}
      />
      <label className='text-yellow-400' htmlFor="numberInput">Numbers</label>
     </div>
      <div className='flex items-center gap-x-1'>
<input type="checkbox"
defaultChecked={charAllowed}
id="charInput"
onChange={()=>{
  setCharAllowed((prev)=> !prev)
}} />
<label className='text-yellow-400' htmlFor="charInput">Characters</label>
      </div>
    </div>
   </div>
    </>
  )
}

export default App
