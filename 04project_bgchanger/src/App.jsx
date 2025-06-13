import { useState } from "react"

function App() {
 const [color,setc]=useState("pink");

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setc("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>RED</button>
        <button onClick={()=>setc("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>YELLOW</button>
        <button onClick={()=>setc("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>GREEN</button>
        <button onClick={()=>setc("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>BLUE</button>
        <button onClick={()=>setc("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>BLACK</button>
        <button onClick={()=>setc("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"pink"}}>PINK</button>
        <button onClick={()=>setc("lavender")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lavender"}}>LAVENDER</button>
        <button onClick={()=>setc("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>WHITE</button>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
