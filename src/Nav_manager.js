import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navibar } from './Navibar'
import { Home } from './Home'
import { Work } from './Work'
import { About } from './About'
import { Projects } from './Projects'
import { Services } from './Services'
import { Document } from './Document'
import { Dashboard } from './Dashboard'
import { Login } from './Login'
import { Community } from './Community'
import Challenge from './Challenge'
import { Setup } from './Setup'

export const Nav_manager = ({isOpenLogin,setIsOpenLogin,isOpen,setIsOpen}) => {
  const [clock_events,setClock_events]=useState([{id:1,time:[5,6],name:"Morning-routine",priority:"green",src:"morning-routine.png",routine:true,subTasks:["Enjoy the morning","Wish People","Eat Fruits","Affirmation"]},{id:2,"time":[6,7],name:"Exercise",priority:"green",src:"gym_clock.png",routine:true,subTasks:["Sit-ups","Squats","Running","Push-ups"]},{id:3,name:"Start up",src:"startup-logo1.png","time":[8,9],priority:"red",routine:false,subTasks:["Meeting","Planning","Investors"]},{id:4,"time":[9,10],name:"Leetcode",src:"leetcode_clock.png",priority:"yellow",routine:false,subTasks:["Easy-5","Medium-10"]},{id:5,"time":[11,12],name:"Meeting",src:"meeting_clock.png",priority:"green",routine:true,subTasks:["Send link to the People","Invite the Guest"]},{id:6,"time":[1,2],name:"Book reading",src:"book1_clock.png",priority:"red",routine:true,subTasks:["Reading 10 pages"]},{id:7,"time":[2,3],name:"Python",src:"python.png",priority:"yellow",routine:true,subTasks:["Read Lists & arrays","Revise old concepts"]}]);
  const [timeset,setTimeset]=useState(0);
  const [timesetimg,setTimesetimg]=useState("");
  const [setup,setSetup]=useState(0);
  return (
    <div className="mt-2 mx-[60px]">
        <Navibar isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin}/>
        <Routes>
            <Route path='/' element={<Document setSetup={setSetup} setup={setup} setTimeset={setTimeset} timeset={timeset}  setTimesetimg={setTimesetimg} timesetimg={timesetimg}  setClock_events={setClock_events} clock_events={clock_events}  isOpen={isOpen} setIsOpen={setIsOpen} isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin}/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/project' element={<Projects/>}></Route>
            <Route path='/community' element={<Community/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/challenge' element={<Challenge/>}></Route>
            <Route path='/setup' element={<Setup setSetup={setSetup} setup={setup} isOpen={isOpen} setIsOpen={setIsOpen} setClock_events={setClock_events} clock_events={clock_events}/>}></Route>
            <Route path='/login' element={<Login isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin}/>}></Route>
        </Routes>
    </div>
  )
}
