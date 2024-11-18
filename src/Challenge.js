import React from 'react'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell} from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import ConcentricGraph from './ConcentricGraph';
import { Completionist } from './Completionist';
import Countdown from 'react-countdown';

export default function Challenge() {
    const [isStageOneComplete, setIsStageOneComplete] = useState(false);
    const percentages = [{percentages:40,color:"red",name:"Morning Routine"},{percentages:70,color:"#17B169",name:"Python Task"},{percentages:90,color:"#018749",name:"Leetcode"},{percentages:95,color:"#006241",name:"Night Routine"}];
    const data1 = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    const ToDocontainer = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
            delay: 0.1,
            duration: 0.5,
          }
        }
      };
      const fight = {
        hidden: { opacity: 0, scale: 3 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.2,
            ease:"linear"
            
          }
        }
      };
      const fight1 = {
        hidden: { opacity: 0, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.2,
            ease:"linear"
            
          }
        }
      };
      
      const item = {
        hidden: { x: -1000, opacity: 1 },
        visible: {
          x: 0,
          opacity: 1
        }, transition: {
            duration: 0.8,
            type: "spring", 
            stiffness: 200, 
            damping: 20,
          }
      };
      const item1 = {
        hidden: { x: 1000, opacity: 1 },
        visible: {
          x: 0,
          opacity: 1
        }, transition: {
            duration: 0.5,
            type: "spring", 
            stiffness: 200, 
            damping: 20,
          }
      };
    const stageOneVariants = {
        initial: {
          opacity: 0,
          scale:1,
          x: -100,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.3,
            delay:2
          },
        },
      }
      const stageTwoVariants = {
        initial: {
          opacity: 1,
          y: 200,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration:0.3,
            delay:2
          },
        },
      };

      const circle = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            type:"spring",
            delay:2
          }
        }
      };

      useEffect(() => {
        if (isStageOneComplete) {
          // Stage one is completed, wait for 2 seconds, then start stage two
          setTimeout(() => {
            setIsStageOneComplete(false); // Reset stage one
          }, 1000); // Wait for 2 seconds before starting stage two
        }
      }, [isStageOneComplete]);
      const [isAnimating, setIsAnimating] = useState(false);

      const handleButtonClick = () => {
        setIsAnimating(true);
      };
      useEffect(() => {
        if (isAnimating) {
          // Reverse the animation after 5 seconds
          const timeoutId = setTimeout(() => {
            setIsAnimating(false);
          }, 5000); // 5000 milliseconds (5 seconds)
    
          return () => clearTimeout(timeoutId); // Clear the timeout if component unmounts
        }
      }, [isAnimating]);
  return (
    <div className='flex flex-row justify-between h-[93.3vh] items-center relative'>
            <motion.svg initial={{y:-400}} animate={{y:0,transition:{
                delay:3,ease: "linear",duration:0.1
            }}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute z-20 left-[48.5%] top-[39.7%]  text-yellow-300 w-10 h-10">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
</motion.svg>
<motion.h1 className='absolute text-3xl left-[48.9%] z-20 top-[40%] text-red-600 font-semibold'  variants={circle}
        initial="hidden"
        animate="visible">v</motion.h1>
        <motion.div className='h-full w-full absolute flex flex-col items-center justify-center z-10 text-[110px]  text-red-600 font-semibold'  
 variants={fight1} initial="hidden"
 animate={isAnimating ? "visible" : "hidden"} style={{
          backgroundColor: 'rgb(255,255,255,0.9)',
        }}>
          <motion.h1 variants={fight} initial="hidden"
        animate={isAnimating ? "visible" : "hidden"}>Fight</motion.h1>
        <div className='absolute bottom-[60px]'>
        <Countdown
        date={Date.now() + 5000}
        renderer={({ hours, minutes, seconds, completed }) => {
          if (completed) {
            return <Completionist />;
          } else {
            return (
              <span className="text-[30px]">
                {minutes}:{seconds}
              </span>
            );
          }
        }}
      /></div></motion.div>
<motion.h1 className='absolute z-20 text-3xl left-[50.1%] top-[40%] font-semibold text-red-600'  variants={circle}
        initial="hidden"
        animate="visible">s</motion.h1>
<div className='left-[27.7%] absolute bottom-[-10px]'><motion.h1 variants={stageTwoVariants} initial="initial"
        animate="animate"  className='text-black  outline_text2'
        style={{
            color:"#F8F8F8",
            fontSize:"120px"
        }}>Challenge</motion.h1><motion.button variants={circle} initial="hidden"
        animate="visible" onClick={handleButtonClick}  className='absolute top-[80px] left-[39%] opacity-[0.9] bg-red-500 text-white z-40 p-2 rounded-lg'>Start Challenge</motion.button></div>
        <motion.div   initial="hidden"
        animate="visible" variants={ToDocontainer}  className='flex flex-row space-x-2 overflow-hidden'>
            <motion.div variants={item} className='w-[380px] h-[85vh] bg-slate-50 shadow rounded-xl overflow-scroll'>
            <div className='w-[100%] h-[100%] bg-slate-50 rounded-3xl p-3'>
          <h1 className='text-xl font-semibold pb-2'>Routine Chart:</h1>
        <div className='w-full flex flex-row items-center justify-center'><div className='bg-white rounded-full w-fit'><ConcentricGraph percentages={percentages} /></div></div>
        <div className='p-3  flex flex-row items-center justify-around'>
        <div className='flex flex-col items-center justify-center pr-2 bg-white p-2 rounded-lg shadow'>
      <span className='text-gray-500 text-lg'><span className='text-green-600 text-[24px] font-semibold'>60</span>/112 </span>
      <p className=''>Completed</p>
    </div>
    <div className='flex flex-col items-center justify-center pr-2 bg-white p-2 rounded-lg shadow'>
      <span className='text-gray-500 text-lg'><span className='text-yellow-500 text-[24px] font-semibold'>50</span>/112 </span>
      <p className=''>Incomplete</p>
    </div>
    <div className='flex flex-col items-center justify-center pr-2 bg-white p-2 rounded-lg shadow px-4'>
      <span className='text-gray-500 text-lg'><span className='text-red-600 text-[24px] font-semibold'>2</span>/112 </span>
      <p className=''>Pending</p>
    </div>
        </div>
        <hr id="" className="m-auto m-1 bg-slate-300"style={{width:"95%",border:"none",height:"1.3px"}}/>
        <h1 className='text-xl font-semibold p-2'>Forest Chart:</h1>
        <ResponsiveContainer width="100%" height="45%">
        <BarChart
          width={100}
          height={100}
          data={data1}
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
          <Bar dataKey="pv" fill="#17B169" />
          <Bar dataKey="uv" fill="red" />
        </BarChart>
      </ResponsiveContainer>
          </div>
            </motion.div>
            <motion.div variants={item} className='w-[300px] relative h-[65vh] shadow bg-slate-50 rounded-xl overflow-hidden'style={{
            }}>
            <img src='https://captionslover.com/wp-content/uploads/2023/06/Profile-Pic-For-Instagram-For-Boy.jpg' className='shadow-lg rounded-full absolute h-[100px] left-[37%] top-[105px] z-[20] w-[100px]'style={{
           }}/>

           <div className=''><img src='https://i.pinimg.com/originals/3a/16/df/3a16df8d7ddb3840a57e5aadf79b8ee2.jpg'className='w-full h-[150px] opacity-[0.75]'/>
           <div className='mt-[60px] flex flex-col items-center justify-center'>
<h1 className='font-semibold text-xl z-20'>Kishore Kumar P</h1>
<div className='flex flex-row justify-around mt-2 items-center w-full'>
<div className='flex flex-row items-center space-x-1 p-2 bg-white rounded-lg shadow'>
    <div className='flex flex-row items-center space-x-1'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
  <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
</svg>
    </div>
10
    </div>
    <div className='flex flex-row items-center space-x-1 p-2 bg-white rounded-lg shadow'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
</svg>
115
    </div>

    <div className='flex flex-row items-center space-x-1 p-2 bg-white rounded-lg shadow'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-yellow-400 w-6 h-6">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
</svg>

98
    </div>
    
</div>
<div className='flex flex-col space-y-2 my-2 w-[90%] pt-2'>
    <div className='flex flex-row justify-between'>
      <p>Routine Progress</p>
      <p className=''>{100}%</p>
    </div>

    <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className={`h-full bg-slate-800 rounded-lg progress-bar1 progress-bar5`} style={{
    backgroundColor:"red"
  }}></div>
</div>
       </div>
  </div>
  <div className='flex flex-col space-y-2 my-2 w-[90%] pt-2'>
    <div className='flex flex-row justify-between'>
      <p>Productivity Target</p>
      <p className=''>{100}%</p>
    </div>

    <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className={`h-full bg-slate-800 rounded-lg progress-bar1 progress-bar5`} ></div>
</div>
       </div>
  </div>
  <div className='flex flex-row w-full justify-between p-2'>
    <div className='flex flex-row space-x-1'>
        <p>Win-<span className='text-green-600 text-lg font-semibold'>98%</span></p>
    </div>
    <div className='flex flex-row space-x-1'>
        <p>Lose-<span className='text-red-600 text-lg font-semibold'>2%</span></p>
    </div>
  </div>
           </div>

           </div>

            </motion.div>
        </motion.div>

        <motion.div  className='flex flex-row space-x-2'>
        <motion.div initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8,delay:0.9,type: "spring", 
        stiffness: 200, 
        damping: 20, }} className='w-[300px] h-[65vh] bg-slate-50 shadow rounded-xl relative overflow-hidden'>
        <img  src='https://images.unsplash.com/photo-1543124037-6237ede05991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' className=' shadow-lg rounded-full absolute h-[100px] left-[37%] top-[105px] z-[20] w-[100px]'style={{
           }}/>

           <div className=''><img src='https://penji.co/wp-content/uploads/2020/01/microsoft-facebook-cover-photo.jpg'className='w-full h-[150px] opacity-[0.75]'/>
           <div className='mt-[60px] flex flex-col items-center justify-center'>
<h1 className='font-semibold text-xl  z-20'>Manish kumar R</h1>
<div className='flex flex-row justify-around mt-2 items-center w-full'>
<div className='flex flex-row items-center space-x-1 p-2 bg-white rounded-lg shadow'>
    <div className='flex flex-row items-center space-x-1'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
  <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
</svg>
    </div>
10
    </div>
    <div className='flex flex-row items-center space-x-1 p-2 bg-white rounded-lg shadow'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
</svg>
115
    </div>

    <div className='flex flex-row items-center space-x-1 p-2 bg-white rounded-lg shadow'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-yellow-400 w-6 h-6">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
</svg>

98
    </div>
</div>
<div className='flex flex-col space-y-2 my-2 w-[90%] pt-2'>
    <div className='flex flex-row justify-between'>
      <p>Routine Progress</p>
      <p className=''>{100}%</p>
    </div>

    <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className={`h-full bg-slate-800 rounded-lg progress-bar1 progress-bar5`} ></div>
</div>
       </div>
  </div>
  <div className='flex flex-col space-y-2 my-2 w-[90%] pt-2'>
    <div className='flex flex-row justify-between'>
      <p>Productivity Target</p>
      <p className=''>{100}%</p>
    </div>

    <div className='flex flex-row space-x-3 items-center'>
<div className='h-2 rounded-lg flex-1 bg-gray-200 relative overflow-hidden'>
  <div className={`h-full bg-slate-800 rounded-lg progress-bar1 progress-bar5`} ></div>
</div>
       </div>
       <div className='flex flex-row w-full justify-between py-2'>
    <div className='flex flex-row space-x-1'>
        <p>Win-<span className='text-green-600 text-lg font-semibold'>98%</span></p>
    </div>
    <div className='flex flex-row space-x-1'>
        <p>Lose-<span className='text-red-600 text-lg font-semibold'>2%</span></p>
    </div>
  </div>
  </div>
           </div>
           </div>
        </motion.div>
            <motion.div initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8,delay:0.4, type: "spring", 
        stiffness: 200, 
        damping: 20,}} className='w-[380px] h-[85vh] bg-slate-50 rounded-xl overflow-scroll shadow'>
        <div className='w-[100%] h-[100%] bg-slate-50 rounded-3xl p-3'>
          <h1 className='text-xl font-semibold pb-2'>Routine Chart:</h1>

          <div className='w-full flex flex-row items-center justify-center'><div className='bg-white rounded-full w-fit'><ConcentricGraph percentages={percentages} /></div></div>
        <div className='p-3  flex flex-row items-center justify-around'>
        <div className='flex flex-col items-center justify-center pr-2 bg-white shadow p-2 rounded-lg'>
      <span className='text-gray-500 text-lg'><span className='text-green-600 text-[24px] font-semibold'>60</span>/112 </span>
      <p className=''>Completed</p>
    </div>
    <div className='flex flex-col items-center justify-center pr-2 p-2 bg-white shadow rounded-lg'>
      <span className='text-gray-500 text-lg'><span className='text-yellow-500 text-[24px] font-semibold'>50</span>/112 </span>
      <p className=''> Incomplete</p>
    </div>
    <div className='flex flex-col items-center justify-center pr-2 p-2 bg-white px-4 shadow rounded-lg'>
      <span className='text-gray-500 text-lg'><span className='text-red-600 text-[24px] font-semibold'>2</span>/112 </span>
      <p className=''>Pending</p>
    </div>
        </div>
        <hr id="" className="m-auto m-1 bg-slate-300"style={{width:"95%",border:"none",height:"1.3px"}}/>
        <h1 className='text-xl font-semibold p-2'>Forest Chart:</h1>
        <ResponsiveContainer width="100%" height="45%">
        <BarChart
          width={100}
          height={100}
          data={data1}
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
          <Bar dataKey="pv" fill="#17B169" />
          <Bar dataKey="uv" fill="red" />
        </BarChart>
      </ResponsiveContainer>
          </div>
            </motion.div>
        </motion.div>
    </div>
  )
}
