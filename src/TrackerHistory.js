import React from 'react'

export default function Tracker({track}) {
  return (
    <div className='flex flex-row items-center justify-between w-full flex-wrap'>
    {track.slice(3,6).map((item) => (
        <div className="shadow-lg bg-white flex flex-col items-center rounded-lg space-y-2 h-fit w-[110px] my-2 p-1">
        <img src={item.images[1].url} className='rounded-sm'/>
        <div className='flex flex-col items-center justify-center'>
        <h1 key={item.id} className="text-[15px] text-black">{item.name}</h1>
        <div className='flex flex-row justify-end w-full'>
        <h1 key={item.id} className="text-[15px] text-gray-500 text-sm">- {item.artists[0].name}</h1></div>
        </div>
        </div>
        
      ))}
      </div>
  )
}
