import React, { useEffect } from 'react'
import Tooltip from 'react-tooltip-lite';
import car from './journey_car.png'
import house from './journey_house.png'
import success from './journey_successful.png'
import family from './journey_family.png'
import end from './journey_end.png'
import charity from './journey_charity.png'
import income from './journey_income.png'
import { useState } from 'react';
import {motion} from 'framer-motion'
import { useRef } from 'react';
import { Slideshow } from './Slideshow';
import fame1 from "./fame1.jpg"
import fame2 from "./fame2.jpg"
import fame3 from "./fame3.jpg"
import fame4 from "./fame4.jpg"
import fame5 from "./fame5.jpg"
import fame6 from "./fame6.jpg"
import fame7 from "./fame7.jpg"
import { Adder } from 'd3';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { CustomNotification } from './CustomNotification';
// import 'react-tooltip-lite/styles/index.css';

export const About = () => {
  const [todo,setTodo]=useState(["Enjoy the morning","Wish People","Eat Fruits"]);
  const [completed,setcompleted]=useState(["Exercise","Book Reading"]);
  const [line,setLine]=useState(0);
  const [subP,setSubP]=useState(0);
  const [tick,setTick]=useState(0);
  const [count,setCount]=useState(0);
  const img1=useRef(null);
  const img2=useRef(null);
  const img3=useRef(null);
  const img4=useRef(null);
  const img5=useRef(null);
  const img6=useRef(null);
  const img7=useRef(null);
  const pathVariants = {
    hidden: {
      opacity: 0,
      strokeDasharray: "1 10", // Start with a fully hidden line
    },
    visible: {
      opacity: 1,
      strokeDasharray: "5 8", // Draw the entire line
      transition: {
        duration: 2, // Adjust the duration as needed
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
 // Start with a fully hidden line
    },
    visible: {
      opacity: 1,
 // Draw the entire line
      transition: {
        // Adjust the duration as needed
      },
    },
  };
  const itemss = {
    hidden: {
      opacity: 0,
      y:100
 // Start with a fully hidden line
    },
    visible: {
      opacity: 1,
      y:0,
 // Draw the entire line
      transition: {
        // Adjust the duration as needed
      },
    },
  };
  const itemsJourney = {
    hidden: {
      opacity: 0,
      y:-400
 // Start with a fully hidden line
    },
    visible: {
      opacity: 1,
      y:0,
 // Draw the entire line
      transition: {
        type:"spring"
      },
    },
  };
  const itemsDay = {
    hidden: {
      opacity: 0,
      y:-400
 // Start with a fully hidden line
    },
    visible: {
      opacity: 1,
      y:0,
 // Draw the entire line
      transition: {
        type:"spring",
        delay:1
      },
    },
  };
    const container = {
    hidden: {
      opacity: 1,
       // Start with a fully hidden line
    },
    visible: {
      opacity: 1, // Draw the entire line
      transition: {
        duration: 2,
          delayChildren: 0.5,
          staggerChildren: 0.2
               // Adjust the duration as needed
      },
    },
  };
  const [pathDataa,setpathDataa]=useState("");
  const [dailer,setDailer]=useState([{name:"Multiple Icome",linkk:img1,pic:"https://thumbs.dreamstime.com/b/financial-personal-wealth-concept-words-income-printed-wooden-blocks-next-to-coin-currency-multiple-streams-wood-copy-171334116.jpg",vid:"tracker_money",tasks:["Invest in Yourself","Realestate","Part-Time"],days:2000,image:income},
  {name:"Entrepreneur",linkk:img2,pic:"https://edienetlive.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/2/full_42573.jpg",vid:"tracker_entre",tasks:["Experience in company","Solid Idea","Right people"],days:1000,image:success,},{name:"Benz S-class",pic:"https://www.forbes.com/wheels/wp-content/uploads/2020/12/Mercedes-Benz-S-Class-1200.jpg",vid:"car_tracker",linkk:img3,tasks:["Asset above 80 crore","Icome above 2 crore","Project margin(60%)"],days:500,image:car,},{name:"Modern Mansion",vid:"tracker_success",pic:"https://thumbor.bigedition.com/img/fWzTXBkH2doh8Nmq8mangHUQ4o0=/874x404/filters:quality(80)/granite-web-prod/c5/31/c531a5417a4c406387e09348dba5a923.jpeg",linkk:img4,tasks:["Asset above 100 crore","Income above 3crore","Total Budget 10 crores"],days:1500,image:house,},
  {name:"Happy Family",vid:"tracker_family",pic:"https://img.freepik.com/premium-photo/happy-family-summer-walk_566707-2134.jpg?w=2000",linkk:img5,tasks:["Cute & Lovely Wife","Two children","Secure Environment"],days:500,image:family,},{name:"Charity Services",vid:"tracker_charity",pic:"https://kashmirreader.com/wp-content/uploads/2022/09/Charity-The-Pillar-of-Islam.jpg",linkk:img6,tasks:["Educate 100 children","Feed 1000 people","Donate above 1 crore"],days:1800,image:charity}])
  const dailerFunction=()=>{

  }
  const [notifications, setNotifications] = useState([]);
  const showCustomNotification = (e) => {
    const newNotification = {
      id: Date.now(),
      title: 'Custom Notification',
      message: 'This is a custom notification.',
    };

    setNotifications({...dailer[e],id:Date.now()});
  };

  const closeNotification = (id) => {
    setNotifications({});
  };
  const crossOver=useRef();
  const imageUrls = [
    // fame1,
    // fame2,
    fame3
  ];
  
  useEffect(()=>{

    setSubP(completed?.length/(todo?.length+completed?.length)*100)
    const a=document.querySelector(".progress-bar5")
    a.style.width=`${completed?.length/(todo?.length+completed?.length)*100}%`
    
  },[todo,completed])
useEffect(()=>{
  setSubP(completed?.length/(todo?.length+completed?.length)*100)
},[])
  
  const todoDelete=(i)=>{
    setTodo( todo.filter((item) => item!=i))
  }
  const handleClick = (event,i,index) => {
    if (event.detail === 2) {
      setTick(index)
      // const a=document.querySelector(".todop")
      // a.style.textDecoration="line-through"
      // crossOver.current.style.textDecoration="line-through"

      setTimeout(() => {
        setTick(0)
        // a.style.textDecoration="none"
        // crossOver.current.style.textDecoration="none"
        setTodo( todo.filter((item) => item!=i))
        setcompleted([...completed,i])
        setSubP(completed.length/(todo.length+completed.length)*100)
      }, 600);}}
  const pathData = `
    M 50 250C 150 100, 150 400, 250 250S 400 400, 500 250S 650 100, 750 250C 850 400, 850 800, 950 250C 1050 400, 1075 200, 1125 250C 1175 300, 1200 350, 1250 250
  `;
const listt=["M 50 250 C 150 100, 150 400, 250 250",  
  "S 400 400, 500 250",
  "S 650 100, 750 250",
  "C 850 400, 850 800, 950 250",
  "C 1050 400, 1075 200, 1125 250",
  "C 1175 300, 1200 350, 1250 250"]
  const pathAdd=(num)=>{
    let temp;
    if(num==1){
      temp=(count+1)%6
      setCount(temp);
    }else{
      setCount((count-1)%6);
    }
    let a="";
    for(let i=0;i<=count;i++){
      a=`${a+listt[i]}`;
      setpathDataa(a);
      console.log(a)
    }
    if (dailer[count].linkk.current) {
      const currentTop = parseFloat(getComputedStyle(dailer[count].linkk.current).top) || 0;
      const newTop = currentTop - 100; // Move the element up by 10 pixels
      dailer[count].linkk.current.style.top = `${newTop}px`;
    }
  }
const tooltipContent = (
  <div>
    <p>This is a tooltip with an unordered list:</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>
);
const fadeInVariants = {
  hidden: {
    opacity: 1,
    y: 400, // Start from above the container
  },
  visible: {
    opacity: 1,
    y: 0, // End at the original position
    transition: {
      duration:0.7,
      type:"spring"
    }
  },
};

  return (
    <div className="flex flex-col justify-center">
       <div className="notification-container">

          <CustomNotification
            key={notifications.id}
            title={notifications.name}
            onClose={() => closeNotification(notifications.id)}
          />

      </div>
          <div className="flex flex-col space-y-1 justify-center items-center absolute top-[44%] right-2">
    <svg onClick={()=>{
pathAdd(1);
    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8 p-2 rounded-full bg-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
</svg>
      <img src={dailer[count].image}className="h-12 w-12"/>
      <svg onClick={()=>{
dailerFunction(0);
    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8 p-2 rounded-full bg-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
    </div>
     <motion.svg variants={container}
      initial="hidden"
      animate="visible"  width="1400" height="650" className='' >


      <motion.text variants={itemsJourney} x="530" y="280"  className='outline_text bg-black opacity-5' style={{
        backgroundColor:"black"
      }}>Journey</motion.text>
      
  {/* <rect x="550" y="165" width="800" height="100" fill="yellow" rx="10" className="z-10" /> */}
  {/* <text x="530" y="280"  className='outline_text' style={{
      }}>Journey</text> */}

       {/* <foreignObject x="530" y="200" width="900px" height="50vh" className='' >
        <h1 className='opacity-5 text-[150px] font-[600]'>Journey</h1>
       </foreignObject> */}
        {/* Grey dashed line */}
        <motion.path d={pathData} fill="none" stroke="grey" strokeWidth="3" strokeDasharray="4" variants={pathVariants}
      initial="hidden"
      animate="visible" />
        <motion.path d={pathDataa} fill="none" stroke="red" strokeWidth="3"  strokeDasharray="4"  variants={pathVariants}
      initial="hidden"
      animate="visible" />
        {/* Circle 1 */}
        <motion.g variants={item}>
          <circle cx="50" cy="250" r="4" fill="black" />
          <line x1="50" y1="250" x2="50" y2="220" stroke="black" strokeWidth="2" />
          <polygon points="50,220 60,230 50,240" fill="red" />
          <Tooltip content={tooltipContent} placement="top">
            <circle cx="50" cy="250" r="6" />
          </Tooltip>
        </motion.g>

        {/* Circle 2 */}
        <motion.g variants={item}>
        <circle cx="250" cy="250" r="4" fill="black" />
        <line x1="250" y1="250" x2="250" y2="220" stroke="black" strokeWidth="2" />
        <polygon points="250,220 260,230 250,240" fill="red">
          <title>Check Point-2(2st year)</title>
        </polygon>
        </motion.g>

        {/* Circle 3 */}
        <motion.g variants={item}>
        <circle cx="500" cy="250" r="4" fill="black" />
        <line x1="500" y1="250" x2="500" y2="220" stroke="black" strokeWidth="2" />
        <polygon points="500,220 510,230 500,240" fill="red">
        <title>Check Point-3(3st year)</title>
        </polygon>
        </motion.g>

        {/* Circle 4 */}
        <motion.g variants={item}>
        <circle cx="750" cy="250" r="4" fill="black" />
        <line x1="750" y1="250" x2="750" y2="220" stroke="black" strokeWidth="2" />
        <polygon points="750,220 760,230 750,240" fill="red">
        <title>Check Point-4(4st year)</title>
        </polygon>
        </motion.g>

        {/* Circle 5 */}
        <motion.g variants={item}>
        <circle cx="950" cy="250" r="4" fill="black" />
        <line x1="950" y1="250" x2="950" y2="220" stroke="black" strokeWidth="2" />
        <polygon points="950,220 960,230 950,240" fill="red">
        <title>Check Point-5(5st year)</title>
        </polygon>
        </motion.g>

        {/* Circle 6 */}
        <motion.g variants={item}>
        <circle cx="1125" cy="250" r="4" fill="black" />
        <line x1="1125" y1="250" x2="1125" y2="220" stroke="black" strokeWidth="2" />
        <polygon points="1125,220 1135,230 1125,240" fill="red">
        <title>Check Point-6(6st year)</title>
        </polygon>
        </motion.g>

        {/* Circle 7 */}
        <motion.g variants={item}>
        <circle cx="1250" cy="250" r="4" fill="black" />
        <line x1="1250" y1="250" x2="1250" y2="220" stroke="black" strokeWidth="2" />
        <polygon points="1250,220 1260,230 1250,240" fill="red">
        <title>Check Point-7(7st year)</title>
        </polygon>
        </motion.g>

        {/* Flagpole */}
        <motion.image variants={itemss} href={income} ref={img7} x="50" y="170" width="90" height="90" className=' bg-black' style={{  
      }} />
             <motion.image variants={itemss} href={success}  values={1} onClick={()=>{
        showCustomNotification(1);
       }} ref={img1} x="225" y="170" width="120" height="120" className=' bg-black' style={{
      }} />
            <motion.image variants={itemss} href={car} ref={img2} x="500" y="160" width="100" height="100" className=' bg-black' style={{

      }} />
            <motion.image variants={itemss} href={house}  ref={img3} x="705" y="230" width="110" height="110" className=' bg-black' style={{
        
      }} />
      <motion.image variants={itemss} href={family} ref={img4} x="940" y="230" width="90" height="90" className=' bg-black' style={{  
      }} />
            <motion.image variants={item} href={charity} ref={img5} x="1120" y="239" width="60" height="60" className=' bg-black' style={{  
      }} />
      <motion.image variants={itemss} href={end}ref={img6}  x="1220" y="160" width="150" height="150" className=' bg-black' style={{  
      }} />

        <motion.foreignObject variants={itemsDay} x="780" y="50" width="900px" height="50vh" className='' >
          <h1  className='outline_text' style={{
            fontSize:"100px",
            opacity:"0.06"
          }}>{dailer[count].days} Days</h1>
        </motion.foreignObject>
        <foreignObject x="950" y="370" width="420px" height="50vh" className='' >
        <motion.div variants={fadeInVariants} initial="hidden"
      animate="visible" className="app bg-slate-100 p-2 rounded-xl">
          <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-2'>
              <img src={dailer[count].image} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
              <h1 className='py-1 text-[16.5px] font-[500]'>{dailer[count].name}</h1>
              </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>
              </div>
      <Slideshow images={dailer[count].vid} interval={3000} />
    </motion.div>
        </foreignObject>
        <foreignObject x="20" y="310" width="650px" height="90vh" className=''>
          <div className='flex flex-row  space-x-2'>
            <motion.div initial="hidden"
      animate="visible" variants={fadeInVariants} className='w-[240px] bg-slate-100 rounded-xl p-3 overflow-scroll example h-[50vh]'>
              <div className='flex flex-row items-center space-x-1 mb-4'>
              <img src={end} className='h-10 w-10'/>
              <h1 className='text-[26px] font-[500]'>Journey</h1></div>
              <div className='flex flex-row items-center space-x-2'>
              <img src={income} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
              <h1 className='py-1 text-[16.5px]'>Multiple Income</h1>
              </div>
              <div className='w-full h-[1px] my-2 bg-gray-300'></div>
              <div className='flex flex-row items-center space-x-2'>
              <img src={success} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
              <h1 className='py-1 text-[16.5px]'>Entrepreneur</h1>
              </div>
              <div className='w-full my-2 h-[1px] bg-gray-300'></div>
                            <div className='flex flex-row items-center space-x-2'>
              <img src={car} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
              <h1 className='py-1 text-[16.5px]'>Benz S-class</h1>
              </div>
              <div className='w-full my-2 h-[1px] bg-gray-300'></div>
                            <div className='flex flex-row items-center space-x-2'>
              <img src={house} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
              <h1 className='py-1 text-[16.5px]'>Modern Mansion</h1>
              </div>
              <div className='w-full h-[0.5px] my-2 bg-gray-300'></div>
                            <div className='flex flex-row items-center space-x-2'>
              <img src={family} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
              <h1 className='py-1 text-[16.5px]'>Happy Family</h1>
              </div>
              <div className='w-full my-2 h-[1px] bg-gray-300'></div>
                            <div className='flex flex-row items-center space-x-2'>
              <img src={charity} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
              <h1 className='py-1 text-[16.5px]'>charity Services</h1>
              </div>
              <div className='w-full my-2 h-[1px] bg-gray-300'></div>
                            <div className='flex flex-row items-center space-x-2'>
              <img src={end} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
              <h1 className='py-1 text-[16.5px]'>The End</h1>
              </div>
              <div className='w-full h-[0.5px] my-2 bg-gray-300'></div>
            </motion.div>
          
        <motion.div variants={fadeInVariants} initial="hidden"
      animate="visible" className={`w-[370px] h-[50vh] bg-gray-50 shadow  rounded-2xl relative overflow-scroll example`}>
        <div className='bg-slate-100 p-4'>
  <div>
    <div className='flex flex-row space-x-2 items-center'>
    <img src={dailer[count].image} className='h-10 w-10 bg-white rounded-full p-1 shadow'/>
    <h1 className='text-2xl font-[500]'>{dailer[count].name}</h1>
    </div>

  {/* <p className='text-gray-500'>Balance your mental health- Research has proven that those who wake up early have shown better mental health symptoms.</p> */}
  <div className='flex flex-col space-y-2 my-2'>
    <div className='flex flex-row justify-between'>
      <p>Progress</p>
      <p className='text-red-500'>{subP.toFixed(1)}%</p>
    </div>

    <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className={`h-full bg-slate-800 rounded-lg progress-bar progress-bar5`} ></div>
</div>
       </div>
  </div>
<div className='w-full h-[1px] bg-gray-300 my-3'></div>
<div className="flex flex-row justify-between items-center">
<h1 className='py-1'>Morning Routine's Todo</h1>
<div className="flex flex-row items-start space-x-1">
  <img src="./bard-ai.png"className="w-10 h-7" />
  <div className=' bg-red-500 text-white p-1 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
</svg>
</div>
</div>
</div>

<motion.div variants={container} className='flex flex-col space-y-2'>
  {
    dailer[count].tasks.map((i,index)=>{
      return(
        <motion.div variants={itemss} className='flex flex-row justify-between border-2 todocss items-center p-[5px] rounded-lg bardcss border-slate-200 todo'onClick={(event)=>{
          handleClick(event,i,index+1)
        }}>
        <div className='flex flex-row space-x-3 items-center todo1'>
        {
          (tick && (tick==index+1))?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        :<img src="dumbel-logo.png" className="p-2 bg-white h-10 w-10 rounded-full"/>
        }
        <p className='todop' ref={crossOver}>{i}</p>
        </div>
        {/* <div className="flex flex-row space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6" onClick={()=>{
          todoDelete(i)
        }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
      <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
    </svg>
    
    </div> */}
    <div className='flex flex-row items-center justify-center pr-2'>
      <p className='text-gray-500 text-lg'><span className='text-red-600 text-[24px] font-semibold'>5</span>/112</p>
    </div>
      </motion.div>
      )
    })
  }
  {
    (line)? <h1 className="m-auto text-sm">Creating your todo list....</h1>:<></>
  }
 

</motion.div>
<div className='w-full h-[0.5px] bg-gray-300 my-3'></div>
<h1 className="mt-2">Completed</h1>
<div className='flex flex-col space-y-2'>
{
  completed.map((i)=>{
    return(
      <div className='flex flex-row justify-between border-2 items-center p-[5px] rounded-lg bardcss opacity-[0.85] line-through border-slate-200'>
      <div className='flex flex-row space-x-3 items-center'>
      <img src="dumbel-logo.png" className="p-2 bg-white h-10 w-10 rounded-full"/>
      <p className="text-gray-600">{i}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
    <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
  </svg>
    </div>
    )
  })
}
</div>
  </div>
  </div>
  </motion.div>
  </div>
        </foreignObject>
      </motion.svg>
    </div>
  );
}
