import React, { PureComponent, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Clock from './Clock'
import { SketchPicker } from 'react-color'
import { useState } from 'react';
import { useRef } from 'react';
import spotify_logo from './spotify_logo.png'
import { LineSvg } from './LineSvg';
import { useDrag } from 'react-dnd';
import { type } from '@testing-library/user-event/dist/type';
import { PictureDrag } from './PictureDrag';
import Modal from './Modal';
import { Canvas } from '@react-three/fiber';
import { ModelLambo } from './ModelLambo';
import { Environment, OrbitControls } from '@react-three/drei';
import { ModelRossa } from './ModelRossa';
import { Color } from 'three';
import { ModelPorshe } from './ModelPorshe';
import Modalll from './Modalll';
import { useSelector } from 'react-redux';
import axios from 'axios';


export const Setup = ({setSetup,setup,setIsOpen,isOpen,clock_events,setClock_events}) => {
  const [colorC,setColorC]=useState(false);
  const [video,setVideo]=useState(1);
  const [color,setColor]=useState("black");
  const[total_time,setTotal_time]=useState([]);
  const[free_time,setFree_time]=useState([]);
  const [morning,setMorning]=useState([0,1,1,0,0]);
  const [afternoon,setAfternoon]=useState([0,1,1,0,1]);
  const [evening,setEvening]=useState([0,1,1,1,1]);
  const [clockChange,setClockChange]=useState(false);
  const [Toys,setToys]=useState([{id:0,name:"Lamborghini Avendator",toy:"ModelLambo",colors:["black,red,white,green,silver"]},{id:1,name:"Porshe 911",toy:"ModelPorshe",colors:["black,red,white,green,silver"]},{id:2,name:"Ferrai Rossa",toy:"ModelRossa",colors:["black,red,white,green,silver"]}]);
  const [Toyno,setToyno]=useState(0);
  const {name,email,clock_list_back}=useSelector((state)=> state.counter);
  const [{isDragging},drag]=useDrag(()=>({
    type:"image",
    collect:(monitor)=>({
      isDragging:!!monitor.isDragging(),
    }
    )
  }))
  useEffect(()=>{
    setSetup(1);
  },[])
  const data = [
     {
    name: 'Early hours',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Morning',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Afternoon',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Evening',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
    {
    name: 'Late hours',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },

];
// useEffect(()=>{
//   axios.get("http://localhost:5000/users",{ params: { name: name, email: email,clock:clock_list_back,routine:clock_events } })
//   .then(()=>{
//     console.log("successful!")
//   })
// },[])
    const [value, setValue] = useState(new Date());
    const [change,setChange] = useState(true);
    const buttonRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),useRef(null)
      ];
      const [colorTypes,setColorTypes]=useState(["tire","engine2","carwindow","carbody","bumper","hutcup","win1","engine2","carwindow","carbody","bumper","hutcup"]);
      const list_change=["tree-logo","calender-logo","startup-logo1","journal-3","notebook1","budget_logo","goals_logo"]
      useEffect(()=>{
        if(change==0){
        const a=document.querySelector(".progress-bar5")
        a.style.width=`${80}%`}
      },[])

    const handleClickk = (buttonIndex) => {
        buttonRefs.map((i)=>{
          i.current.style.backgroundColor = "white";
          i.current.style.borderWidth ="2px";
          i.current.style.scale ="1";
          i.current.style.opacity ="0.8";
        })
        buttonRefs[buttonIndex].current.style.backgroundColor = "rgb(226 232 240)";
        buttonRefs[buttonIndex].current.style.border = "3px solid rgb(203 213 225)";
        buttonRefs[buttonIndex].current.style.scale ="1.2";
        buttonRefs[buttonIndex].current.style.opacity ="1";
        
      };
      const [startt,setStartt]=useState("12");
      const [endd,setEndd]=useState("13");
      const [extend,Setextend]=useState(1);
      // const clock_list={
      //   one:"java.png",two:"mongodb.png",three:"self-care.png",four:"sapling1.png",five:"tree-logo.png",six:"tailwind.png", seven:"meeting_clock.png",eight:"leetcode_clock.png",nine:"startup-logo1.png",ten:"gym_clock.png",eleven:"morning-routine.png",twelve:"python.png",thirteen:"book1_clock.png"
      // }
    // const [clock_events,setClock_events]=useState([{"time":[5,6],name:"Morning-routine",priority:"green",src:"morning-routine.png",routine:true},{"time":[10,11],name:"Morning-routine",priority:"green",src:"morning-routine.png",routine:true},{"time":[6,7],name:"Exercise",priority:"green",src:"gym_clock.png",routine:true},{name:"Start up",src:"startup-logo1.png","time":[8,9],priority:"red",routine:false},{"time":[9,10],name:"Leetcode",src:"leetcode_clock.png",priority:"yellow",routine:false},{"time":[11,12],name:"Meeting",src:"meeting_clock.png",priority:"green",routine:true},{"time":[1,2],name:"Book reading",src:"book1_clock.png",priority:"red",routine:true},{"time":[2,3],name:"Python",src:"python.png",priority:"yellow",routine:true}]);
    const clock_listt={one:{src:"java.png",time:"",name:"java",routine:false,priority:"green",subTasks:[]},two:{src:"mongodb.png",time:"",name:"mongodb",routine:false,priority:"green",subTasks:[]},three:{src:"self-care.png",time:"",name:"self-care",routine:false,priority:"green",subTasks:[]},four:{src:"sapling1.png",time:"",name:"Peace",routine:false,priority:"green",subTasks:[]},five:{src:"tree-logo.png",time:"",name:"No Gadgets",routine:false,priority:"green",subTasks:[]}
    ,six:{src:"tailwind.png",time:"",name:"tailwind",routine:true,priority:"green"},seven:{src:"meeting_clock.png",time:"",name:"Meeting",routine:false,priority:"green"},eight:{src:"leetcode_clock.png",time:"",name:"Leetcode",routine:true,priority:"green"},nine:{src:"startup-logo1.png",time:"",name:"Startup",routine:true,priority:"green"},ten:{src:"gym_clock.png",time:"",name:"Excercise",routine:false,priority:"green"},eleven:{src:"morning-routine.png",time:"",name:"Morning-routine",routine:true,priority:"green"},twelve:{src:"python.png",time:"",name:"Book Reading",routine:false,priority:"green"},thirteen:{src:"python.png",time:"",name:"Python",routine:false,priority:"green"}}
    const timeline1=[{"time":[5,6],"label":"Exercise",priority:"green",image:"dumbel-logo",routine:true},{"label":"Morning Routine",image:"morning-routine","time":[9,10],priority:"red",routine:false},{"time":[10,12],"label":"Leetcode",image:"leetcode_clock",priority:"yellow",routine:false},{"time":[14,16],"label":"Bitshack",image:"tree-logo",priority:"green",routine:true}]
    const timeline=[{"time":[5,6],"label":"Exercise",priority:"green",image:"dumbel-logo",routine:true},{"label":"Morning Routine",image:"morning-routine","time":[9,10],priority:"red",routine:false},{"time":[10,12],"label":"Leetcode",image:"leetcode_clock",priority:"yellow",routine:false},{"time":[14,16],"label":"Bitshack",image:"tree-logo",priority:"green",routine:true}]
    useEffect(()=>{
      clock_events.sort((a, b) => a.time[0] - b.time[0])
    },[clock_events]);

const listed_time=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

   useEffect(()=>{
    let l=[];
    clock_events.map((i)=>{
      l.push(i.time[0]);
    //   setTotal_time((pre)=>([
    //     ...pre,i.time[0]
    //   ]))
  })
  console.log(l);
  setTotal_time(l);
  let lo=[];
  const po=listed_time.filter(n =>  !l.includes(n));
  console.log(po);
  po.map((i)=>{
    lo.push({time:[i,i+1]});
})
console.log(lo);
setFree_time(lo);
   },[clock_events])
  
  //  useEffect(()=>{
  //   setFree_time(total_time.filter(n => !listed_time.includes(n)));
  //   console.log(total_time.filter(n => !listed_time.includes(n)))
  //  },[total_time])

    return (
    <div className='flex flex-row justify-center items-center w-full 'style={{
        minHeight:"94vh"
    }}>
      {/* {(colorC)?<div className='fixed w-full h-[96%] z-10' style={{
        backgroundColor:"rgba(0, 0, 0, .3)"
      }}></div>:<></>} */}
    <Modalll colorC={colorC}>
          Fancy Modal 
    </Modalll>
    <Modal open={isOpen} onClose={() => setIsOpen(false)} clock_events={clock_events} setClock_events={setClock_events} start={startt} end={endd}>
          Fancy Modal 
    </Modal>

         <div className="flex flex-col space-y-4 justify-center items-center absolute h-full m-auto right-2">
    <img ref={buttonRefs[0]} onClick={() => handleClickk(0)} src={`./${list_change[0]}.png`} className="h-10 w-10  rounded-full border-[2px] opacity-80 p-1"/>
    <img  ref={buttonRefs[1]} onClick={() => handleClickk(1)} src={`./${list_change[1]}.png`} className="h-10 w-10 opacity-70 rounded-full  border-2 p-1"/>
<img ref={buttonRefs[2]} onClick={() => handleClickk(2)} src={`./${list_change[2]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
<img ref={buttonRefs[3]} onClick={() => handleClickk(3)} src={`./${list_change[3]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
    {/* <div className="flex flex-col items-center justify-center space-y-2 py-2">
      <svg onClick={()=>{
dailerFunction(0);
    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8 p-2 rounded-full bg-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
</svg>
      <img src={`./${list_change[third]}.png`} className="h-12 w-12"/>
      <svg onClick={()=>{
dailerFunction(1);
    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8 p-2 rounded-full bg-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

</div> */}

    <img ref={buttonRefs[4]} onClick={() => handleClickk(4)}   src={`./${list_change[4]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
    <img ref={buttonRefs[5]} onClick={() => handleClickk(5)}  src={`./${list_change[5]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
    <img ref={buttonRefs[6]} onClick={() => handleClickk(6)}  src={`./${list_change[6]}.png`} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
    <img ref={buttonRefs[7]} onClick={() => handleClickk(7)}  src={spotify_logo} className="h-10 w-10 opacity-70 rounded-full border-2 p-1"/>
    </div>
        <div className='w-[43%] relative'>
    <PictureDrag id="one" top={-30} left={20} url="java.png"/>
    <PictureDrag id="two" top={170} left={-30} url="mongodb.png"/>
    <PictureDrag id="three" top={400} left={10} url="self-care.png"/>
    <PictureDrag id="four" top={-70} left={450} url="sapling1.png"/>
    <PictureDrag id="five" top={-110} left={250} url="tree-logo.png"/>
    <PictureDrag id="six" top={470} left={230} url="tailwind.png"/>

  <button onClick={() => setIsOpen(true)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="h-16 w-16 rounded-full absolute p-1 shadow-xl bottom-[-90px] right-[100px] text-gray-400 bg-slate-100">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg></button>
  {/* <img src="tailwind.png" className="h-16 w-16 rounded-full absolute p-1 shadow-xl bottom-[-90px] right-[100px] bg-slate-100"/> */}
      <Clock clock_listt={clock_listt} setSetup={setSetup} setup={setup} clock_events={clock_events} setClock_events={setClock_events} setChange={setClockChange} Change={clockChange}/>
        </div>
        <div className='flex-1'>
            <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-col space-y-1 pt-10'>
                    <h1 className='text-3xl font-semibold' onClick={()=>{
                      setClockChange(!clockChange)
                    }}>Hello, {name} 👋</h1>
                    <p className='text-gray-500'>Lets set your day productively...</p></div>
               <div className='flex flex-col items-center'> 
               <div className='flex flex-row space-x-2 items-center text-[17px] font-[500] text-gray-600' onClick={()=>{
                setChange(!change)
               }}>
                    <p>16 May, 2023</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 rounded-full bg-slate-100">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg></div>
<div className='flex flex-row text-sm items-center text-gray-500'>
     <p>Sunny day(29°C)</p>
     <img src="./sun_logo.png" className='h-8 w-12'/>
</div>
</div>
</div>
{(change)?<div className='flex flex-row justify-between items-start pl-[130px] h-[580px]  overflow-scroll'>
<div className="wrapper">
    <div class="center-line border-dashed border-2 border-gray-400">
      <a href="#"  class="scroll-icon" style={{
        height:"14px",width:"14px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",bottom:"-10px"
      }} ><i class="fas fa-caret-up" style={{
        backgroundColor:"red"
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] h-[14px] text-white bg-black rounded-full -m-[0px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>
</i></a>
    </div>

{
   clock_events.sort((a, b) => a.time[0] - b.time[0]).map((i,index)=>{
    return(
      <div>
      <div className="row row-11" id={`section-${index+2}`} onClick={()=>{
        Setextend(!extend);
      }} style={{
        transform:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"translateX(15px)":"translateX(0px)"
      }}>
        <div className='flex flex-row items-center space-x-2'>
      <section className={`bg-slate-100 shadow border-l-[4px] border-${i.priority}-500`} 
      // style={{
      //   borderLeft:`4px solid ${i.priority}`
      // }}
      >
      {
          (i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e41c38" className="w-3 h-3 icon"  style={{
          backgroundColor:(i.time[0]==(value.getHours()))? "white":"white",left:"-75px",height:"14px",width:"14px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)"
         }}>
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
</svg>:<i className={`icon fas fa-paper-plane bg-white`}
        style={{
         backgroundColor:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))? "white":"white",height:"14px",width:"14px",left:"-60px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)"
        }}></i>
      }
        <h1 className="absolute top-[50%] -left-[190px] -translate-y-[50%] time text-black "
        style={{
        left:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"-205px":"-190px"
      }}
      >{i.time[0]}:00 - {i.time[1]}:00</h1>
      <div className='flex flex-row space-x-2 items-center'>
        <div className={`p-[6px] flex flex-row space-x-2 items-center bg-${i.priority}-100`} style={{
          
        }}>
      <img src={`${i.src}`} className='h-7 w-7 rounded-full bg-white shadow'/>
        <h1 className='text-gray-800'>{i.name}</h1>
        {(i.routine)?<h1></h1>:<h1 className='text-lg text-slate-600'><span className='text-red-500 font-semibold text-[22px]'>5</span>/112</h1>}
      </div>
      </div>
        {/* <div>
        <div className='flex flex-row space-x-5'style={{
          fontFamily:"poppins"
        }}>
       <img src="./morning-routine.png" className='h-[100px]'/>

  <div className='flex flex-col justify-center'>
    <div className='flex flex-row space-x-2 items-center'>
    <h1 className='text-3xl font-[500]'>Morning Routine</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
  <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
</svg>

    </div>

<div className='flex flex-row space-x-4'>
<div className='flex flex-row space-x-1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e41c38" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
</svg>
<h1 className='text-gray-600'> 5:00 AM - 7:00 AM</h1>
</div>

<div className='flex flex-row space-x-1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-6 h-6">
  <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>

<h1 className='text-gray-600'>0 / 5</h1>
</div>
</div>
</div>
       </div>
       <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className=" h-full w-[80%] bg-slate-800 rounded-lg progress-bar"></div>
</div>
<h1>80%</h1>
       </div>
       </div> */}
      </section>
      <img src={(i.time[0]>=0 && i.time[0]<13)?'./morning.png':(i.time[0]>=13 && i.time[0]<=17)?'./afternoon1.png':'./night_moon.png'} className={`h-[41px] w-11 p-2 shadow bg-${i.priority}-100`}/>
      </div>
    </div>
    {(extend)?<div className={`row row-11 bg-${i.priority}-100 p-2 rounded-sm shadow`} id={`section-${index+2}`} style={{
        transform:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"translateX(15px)":"translateX(0px)",transform:"translateY(-18px)"
      }}>
         <div className='flex flex-col items-start space-y-1'>
        {
         i.subTasks.map((i)=>{
          return(
            <div className='flex flex-row items-center space-x-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
              <h1 className='text-gray-700'>{i}</h1>
              </div>
            
          )
         }) 
        }
        </div>
      </div>:<></>}
    </div>
    )
  })
}
</div>
<div className="wrapper">
    <div class="center-line border-dashed border-2 border-gray-400">
      <a href="#"  class="scroll-icon" style={{
        height:"14px",width:"14px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",bottom:"-10px"
      }} ><i class="fas fa-caret-up" style={{
        backgroundColor:"red"
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] h-[14px] text-white bg-black rounded-full -m-[0px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>
</i></a>
    </div>
{
  free_time.map((i,index)=>{
    return(
      <div className="row row-11" id={`section-${index+2}`} style={{
        transform:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"translateX(15px)":"translateX(0px)"
      }}>

      <section className={`bg-slate-100 shadow`}>
      {
          (i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?
        <svg xmlns="http://www.3.org/2000/svg" viewBox="0 0 24 24" fill="#e41c38" className="w-3 h-3 icon"  style={{
          backgroundColor:(i.time[0]==(value.getHours()))? "white":"white",left:"-72px",height:"14px",width:"14px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)"
         }}>
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
</svg>:<i className={`icon fas fa-paper-plane bg-white`} onClick={()=>{
  setIsOpen(true);
  setStartt(i.time[0]);
  setEndd(i.time[1]);
}}
        style={{
         backgroundColor:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))? "white":"white",height:"14px",width:"14px",left:"-56px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)"
        }}></i>
      }
        <h1 className="absolute top-[50%] -left-[190px] -translate-y-[50%] time text-black "
        style={{
        left:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"-205px":"-190px"
      }}
      >{i.time[0]}:00 - {i.time[1]}:00</h1>
      
      {/* <div className='p-[6px] flex flex-row space-x-2 items-center'>
      <img src={`./${i.image}.png`} className='h-7 w-7 rounded-full bg-white '/>
        <h1 className=''>{i.label}</h1>
        {(i.routine)?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 rounded-full bg-slate-100">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>:<h1 className='text-lg text-slate-500'><span className='text-red-500 font-semibold text-[22px]'>5</span>/112</h1>}
      </div> */}
        {/* <div>
        <div className='flex flex-row space-x-5'style={{
          fontFamily:"poppins"
        }}>
       <img src="./morning-routine.png" className='h-[100px]'/>

  <div className='flex flex-col justify-center'>
    <div className='flex flex-row space-x-2 items-center'>
    <h1 className='text-3xl font-[500]'>Morning Routine</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
  <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
</svg>

    </div>

<div className='flex flex-row space-x-4'>
<div className='flex flex-row space-x-1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e41c38" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
</svg>
<h1 className='text-gray-600'> 5:00 AM - 7:00 AM</h1>
</div>

<div className='flex flex-row space-x-1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-6 h-6">
  <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>

<h1 className='text-gray-600'>0 / 5</h1>
</div>
</div>
</div>
       </div>
       <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className=" h-full w-[80%] bg-slate-800 rounded-lg progress-bar"></div>
</div>
<h1>80%</h1>
       </div>
       </div> */}
      </section>
      <img src={(i.time[0]>=0 && i.time[0]<13)?'./morning.png':(i.time[0]>=13 && i.time[0]<=17)?'./afternoon1.png':'./night_moon.png'} className='h-[43px] w-11 p-2 bg-slate-100 shadow rounded-full'/>
    </div>
    )
  })
}
</div>
</div>:<div><div className='w-full flex flex-row items-start justify-center space-x-3 pt-7 pb-5'>
  <div className=' flex flex-col items-start justify-start py-1 w-[60%] h-[280px] space-y-1 bg-slate-50 rounded-xl'> 
  <h1 className='px-5 font-semibold'>Hour Analysis:</h1>
  
  <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer></div>
      <div className='flex-1 h-full bg-slate-100 rounded-xl z-50'>
        <div className='flex flex-col justify-between  h-full'>
        {(colorC)?<div className='absolute left-[42%] z-20 '><div className='flex flex-row space-x-3 items-start'>
        
        <div className="h-[250px] w-[240px] bg-white shadow-xl border-2 border-gray-300 rounded-lg p-2">
<h1 className='m-3 mx-1 text-lg font-[500]'>Customize Parts:</h1>
         <div className="grid grid-cols-3 h-[80%] w-full overflow-scroll gap-y-4"> 
        {
          colorTypes.map((i)=>{
            return(
              <div className='w-[60px] h-[60px] flex flex-row items-center justify-center bg-slate-200 rounded-lg'>
                <img src={`${i}.png`} className='h-[60px] w-[60px] p-1'/>
              </div>
            )
          })
        }
        </div>
        </div>
        <SketchPicker 
        color={color}
        disableAlpha
        onChange={(color) => setColor(color.hex)}
      /></div>
</div>:<></>}
  <div className=' bg-slate-50  rounded-xl overflow-hidden h-[220px] '>    
{(video)? <div className='relative flex flex-row items-center justify-center h-full'style={{
        backgroundImage:'url("https://img.freepik.com/premium-photo/arafed-room-with-lot-light-coming-from-ceiling-generative-ai_955884-32654.jpg?w=360")',
        backgroundSize:"cover",backgroundRepeat: "no-repeat"
      }}>
        <>
  <p className='absolute text-lg font-semibold top-1 left-1 p-1 px-2 text-white z-50' onClick={()=>{
    setColorC(!colorC)
  }}>{Toys[Toyno].name}:</p>
  <Canvas
      shadows
      camera={{ position: [0, 50, 200], fov: 1 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls/>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 1]} intensity={1} />
      <directionalLight position={[2, 2, 1]} intensity={1} />
      <directionalLight position={[3, 2, 2]} intensity={2} />
      <directionalLight position={[5, 5, 2]} intensity={1} />
      <directionalLight position={[-1, 0, 0]} intensity={1} color={new Color(1, 1, 1)} />
      <ambientLight intensity={0.5} color={new Color(1, 1, 1)} />
      {/* <Environment preset='city'/> */}
      <group>
        {(Toys[Toyno].id==0)?<ModelLambo color={color}/>:(Toys[Toyno].id==1)?<ModelPorshe color={color}/>:<ModelRossa color={color}/>}
      </group>
    </Canvas></>
          
        </div>:<video width="400" height="300" controls autoPlay loop muted={false}>
    <source src="./Lamborghini-status-video-Aventador-Sound-Status-Video-whatsapp-status-video-shorts1080P-HD720P_HD.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>}</div>
    <div className='flex-1'>
      <div className='flex flex-row items-center justify-around h-[60px]'>
              <img src={'./lambo_pic.png'} onClick={()=>{
                setToyno(0)
              }} className='h-[43px] bg-white w-11 p-1  shadow  rounded-full'/>
              <img src={'./benz_pic.png'} className='h-[43px] bg-white p-2 w-11  shadow rounded-full'/>
              <img src={'./porshe_pic.png'} onClick={()=>{
                setToyno(1)
              }} className='h-[43px] bg-white w-11 p-1  shadow rounded-full'/>
              <img src={'https://assets.turbologo.com/blog/de/2019/10/18151252/ferrari-logo-illustration.jpg'}onClick={()=>{
                setToyno(2)
              }} className='h-[43px] bg-white w-11 p-1  shadow rounded-full'/>
              <img src={'https://cdn.carbuzz.com/logos/original/0/300/340.png'} className='h-[43px] w-11 p-1 bg-white  shadow rounded-full'/>
      </div>
    </div>
    </div>
    </div>
  </div>
  <div>
  <div className='flex flex-row justify-between  items-start pl-[130px] h-[250px] overflow-scroll'>
<div className="wrapper " style={{
  paddingRight:"0px"
}}>
  <p className='absolute -top-8 -left-[75px] text-xl font-[500]'>Upcoming Events</p>
    <div class="center-line border-dashed border-2 border-gray-400">
      <a href="#"  class="scroll-icon" style={{
        height:"14px",width:"14px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",bottom:"-10px"
      }} ><i class="fas fa-caret-up" style={{
        backgroundColor:"red"
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] h-[14px] text-white bg-black rounded-full -m-[0px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>
</i></a>
    </div>

{
  timeline1.map((i,index)=>{
    return(
      <div key={index} className="row row-11" id={`section-${index+2}`} style={{
        transform:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"translateX(15px)":"translateX(0px)"
      }}>
        <div className='flex flex-row items-center space-x-2'>
      <section className={`bg-slate-100 shadow border-l-[4px] border-${i.priority}-500`} >
      {
          (i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e41c38" className="w-3 h-3 icon"  style={{
          backgroundColor:(i.time[0]==(value.getHours()))? "white":"white",left:"-75px",height:"14px",width:"14px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)"
         }}>
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
</svg>:<i className={`icon fas fa-paper-plane bg-white`}
        style={{
         backgroundColor:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))? "white":"white",height:"14px",width:"14px",left:"-60px",boxShadow:"0 0 0 3px #080808, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)"
        }}></i>
      }
        <h1 className="absolute top-[50%] -left-[190px] -translate-y-[50%] time text-black "
        style={{
        left:(i.time[0]<=(value.getHours()) && i.time[1]>(value.getHours()))?"-205px":"-190px"
      }}
      >{i.time[0]}:00 - {i.time[1]}:00</h1>
      <div className='flex flex-row space-x-2 items-center'>
        <div className={`p-[6px] flex flex-row space-x-2 items-center bg-${i.priority}-100`}>
      <img src={`./${i.image}.png`} className='h-7 w-7 rounded-full bg-white shadow'/>
        <h1 className=''>{i.label}</h1>
        {(i.routine)?<h1></h1>:<h1 className='text-lg text-slate-600'><span className='text-red-500 font-semibold text-[22px]'>5</span>/112</h1>}
      </div>
      </div>
        {/* <div>
        <div className='flex flex-row space-x-5'style={{
          fontFamily:"poppins"
        }}>
       <img src="./morning-routine.png" className='h-[100px]'/>

  <div className='flex flex-col justify-center'>
    <div className='flex flex-row space-x-2 items-center'>
    <h1 className='text-3xl font-[500]'>Morning Routine</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
  <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
</svg>

    </div>

<div className='flex flex-row space-x-4'>
<div className='flex flex-row space-x-1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e41c38" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
</svg>
<h1 className='text-gray-600'> 5:00 AM - 7:00 AM</h1>
</div>

<div className='flex flex-row space-x-1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-6 h-6">
  <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>

<h1 className='text-gray-600'>0 / 5</h1>
</div>
</div>
</div>
       </div>
       <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className=" h-full w-[80%] bg-slate-800 rounded-lg progress-bar"></div>
</div>
<h1>80%</h1>
       </div>
       </div> */}
      </section>
      <img src={(i.time[0]>=0 && i.time[0]<13)?'./morning.png':(i.time[0]>=13 && i.time[0]<=17)?'./afternoon1.png':'./night_moon.png'} className={`h-[41px] w-11 p-2  shadow bg-${i.priority}-100`}/>
      </div>
    </div>
    )
  })
}
</div>
<div className='flex-1 flex flex-col space-y-4 rounded-lg'>
  <div className='flex flex-col relative h-full w-full space-y-2'>
  <p className='text-xl font-[500]'>Overall Efficiency:</p>
  <div className='flex flex-row space-x-3 items-center py-1'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className={`h-full bg-slate-800 rounded-lg bg_gradient12  progress-bar5`} ></div>
</div>
  </div>
  </div>

  <div className='flex flex-col relative h-full w-full p-2 bg-green-100 shadow-lg rounded-lg'>
  <p className=' font-[500] text-gray-800'>Morning Efficiency:</p>
  <div className='flex flex-row justify-between items-center'>
  {
    morning.map((i)=>{
      return(
        <div>
          <img src={(i)?'tree7C.png':'vtreeC.png' }/>
        </div>
      )
    })
  }
  </div>
  </div>

  <div className='flex flex-col relative h-full w-full p-2 bg-green-100 shadow-lg rounded-lg'>
  <p className=' font-[500] text-gray-800'>Afternoon Efficiency:</p>
  <div className='flex flex-row justify-between items-center'>
  {
    afternoon.map((i)=>{
      return(
        <div>
          <img src={(i)?'tree7C.png':'vtreeC.png'}/>
        </div>
      )
    })
  }
  </div>
  </div>

  <div className='flex flex-col relative h-full w-full p-2 bg-green-100 shadow-lg rounded-lg'>
  <p className=' font-[500] text-gray-800'>Evening Efficiency:</p>
  <div className='flex flex-row justify-between items-center '>
  {
    evening.map((i)=>{
      return(
        <div>
          <img src={(i)?'tree7C.png':'vtreeC.png'}/>
        </div>
      )
    })
  }
  </div>
  </div>
</div>
{/* <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250">
          <path id="mainLine" d="M20,20 Q100,80 180,20 T240,220" fill="none" stroke="grey" stroke-width="3" strokeDasharray="6" />
          <path id="mainLine" d="M20,20 Q100,80 180,20" fill="none" stroke="black" stroke-width="3" strokeDasharray="6"/>
        </svg> */}
<div >
</div>
</div>
  </div>
  </div>}

        </div>
    </div>
  )
}
