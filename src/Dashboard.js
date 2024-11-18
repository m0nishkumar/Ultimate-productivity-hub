import React from 'react';
import ConcentricGraph from './ConcentricGraph';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell} from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import {Customflag} from './Customflag'
import HeatmapComponent from './HeatmapComponent';
import signature from './signature1.png'
import tree2 from './tree3.png'
import tree7 from './tree7.png'
import sbi from './sbi.png'
import vtree from './vtree.png'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react';
export const Dashboard = () => {
  const [tree,setTree]=useState(0);
  const trees=[tree2,vtree];
    const percentages = [{percentages:40,color:"red",name:"Morning Routine"},{percentages:70,color:"#17B169",name:"Python Task"},{percentages:90,color:"#018749",name:"Leetcode"},{percentages:95,color:"#006241",name:"Night Routine"}]; // Adjust the percentage as needed
    const data2 = [
      {
        subject: 'Happy',
        A: 120,
        B: 110,
        fullMark: 150,
      },
      {
        subject: 'Sad',
        A: 98,
        B: 130,
        fullMark: 150,
      },
      {
        subject: 'Angry',
        A: 86,
        B: 130,
        fullMark: 150,
      },
      {
        subject: 'Depressed',
        A: 99,
        B: 100,
        fullMark: 150,
      },
      {
        subject: 'Confused',
        A: 85,
        B: 90,
        fullMark: 150,
      },
      {
        subject: 'Lucky',
        A: 65,
        B: 85,
        fullMark: 150,
      },
    ];
    const data3 = [
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
    const data = [
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
    return (
      <div>
      <div className='w-full h-[93vh] mt-3 flex flex-row justify-between'>
        <div className='w-[70%] h-[100%] flex flex-col justify-between'>
          <div className='h-[45%] w-full flex flex-row justify-between bg-slate-50 rounded-3xl'>
            
            <div className='w-[70%] p-2'>
            <ResponsiveContainer width="100%" height="100%">
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
            </div>
            <div className='w-[30%] flex flex-col p-2 justify-around'>
              <div className='flex flex-row items-center space-x-3 border-2 bg-white border-gray-300 p-1 px-3 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 p-1 bg-green-500 rounded-lg text-white">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>
                <div className='flex flex-col'>
                  <h1 className='text-gray-500'>Task completion</h1>
                  <h1 className=' font-semibold'>90.9%</h1>
                </div>
              </div>
              <div className='flex flex-row items-center space-x-3 border-2 bg-white border-gray-300 p-1 px-3 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-lg p-1 bg-yellow-500 text-white">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>
                <div className='flex flex-col'>
                  <h1 className='text-gray-500'>Task Incomplete</h1>
                  <h1 className=' font-semibold'>90.9%</h1>
                </div>
              </div>
              <div className='flex flex-row items-center space-x-3 border-2 bg-white border-gray-300 p-1 px-3 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 rounded-lg p-1 bg-red-500 text-white">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>
                <div className='flex flex-col'>
                  <h1 className='text-gray-500'>Task Pending</h1>
                  <h1 className=' font-semibold'>90.9%</h1>
                </div>
              </div>
              <h1 className='font-semibold mx-auto text-lg'>(Growth Trends)</h1>
            </div>
          </div>
          <div className='h-[54%] w-full flex flex-row bg-slate-50 rounded-3xl'>
            
            <div className='w-[42%] h-full'>
            <h1 className='mx-5 text-xl font-semibold'>Mood Tracker:</h1>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      </div>
      <div className='w-[58%] h-full'>
      <h1 className='mx-5 text-xl font-semibold'>Journey Tracker:</h1>
      <ResponsiveContainer width="100%" height="100%">
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={<Customflag/>} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
          </div>
        </div>
        <div className='w-[29.5%] h-[100%] bg-slate-50 rounded-3xl p-3'>
          <h1 className='text-xl font-semibold pb-2'>Routine Chart:</h1>

        <ConcentricGraph percentages={percentages} />
        <div className='p-3  flex flex-row items-center justify-around'>
        <div className='flex flex-col items-center justify-center pr-2'>
      <span className='text-gray-500 text-lg'><span className='text-green-600 text-[24px] font-semibold'>60</span>/112 </span>
      <p className=''>Completed</p>
    </div>
    <div className='flex flex-col items-center justify-center pr-2'>
      <span className='text-gray-500 text-lg'><span className='text-yellow-500 text-[24px] font-semibold'>50</span>/112 </span>
      <p className=''>Yet to Complete</p>
    </div>
    <div className='flex flex-col items-center justify-center pr-2'>
      <span className='text-gray-500 text-lg'><span className='text-red-600 text-[24px] font-semibold'>2</span>/112 </span>
      <p className=''>Pending</p>
    </div>
        </div>
        <hr id="" className="m-auto m-1 bg-slate-300"style={{width:"95%",border:"none",height:"1.3px"}}/>
        <h1 className='text-xl font-semibold pb-2'>Forest Chart:</h1>
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
        
      </div>
      <div className='flex flex-row space-x-2 w-full mt-10 h-[400px]'>
        <div className='flex-1 bg-slate-50 flex flex-col  h-full '>
          <div className='flex flex-row space-x-2 items-center m-2'>
            <img src={sbi} className='h-8 w-8'/>
          <h1 className='text-lg font-semibold'>State Bank of India:</h1>
          </div>
          <div className='flex flex-row w-full h-full items-center'>
          <div className='w-[77%] h-[285px] check shadow-lg  relative text-black m-3'>
          <h1 className='absolute top-[53px] left-[55px]'>Monish kumar B</h1>
            <h1 className='absolute top-[80px] left-[100px]'>One crore ten lakhs fifty thousand eight hundred only</h1>
            <h1 className='absolute top-[102px] right-[50px]'>1,10,50,800</h1>
            <h1 className='absolute top-[140px] left-[68px]'>4578 7845 9852 7845</h1>
            {/* <h1 className="cursive text-lg font-[600] absolute bottom-[70px] right-[100px]">Universe</h1> */}
            <img src={signature} className='absolute bottom-10 h-[90px] right-4'/>
          </div>
          <div className='flex flex-col space-y-7'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-lg'>Current Balance:</h1>
            <h1 className='text-lg '>₹1,10,50,000</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-lg'>Expected Balance:</h1>
            <h1 className='text-lg '>₹1,10,50,000</h1>
            </div>
          </div>
          </div>
          <h1 className=' mb-2 mx-5'><span className='font-semibold'>Tips: </span>Your expected amount will be reduced when you fail to complete the tasks or routine...</h1>
        </div>
        <div className=' w-[40%] bg-slate-50 relative'>
          <h1 className='text-xl font-semibold m-3'>Grow your tree:</h1>
          <div className='m-3 flex flex-row items-center absolute top-0'>
          <CountdownCircleTimer
    isPlaying
    duration={120}
    colors={["#355E3B","#ff0000"]}
    colorsTime={[70,0]}
    size={170}
    onComplete={() => setTree(1)} // repeat animation in 1.5 seconds}
  >
    {({ remainingTime }) =><img src={trees[tree]} className='rounded-full h-[150px] w-[150px]'/> }
  </CountdownCircleTimer>
  <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" className='flex flex-row items-center  justify-center'>
      <path
        d="M20 150 Q80 30, 140 150 T260 150 Q290 100, 300 150"
        fill="none"
        stroke="grey"
        strokeWidth="3"
        strokeDasharray="6"
      />      <path
      d="M20 150 Q80 30, 140 150 T260"
      fill="none"
      stroke="black"
      strokeWidth="3"
      strokeDasharray="6"
    />
    </svg> 
    <img src={tree7} className='h-[85px] w-[85px]'/>
            
          </div>
          <div className='flex flex-row space-x-2 items-center justify-center w-full'>
          <button className='bg-blue-500 text-[17px] p-2 text-white rounded-lg mt-[210px] mx-5'>Water the plant</button>
          <button className='bg-red-500 text-[17px] p-2 text-white rounded-lg mt-[210px] mx-5'>Boost the Growth</button>
        </div>
        <h1 className='absolute bottom-3 m-2 mx-5'><span className='font-semibold'>Tips: </span>You have to water the plant regularly inorder to get trees and new species plants...</h1>
        </div>
      </div>
      <div className='mt-3 mb-5 mx-2 rounded-lg p-2 bg-slate-50'>
      <HeatmapComponent/>
      </div>
      </div>
    );
}
