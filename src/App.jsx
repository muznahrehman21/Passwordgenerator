import { useCallback, useState } from 'react'



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
    for (let index = 1; index <= array.length; index++) {
let char=Math.floor( Math.random()* str.length +1)
pass= str.charAt(char)


    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 bg-teal-950 text-black rounded-md'  > 
    <h1 className='text-white text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4' >
      <input type="text"
      value={password}
      className='outline-none w-full  py-1 px-3 text-gray-500 '
      placeholder="Password"
      readOnly
       />
    </div>
   </div>
    </>
  )
}

export default App
