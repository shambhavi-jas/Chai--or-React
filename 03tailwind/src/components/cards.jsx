import React from 'react'

function Cards({username,btntext="VISITME"}) {
  console.log(username);
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/27197449/pexels-photo-27197449/free-photo-of-a-woman-in-a-white-dress-and-hat-walking-down-stairs-to-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-gray-700 px-4 py-2 rounded">
        {btntext}
        </button>
      </div>
  )
}

export default Cards
