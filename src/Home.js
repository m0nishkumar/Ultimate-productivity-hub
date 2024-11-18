import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Model } from './Model'
import { Center, Environment, OrbitControls, Lighting } from '@react-three/drei'
import { Shirt } from './Shirt'
import { CameraRigS } from './CameraRig'
import { Computer } from './Computer'
import ReactPlayer from 'react-player'
import { World } from './world.js'
import { motion, AnimatePresence } from "framer-motion"
import { SimpleCube } from './Cube'
import { Link } from 'react-scroll'


export const Home = () => {
  const playerRef = useRef(null);
  const [power,setPower]=useState(false);
  const [st,setSt]=useState(0);
  useEffect(()=>{
    const orbit=()=>{
      const planets = document.querySelectorAll('.planet')
      const planets1 = document.querySelectorAll('.planet1')
  const p_radii = [24,35,40,40,40,40,40,40]
  let p_radians = new Array(7).fill(0)
  const p_velocities = [0.008,0.006,0.007,0.005,0.004,0.0055,0.0065]
  
  const p_orbits = document.querySelectorAll('.p-orbit')
  p_orbits.forEach((p_orbit,index)=>{
    p_orbit.style.height = `${p_radii[index]*2}vmin`
    p_orbit.style.width = `${p_radii[index]*2}vmin`
})
  
  setInterval(()=>{
    planets.forEach((planet,index)=>{
        planet.style.marginLeft = `${Math.cos(p_radians[index]) * 70}vmin`
        planet.style.marginTop = `${Math.sin(p_radians[index]) * 70}vmin`
        p_radians[index] += p_velocities[index] 
    })
  
  },1000/60)

  setInterval(()=>{
    planets1.forEach((planet,index)=>{
        planet.style.marginLeft = `${Math.cos(p_radians[index]) * 80}vmin`
        planet.style.marginTop = `${Math.sin(p_radians[index]) * 80}vmin`
        p_radians[index] += p_velocities[index] 
    })
  },1000/60)
    }
    orbit()
  },[])

  const title=[{"title":"BIT LINKEDIN","desc":"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It launched on May 5, 2003. It is now owned by Microsoft.What LinkedIn is used for the world,LinkedIn is the world's largest professional network on the internet. You can use LinkedIn to find the right job or internship, connect and strengthen professional relationships."},{"title":"CHOOSY","desc":"Its looks great,its coming soon."}]

  return (
    <div id='home'>
        <div className='fixed h-[92vh] w-[90vw] z-50' id="model">
        <Canvas
      shadows
      camera={{ position: [0, 0, 200], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <group>
        <Model />
      </group>
    </Canvas>
    {/* <SimpleCube/> */}
            </div>
    <motion.div className='h-[92vh] flex flex-row'>
      <img src="./blockchain.png" className='w-12 h-12 absolute top-[15%] left-[45%] z-50 rounded-full p-2 rotate-15 bg-slate-100'/>
      <img src="./nxt.png" className='w-[50px] h-[50px] absolute top-[90%] left-[50%] z-50 rounded-full p-1 rotate-12 bg-slate-100'/>
      <img src="./premerie.png" className='w-12 h-12 absolute z-50 bottom-[5%] right-[10%] rounded-full p-1 -rotate-12 bg-slate-100'/>
      <img src="./aws.png" className='w-[50px] h-[50px] absolute z-50 top-[10%] right-[7%] rounded-full p-1 rotate-12 bg-slate-100'/>
        <div className='flex flex-col justify-center h-full'>
            <div className='flex flex-col'>

            <div className='relative'>
            <motion.p  className='text-xl absolute' style={{
              fontFamily:"poppins"
            }}>Hii there,</motion.p>
            <p className='text-xl absolute right-2 top-5 rotate-12' style={{
              fontFamily:"poppins"
            }}>👑</p>
            <p className="text-[100px] font-bold" style={{
                fontFamily:"poppins",
                padding:"0px"
            }}>I'm <span className="text-orange-500">Monish</span></p>
            </div>
            <p className="text-[100px] font-bold"style={{
                fontFamily:"poppins"
            }}></p>
            <p className='text-[35px] inline text-green-500' style={{
              fontFamily:"poppins"
            }}>Mern Stack & Machine Learing<span className="block"> enthusiast</span></p>
            <p className='w-[550px]'style={{
              fontFamily:"Poppins"
            }}>I have a passion for learning new technologies and skills, and I’m always looking for new challenges and opportunities to grow as a developer and a thinker.</p>
            <div className='w-[95%] h-[1.2px] bg-slate-200 my-5'></div>
            <div className='flex flex-row py-2 items-start space-x-6'>
            <button className='p-8 py-3.5 bg-yellow-300 rounded-lg w-[200px]'style={{
                fontFamily:"poppins"
            }}>Download CV</button>
            <button className=' py-3 border-yellow-300 w-[170px] border-2 rounded-lg'style={{
                fontFamily:"poppins"
            }}>Hire me</button>


            </div>
            </div>
        </div>
        <div className="flex-1 flex flex-row justify-center items-center relative">
          <img src="./python.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <img src="./react.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <img src="./mongodb.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <img src="./java.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <img src="./nodejs.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <img src="./tailwind.png"  className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <img src="./git.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-slate-100'/>
          <p className=' absolute planet1 z-50 rounded-full bg-slate-200'>😂</p>
          <p className=' absolute planet1 z-50 rounded-full  bg-slate-200'>😍</p>
          <p className=' absolute planet1 z-50 rounded-full  bg-slate-200'>❤️</p>
          <p className=' absolute planet1 z-50 rounded-full  bg-slate-200'>🤔</p>
          <p className=' absolute planet1 z-50 rounded-full bg-slate-200'>😯</p>
          <p className=' absolute planet1 z-50 rounded-full  bg-slate-200'>😎</p>
          <p className=' absolute planet1 z-50 rounded-full bg-slate-200'>😱</p>
          {/* <img src="./sun.png" className='w-12 h-12 absolute planet z-50 rounded-full p-2 bg-white'/> */}
          <div className='p-orbit rounded-full bg-white z-30 absolute border-gray-400'></div>
          <div className='p-orbit rounded-full bg-slate-300 absolute border-gray-400'></div>
          <div className='p-orbit rounded-full bg-transparent border-2 absolute border-gray-200'></div>
        </div>
    </motion.div>
    <div className='h-[100vh]'id='about'>
      <div className='flex flex-row justify-center'>

    <div className=' bg-slate-100 px-5 py-2 mt-4 rounded-tl-3xl relative overflow-hidden'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[180px] h-[180px] -top-10 -left-5 absolute opacity-[0.08]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>


    <h1 className='text-[32px] ' style={{
      fontFamily:"poppins"
    }}>Who am I?</h1>
    <p className='w-[420px] text-slate-500' style={{
      fontFamily:"poppins"
    }}>Hi, I’m Monish kumar, a 2nd year CSE student with a passion for creating awesome websites and apps.I’m always up for a challenge and ready to make something cool.</p>
    </div>

<div className='w-2'></div>

    <div className='px-5 bg-slate-100 py-2 mt-4  relative overflow-hidden'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[180px] h-[180px] -top-10 -left-5 absolute opacity-[0.06]">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clip-rule="evenodd" />
</svg>
    <h1 className='text-[32px]'style={{
      fontFamily:"poppins"
    }}>What’s my vibe?</h1>
    <p className='w-[420px] text-slate-500'style={{
      fontFamily:"poppins"
    }}>I’m a rebel with a cause and a vision with a mission. I don’t fit in the box, I smash it. I don’t play by the rules, I change them. That’s my vibe.</p>
    </div>

    <div className='w-2'></div>

    <div className=' bg-slate-100 px-5 py-2 mt-4 rounded-tr-3xl  relative overflow-hidden'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[180px] h-[180px] -top-10 -left-5 absolute opacity-[0.08]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>
    <h1 className='text-[32px]'style={{
      fontFamily:"poppins"
    }}>What am i doing?</h1>
    <p className='w-[420px] text-slate-500'style={{
      fontFamily:"poppins"
    }}>I’m a rebel with a cause and a vision with a mission. I don’t fit in the box, I smash it. I don’t play by the rules, I change them. That’s my vibe.</p>
    </div>
    </div>
<div>
<div className='flex flex-row justify-between items-center'>
  <div className='w-[350px] m-2 mt-6 pt-2 shadow rounded-3xl bg-slate-100 relative' style={{fontFamily:"poppins"}}>
  <img src='insta.png' className='w-12 h-12 absolute -top-3 -left-3'/>
    <div className=''>
    <div className='flex flex-col justify-center items-center'>
    <div className='relative'>

      <h1 className='absolute -bottom-2 px-1 bg-slate-100 rounded-md left-5 shadow text-sm flex flex-row items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>
        <h1>248</h1>
      </h1>
    <img src='./p4.jpg' className='w-[100px] h-[100px] rounded-full'/>
    
    </div>
    <h1 className='m-3'>Monish kumar</h1>
    </div>
    <div className='flex flex-row justify-around'>
      <div className='flex flex-col justify-center items-center'>
        <h1>3</h1>
        <h1>Post</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1>317</h1>
        <h1>Followers</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1>256</h1>
        <h1>Following</h1>
      </div>
    </div>
    </div>
    <div className='bg-white rounded-t-2xl pt-5 mt-4 relative shadow'>
      <div className='bg-white shadow rounded-xl w-fit p-1 px-2 absolute -top-3 right-7'>Profile</div>
      <div className='bg-white shadow rounded-xl w-fit p-1 px-2 absolute -top-3 left-7'>Photos</div>
      <div className='bg-white shadow rounded-xl w-fit p-1 px-2 absolute -top-3 right-7 flex flex-row items-center '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        <p>Profile</p>
        </div>
        <div className='bg-white shadow rounded-xl w-fit p-1 px-2 absolute -top-3 left-7 flex flex-row items-center space-x-1'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>

        <p>Videos</p></div>

        <div className='bg-white shadow rounded-xl w-fit p-1 px-2 absolute -top-3 left-[37%] flex flex-row items-center space-x-1'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

        <p>Photos</p>
      </div>
<div className='flex flex-row space-x-3 overflow-hidden mx-2 items-center justify-start'>
  <p className="text-normal">Posts</p>
  <p className='text-sm text-slate-400'>Followers</p>
  <p className='text-sm text-slate-400'>Following</p>
  <p className='text-sm text-slate-400'>Photos</p>
  <p className='text-sm text-slate-400'>Followers</p>
  <p className='text-sm text-slate-400'>Following</p>
</div>
<div className='bg-white py-2'>
<div className='grid grid-cols-2 gap-2 p-2 h-[230px] overflow-hidden bg-slate-50'>
<img src="./p5.jpg"/>
<img src="./p1.jpg"/>
<img src="./p3.jpg"/>
<img src="./p4.jpg"/>
<img src="./p5.jpg"/>
<img src="./profilepic.jpg"/>
</div>
</div>
    </div>
  </div>
  <div className='relative'>
  <svg fill="#F0F0F0" version="1.1" className='w-[240px] absolute text-slate-500 -top-32' viewBox="-18.75 -18.75 412.51 412.51" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#000000" stroke-width="0.0007501"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.25006"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M330.254,210.966c-56.916,1.224-110.16,25.704-167.076,28.764c-16.524,0.612-33.048-1.224-45.9-8.568 c23.256-4.283,45.288-12.239,61.812-27.54c17.749-15.911,19.584-45.287,8.568-66.095c-10.404-19.584-36.72-20.196-55.08-15.3 C89.125,132.63,59.75,184.65,84.229,221.369c-26.928,1.836-53.856,0-80.172,1.225c-5.508,0.611-5.508,8.567,0.612,8.567 c26.928,1.836,59.364,4.284,91.188,2.448c1.836,1.225,3.672,3.061,5.508,4.284c64.872,45.288,159.732-11.628,229.5-13.464 C338.821,223.817,338.821,210.354,330.254,210.966z M89.737,196.277c-6.732-25.091,15.3-46.511,35.496-56.916 c20.196-10.404,48.96-10.404,55.692,15.912c7.956,30.6-18.36,48.959-43.452,56.916c-11.628,3.672-22.644,6.12-34.272,7.344 C96.47,213.413,92.186,206.069,89.737,196.277z"></path> <path d="M371.869,211.577c-8.567-5.508-16.523-11.016-24.479-16.523c-6.732-4.896-13.464-10.404-21.42-12.24 c-6.12-1.836-12.24,7.344-6.732,11.627c6.732,4.896,14.076,9.18,20.809,13.464c4.896,3.061,9.792,6.732,14.075,9.792 c-4.896,2.448-9.792,4.284-14.688,6.732c-3.672,1.836-7.956,3.672-11.628,5.508c-1.224,0.612-2.448,1.836-3.061,3.06 c-1.836,2.448-0.611,1.225,0,0.612c-2.447,1.836-2.447,7.956,1.837,7.344l0,0c1.224,0.612,2.447,0.612,4.283,0.612 c4.284-1.224,9.181-3.06,13.464-4.896c9.181-3.673,18.36-7.345,26.929-12.24C376.153,220.758,376.153,214.025,371.869,211.577z"></path> </g> </g> </g></svg>
  <h1 className='outline_text123 text-[200px] h-fit w-fit font-semibold'>ABOUT</h1>
  <div className='glass absolute h-fit w-36 top-[50%] left-[54%] shadow p-1 z-50'>
    <div className='flex flex-row justify-between z-50'>
      <p className='text-sm'style={{
  fontFamily:"poppins"
}}>Growth</p>
      <div className='flex flex-row space-x-1'>
      <svg xmlns="http://www.w3.org/2000/svg" style={{
        fontFamily:"poppins"
      }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

      </div>
    </div>
    <div className='flex flex-row space-x-1 items-center'style={{
      fontFamily:"poppins"
    }}>
<h1 className='text-black font-bold'>16.2K</h1>
<h1 className='text-xs'>new Followers</h1>
    </div>
    <img src='./barrr.png' />
  </div>
  <div className='flex flex-row justify-between px-3 absolute -bottom-[80px] glass w-[270px] shadow p-2 opacity-80 left-[24%] z-50'>
<img src='./em.png' className='w-10 h-10'/>
<img src='./emoji.png' className='w-10 h-10'/>
<img src='./thinking.png' className='w-10 h-10'/>
<img src='./cool.png' className='w-10 h-10'/>
<img src='./star.png' className='w-10 h-10'/>
  </div>
  <div className='absolute glass flex flex-row shadow left-[54%] top-0 z-50 space-x-2 items-center px-2'>
    <h1 className='absolute w-3 h-3 rounded-full bg-green-600 -top-1 -left-1'></h1>
    <h1 className="text-green-600 text-[35px]"style={{
      fontFamily:"poppins"
    }}>10+</h1>
    <div style={{
      fontFamily:"poppins"
    }}>
    <h1 className="leading-1">Live</h1>
    <h1 className="leading-1">Projects</h1>
    </div>
  </div>
  </div>

  <div className='w-[350px] m-2 mt-6 pt-2 shadow rounded-3xl h-[500px] bg-slate-100 p-2 relative overflow-hidden' style={{fontFamily:"poppins"}}>
    {/* <p className='outline_text1 absolute purpose text-[105px] opacity-[0.09] top-7 -left-12'style={{color:"black"
    }}>PURPOSE</p> */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[200px] h-[200px] -bottom-10 -right-5 absolute opacity-[0.03]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

 <p className='z-50'>
 <span className='text-3xl text-green-600 text-bold'>S</span>ince my childhood, I have harbored a profound dream of becoming an entrepreneur and building a thriving empire. The idea of creating something extraordinary, making a difference, and becoming a millionaire has always ignited a fire within me. However. Alongside my entrepreneurial ambitions, I have nurtured a deep desire to give back to society, and to experience the immeasurable joy of giving. I strongly believe that we get more by giving more. In this journey of pursuing my dreams, I firmly believe that the true value lies in sharing the blessings I receive.
 </p>
 <div className='flex flex-col justify-center m-5 mx-4'>
  <div>
 <p className='text-xl z-50'><span className=" text-2xl">N</span>et-Worth:<span className='text-red-500'> $5000</span></p>
 <p className='text-xl'><span className="text-2xl">C</span>harity:<span className='text-green-500'> $500</span></p>
 </div>
 </div>
  </div>

  </div>
</div>

    </div>
    <div className='flex flex-col h-[100vh] relative' id='projects'>
        <h1 className='absolute outline_text2 text-[110px] -bottom-[0%] py-0 left-0 z-0 font-bold'>{title[st].title}</h1>
    <div className='flex flex-row items-center flex-1 relative'>
      <div className='absolute outline_text2 text-[120px] -top-[3%] right-0 z-0 font-bold'>PROJECTS</div>
      <div className='flex flex-col justify-center space-y-5'>  
        <button className='bg-red-600 p-2 rounded-full' style={{
          zIndex:70
        }} onClick={()=>{
          setPower(!power)
        }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
</svg>
</button>
<div className='flex flex-col items-center'>
<button className='bg-black p-2 rounded-full' style={{
          zIndex:70
        }} onClick={()=>{
  setSt((st+1)%2)
}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>

</button>
<p className="font-semibold text-xl"style={{
  fontFamily:"poppins"
}}>CH</p>
<button className='bg-black p-2 rounded-full'style={{
          zIndex:70
        }}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
</button>
</div>
<div className='w-14 h-[0.5px] bg-slate-300'></div>
<div className='flex flex-col items-center'>
<button className='bg-black p-2 rounded-full'style={{
          zIndex:70
        }} onClick={()=>{
  setSt((st+1)%2)
}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>

</button>
<p className="font-semibold text-xl"style={{
  fontFamily:"poppins"
}}>VOL</p>
<button className='bg-black p-2 rounded-full'style={{
          zIndex:70
        }}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
</button>
</div>
      </div>
      <div className='w-[750px] h-[100%]' id="computer">
    <Canvas camera={{ position: [0,0,5], fov:18 }} >
<ambientLight intensity={0.5} />

        <OrbitControls/>
          <Center>
            <Computer state={power} st={st}/>
            </Center>
         
   </Canvas> 
   </div>
   <div className='flex flex-row flex-1 space-x-3'>
    <div className='h-[460px] w-[15px] mt-6 mr-3 bg-slate-100'></div>
   <div className='  flex flex-col'>
    <p className='text-[75px] text-red-500 z-10 font-[900]'style={{
      fontFamily:"poppins"
    }}>{title[st].title}</p>
    <p className='text-lg' style={{
      fontFamily:"poppins"
    }}>{title[st].desc}</p>
    <h1 className=" font-semibold text-xl mt-3" style={{
      fontFamily:"poppins"
    }}>Technologies:</h1>
    <div className='flex flex-row -space-x-7 mb-5'>
    <img src="./python.png" className='w-[60px] h-[60px] shadow z-50 rounded-full p-2 bg-slate-50'/>
          <img src="./react.png" className='w-[60px] h-[60px] shadow z-50 rounded-full p-2 bg-slate-50'/>
          <img src="./mongodb.png" className='w-[60px] h-[60px] shadow z-50 rounded-full p-2 bg-slate-50'/>
          <img src="./java.png" className='w-[60px] h-[60px] shadow z-50 rounded-full p-2 bg-slate-50'/>
          <img src="./nodejs.png" className='w-[60px] h-[60px] shadow z-50 rounded-full p-2 bg-slate-50'/>
          <img src="./tailwind.png"  className='w-[60px] h-[60px] shadow z-50 rounded-full p-2 bg-slate-50'/>
          <img src="./git.png" className='w-[60px] h-[60px] shadow z-50 rounded-full p-2 bg-slate-50'/>
    </div>
<div className='flex flex-row justify-start space-x-[5%]'>
  <button className='bg-black rounded p-3 px-5 text-white flex flex-row items-center space-x-2'style={{
    fontFamily:"poppins"
  }}>
    <img src='./github-logo.png' className='inline-block w-6 h-6'/>
<p>View Github</p></button>
  <button className='border-2 border-black p-2 px-7 rounded font-semibold flex flex-row items-center space-x-2'style={{fontFamily:"poppins"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block">
  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
</svg>
<p>Visit Site</p></button>
</div>
   </div>
   </div>
    </div>
    <div className='h-[10%] z-50'>
    <div className='flex flex-row justify-around shadow py-2 rounded-t-3xl w-[37%] m-auto glass1' style={{fontFamily:"poppins"}}>
<img src='./youtube-logo.png' className='w-14 h-14 hov'/>
<img src='./animal-logo.png' className='w-14 h-14 hov'/>
<img src='./hung-logo.png' className='w-14 h-14 hov'/>
<img src='./wb-logo.png' className='w-14 h-14 hov'/>
<img src='./csk-logo.png' className='w-14 h-14 hov'/>
      </div>
      </div>
    </div>
    <div className="h-[100vh]" id='contact'>
<div className='flex flex-row items-end'>
  <div className='flex-1 h-[100vh]'>

           <Canvas
            shadows
            camera={{ position: [0,0,-1.5], fov:100 }}
            gl={{ preserveDrawingBuffer: true }}>
<ambientLight intensity={0.5} />

        <Center>
            <World/>
            </Center>
            </Canvas> 
            </div>

  <div className='flex flex-col justify-around h-[92vh] px-4 mt-[3%] rounded-t-3xl relative bg-slate-50 shadow'style={{
    fontFamily:"poppins",zIndex:70,backgroundColor:"#F5F5F5"
  }}>
    <h1 className='text-[40px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>
Lets level up your brand,<br/>together</h1>
    <div>
      <p>Name</p>
    <input type='text' className='h-10 w-full border-2 border-gray-200 px-2 rounded-md' placeholder='Your name'/>
    </div>
    <div>
      <p>Email</p>
    <input type='text' className='h-10 w-full border-2 border-gray-200 px-2 rounded-md'  placeholder='Your email'/>
    </div>

    <div>
      <p>Phone number</p>
      <div className='flex flex-row border-2 border-gray-200 rounded-md px-2 '>
        <select>
          <option>+91</option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
        <input type='text' className='h-10 w-full ' placeholder='7010220960'/>
      </div>

    </div>

    <div>
    <p>How can i help ?</p>
    <textarea className='h-20 w-full border-2 border-gray-200 px-2 rounded-md' placeholder='Tell us a little about the project...'/>
    </div>
    <div>
      <h1>Services</h1>
      <div className='grid grid-cols-2'>
      <div><input type="checkbox" id="topping" name="topping" value="Paneer" />   Website</div>
      <div><input type="checkbox" id="topping" name="topping" value="Paneer" />   Application</div>
      <div><input type="checkbox" id="topping" name="topping" value="Paneer" />   Content creation</div>
      <div><input type="checkbox" id="topping" name="topping" value="Paneer" />   Content creation</div>
      </div>
    </div>
    <button className='w-full text-white bg-blue-900 py-2 rounded-md'>Get started</button>
  </div>
</div>
    </div>
    </div>
  )
}
