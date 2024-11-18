import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { changeClockList } from './counterSlice';

export const PictureDrop = ({setSetup,setup,src,clock_events,clock_listt,time,setClock_events,setTimesetimg}) => {
  const {clock_list_back}=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
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
    const getKeyFromValue = (value) => {
      for (const key in word_to_number) {
        console.log(`${word_to_number[key]}==${value}`);
        if (word_to_number[key] == value) {
          console.log("got it")
          return key; // Return the key if the value is found
        }
      }}
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
        console.log(word_to_number[time]);
        let ab=[word_to_number[time],clock_listt[id].src];
        dispatch(changeClockList(ab));

      }
      const onDoubleClick=(event)=>{
        if (event.detail === 2) {
          console.log(event.target.id);
          console.log(clock_list_back)
          dispatch(changeClockList([event.target.id,""]))
          console.log(clock_list_back)
          console.log(getKeyFromValue(event.target.id))
          console.log(word_to_number[time]);
          setClock_events(clock_events.filter((i)=>{
            if(i.time[0]!=word_to_number[time]){
              return i;
            }
          }))
      }if(!setup && event.detail === 1){
          setTimesetimg(src);
      }
    }
  return (
    (src!="" || pic!=null)
        ? <img onClick={(event)=>{
          onDoubleClick(event);
        }} src={(pic==null)?src:clock_listt[pic].src} id={word_to_number[time]} ref={drop} className="h-20 w-20 rounded-full p-1 border-[5px] border-black  bg-gray-100 border-gray-200"/>
        :<h1 ref={drop} className="text-3xl" style={{
            color:"transparent"
        }}>Drop it</h1>
  )
}

