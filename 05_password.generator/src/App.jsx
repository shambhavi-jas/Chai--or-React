import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [len, setLen] = useState(8);
  const [noallowed,setNo]=useState(false);
  const [symbolallowed,setSymbols]=useState(false);
  const [password,setPW]=useState("");
  
  const [copied, setCopied] = useState(false);

  const pw_ref=useRef(null);
  




  const pw_generator=useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(noallowed) str+="0123456789"
    if(symbolallowed) str+="!@#$%^&*()-_=+[]{}|;:,.<>?/`~"
  
    for (let i = 0; i < len; i++) {
    let ch=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(ch);
    }

    setPW(pass);

  },[len,noallowed,symbolallowed,setPW]);
 


  const copy_pw_generated= useCallback(()=>{
    pw_ref.current?.select();
    pw_ref.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // resets after 1.5s
  },[password]);

  useEffect(()=>{
    pw_generator();
  },[len,noallowed,symbolallowed, pw_generator]);



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white my-3'>PASSWORD GENERATOR</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input type="text"
           value={password}
           className="outline-none w-full py-1 px-3" 
           placeholder="password"
           readOnly
           ref={pw_ref}
           />
           <button onClick={copy_pw_generated} className='outline-none bg-blue-900 hover:bg-blue-700 transition-colors duration-200 text-white px-3 py-0.5 shrink-0'> {copied ? "Copied!" : "Copy"}</button>
        </div>



        <div className='flex text-sm gap-x-2'>


         <div className='flex items-center gap-x-1'>
          <input type="range"
           min={6}
           max={100}
           value={len}
           className='cursor-pointer'
           onChange={(e)=>{setLen(e.target.value)}}
          />
          <label>Length:{len}</label>
         </div>

         <div className="flex items-center gap-x-1">
          <input type="checkbox"
           defaultChecked={noallowed}
           id="noInput"
           onChange={()=>{
            setNo((prev)=>!prev);
           }}
           />
           <label htmlFor="noInput">Numbers</label>
         </div>

         <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={symbolallowed}
              id="symInput"
              onChange={() => {
                  setSymbols((prev) => !prev )
              }}
          />
          <label htmlFor="symInput">Characters</label>
           </div>


        </div>



      </div>
    </>
  )
}

export default App
