import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/shambhavi-jas')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setdata(data)
        })
    },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="cartoonpic" width={300}/>
    </div>
  )
}

export default Github