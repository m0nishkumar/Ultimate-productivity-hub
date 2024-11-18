import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDrop } from "react-dnd";
import { PictureDrop } from "./PictureDrop";
import { PictureDropp } from "./PictureDropp";
import { useDispatch, useSelector } from "react-redux";
import { changeClockList } from "./counterSlice";

const Clock = ({setSetup,setup,clock_events,clock_listt,setClock_events,setChange,Change,setIsOpenLogin,setTimeset,timeset,setTimesetimg,timesetimg}) => {
  const [stateclock, setStateClock] = useState("seven");
  const [time, setTime] = useState(new Date());
  const {clock_list_back}=useSelector((state)=>state.counter)
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        delay: 0.2,
        duration: 0.5,
        type: "spring", // Use spring animation
        stiffness: 200, // Control the stiffness of the spring
        damping: 20,
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  const dispatch=useDispatch();
  const clock_list={
    one:"java.png",two:"mongodb.png",three:"self-care.png",four:"sapling1.png",five:"tree-logo.png",six:"tailwind.png", seven:"meeting_clock.png",eight:"leetcode_clock.png",nine:"startup-logo1.png",ten:"gym_clock.png",eleven:"morning-routine.png",twelve:"python.png",thirteen:"book1_clock.png"
  }
  const onDoubleClick=(event,i)=>{
  //   if(event.detail === 1){
  //     setTimesetimg(clock_list_back[i]);
  //   }
  //   else {
  //     console.log(event.target.id);
  //     console.log(clock_list_back)
  //     dispatch(changeClockList([event.target.id,""]))
  //     console.log(clock_list_back)
  // }
}
  return (

    (!Change)?
      <motion.div className="clock"  variants={container}
    initial="hidden"
    animate="visible" style={{
        // backgroundColor:"#FFDAB9"
    }}>
            <motion.div
        className="hour_hand" 
        style={{
          transform: `rotateZ(${time.getHours() * 30}deg)`
        }}
      />
      <motion.div 
        className="min_hand"
        style={{
          transform: `rotateZ(${time.getMinutes() * 6}deg)`
        }}
      />
      <motion.div
        className="sec_hand" 
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`
        }}
      />
      <span className="twelve z-50" id={0} ><PictureDrop setSetup={setSetup} setup={setup} src={clock_list_back[0]} time="zero" clock_events={clock_events} setTimesetimg={setTimesetimg} clock_listt={clock_listt} setClock_events={setClock_events}/></span>
      <motion.span variants={item} className="one"><PictureDrop setSetup={setSetup} setup={setup} time="one" src={clock_list_back[1]}clock_events={clock_events} setTimesetimg={setTimesetimg} clock_listt={clock_listt} setClock_events={setClock_events}/></motion.span>
      <motion.span  variants={item} className="two" ><PictureDrop setSetup={setSetup} setup={setup} time="two" src={clock_list_back[2]}clock_events={clock_events} setTimesetimg={setTimesetimg} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <span className="three"><PictureDrop setSetup={setSetup} setup={setup} time="three" src={clock_list_back[3]}clock_events={clock_events} clock_listt={clock_listt} setTimesetimg={setTimesetimg} setClock_events={setClock_events}/></span>
      <span  className="four"><PictureDrop setSetup={setSetup} setup={setup} time="four" src={clock_list_back[4]} clock_events={clock_events} clock_listt={clock_listt} setTimesetimg={setTimesetimg} setClock_events={setClock_events}/></span>
      <motion.span  variants={item} className="five" ><PictureDrop setSetup={setSetup} setup={setup} time="five" src={clock_list_back[5]}clock_events={clock_events} setTimesetimg={setTimesetimg} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <motion.span  variants={item} className="six" ><PictureDrop setSetup={setSetup} setup={setup} time="six" src={clock_list_back[6]}clock_events={clock_events} setTimesetimg={setTimesetimg} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <span className="seven"><PictureDrop setSetup={setSetup} setup={setup} time="seven" src={clock_list_back[7]}clock_events={clock_events} clock_listt={clock_listt} setTimesetimg={setTimesetimg} setClock_events={setClock_events}/></span>
      <motion.span  variants={item} className="eight" ><PictureDrop setSetup={setSetup} setup={setup} time="eight" src={clock_list_back[8]}clock_events={clock_events} setTimesetimg={setTimesetimg} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <motion.span  variants={item} className="nine" ><PictureDrop setSetup={setSetup} setup={setup} time="nine" src={clock_list_back[9]}clock_events={clock_events} setTimesetimg={setTimesetimg} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <span className="ten"><PictureDrop setSetup={setSetup} setup={setup} time="ten" src={clock_list_back[10]} clock_events={clock_events} clock_listt={clock_listt}setTimesetimg={setTimesetimg} setClock_events={setClock_events}/></span>
      <motion.span  variants={item} className="eleven"><PictureDrop setSetup={setSetup} setup={setup} time="eleven" src={clock_list_back[11]} clock_events={clock_events} setTimesetimg={setTimesetimg} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
    </motion.div>
    
    :
  
    <motion.div className="clock"  variants={container}
    initial="hidden"
    animate="visible" style={{
        // backgroundColor:"#FFDAB9"
    }}>
            <motion.div
        className="hour_hand" 
        style={{
          transform: `rotateZ(${time.getHours() * 30}deg)`
        }}
      />
      <motion.div 
        className="min_hand"
        style={{
          transform: `rotateZ(${time.getMinutes() * 6}deg)`
        }}
      />
      <motion.div
        className="sec_hand" 
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`
        }}
      />
      <span className="twelve"><PictureDropp src="" time="twelve" clock_events={clock_events} clock_listt={clock_listt} setClock_events={setClock_events}/></span>
      <motion.span variants={item} className="one"><PictureDropp time="thirteen" src=""clock_events={clock_events} clock_listt={clock_listt} setClock_events={setClock_events}/></motion.span>
      <motion.span variants={item} className="two" ><PictureDropp time="fourteen" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <span className="three"><PictureDropp time="fifteen" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></span>
      <span className="four"><PictureDropp time="sixteen" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></span>
      <motion.span variants={item} className="five" ><PictureDropp time="seventeen" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <motion.span variants={item} className="six" ><PictureDropp time="eighteen" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <span className="seven"><PictureDropp time="nineteen" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></span>
      <motion.span variants={item} className="eight" ><PictureDropp time="twenty" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <motion.span variants={item} className="nine" ><PictureDropp time="twentyone" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
      <span className="ten"><PictureDropp time="twentytwo" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></span>
      <motion.span variants={item} className="eleven"><PictureDropp time="twentythree" src=""clock_events={clock_events} clock_listt={clock_listt}setClock_events={setClock_events}/></motion.span>
    </motion.div>
  );
};

export default Clock;
