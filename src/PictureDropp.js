import React, { useState } from 'react'
import { useDrop } from 'react-dnd';

export const PictureDropp = ({src,clock_events,clock_listt,time,setClock_events}) => {
  const word_to_number = {
        "zero":0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "eleven":11,
        "twelve":12,
        "thirteen":13,
        "fourteen":14,
        "fifteen":15,
        "sixteen":16,
        "seventeen":17,
        "eighteen":18,
        "nineteen":19,
        "twenty":20,
        "twentyone":21,
        "twentytwo":22,
        "twentythree":23
    }
    const [pic,setPic]=useState(null);
    // const clock_list={
    //     one:"java.png",two:"mongodb.png",three:"self-care.png",four:"sapling1.png",five:"tree-logo.png",six:"tailwind.png", seven:"meeting_clock.png",eight:"leetcode_clock.png",nine:"startup-logo1.png",ten:"gym_clock.png",eleven:"morning-routine.png",twelve:"python.png",thirteen:"book1_clock.png"
    //   }
    const [{isOver},drop]=useDrop(()=>({
        accept:"image",
        drop:(item)=> addImage(item.id),
        collect:(monitor)=>({
          isOver:!!monitor.isOver(),
        })
      }));
      const addImage=(id)=>{
        console.log(id);
        let a=clock_listt[id];
        console.log(time);
        a.time=[word_to_number[time],word_to_number[time]+1];
        setClock_events((prev)=>([
            ...prev,a
        ]))
        setPic(id);
      }
  return (
    (src!="" || pic!=null)
        ? <img src={(pic==null)?src:clock_listt[pic].src} ref={drop} className="h-20 w-20 rounded-full p-1 border-[5px] border-black bg-gray-100 border-gray-200"/>
        :<h1 ref={drop} className="text-3xl" style={{
            color:"transparent"
        }}>drop it</h1>

  )
}

