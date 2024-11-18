import React from 'react'
import { useDrag } from 'react-dnd'

export const PictureDrag = ({id,url,top,left}) => {
    const [{isDragging},drag]=useDrag(()=>({
        type:"image",
        item: { id: id},
        collect:(monitor)=>({
          isDragging:!!monitor.isDragging(),
        }
        )
      }))
  return (
    <img src={url} ref={drag} className={`h-16 w-16 rounded-full absolute p-1 shadow-xl bg-slate-100`} style={{
        left:`${left}px`,
        top:`${top}px`
    }}/>
  )
}

