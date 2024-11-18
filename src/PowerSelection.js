import React, { useEffect, useState } from 'react';
import goals_logo from './goals_logo.png'
import budget_logo from "./budget_logo.png"
import notebook from "./notebook.png"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeClockList } from './counterSlice';

export function PowerSelection({onClose,start,end,setClock_events,clock_events}) {
  const [input_img,setInput_img]=useState("morning routine");
  const [value,setValue]=useState("");
  const [valueTimeS,setValueTimeS]=useState((start/10<=1)?`0${start}:00`:`${start}:00`);
  const [valueTimeE,setValueTimeE]=useState((end/10<=1)?`0${end}:00`:`${end}:00`);
  const [image_list,setImage_list]=useState([]);
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [image,setImage]=useState("");
  const {clock_list_back}=useSelector((state)=>state.counter);
  const [flag,setFlag]=useState(3);

  const handleAmountChange = (event) => {
    setSelectedAmount(event.target.value);
  };
  const handleFlag=(e)=>{
    setFlag(e.target.value);
    console.log(e.target.value);
  }
  const get_image=()=>{
    axios.get("http://localhost:5000/related",{
      params:{
        text:value
      }
    })
    .then((res)=>{
      console.log(res.data)
      setImage_list(res.data)
    })
  }
  const dispatch=useDispatch();
  const submit=()=>{
    let a=[start,image];
    console.log(start)
    dispatch(changeClockList(a));
    let c={name:value,"time":[start,end],priority:flag,src:image,routine:true,subTasks:[]}
    setClock_events((pre)=>[...pre,c])
  }
  const handleEnterKeyPress = (event) => {
   
    if (event.key === 'Enter') {
      event.preventDefault();
      get_image();
    }
  };
  useEffect(()=>{
    if(image_list.length!=0){
      console.log(image_list);
      setImage(image_list[0]);
    } 
  },[image_list])
  return (
    <div className='flex flex-row h-fit'>
        <div className='flex flex-col w-[410px] h-fit bg-slate-100 p-5 px-7 rounded-xl'>
            <p className="font-Rubik text-lg font-medium tracking-wide uppercase  text-tcolor">Choose your Routine</p>
            <p className="font-Rubik text-xs tracking-wide uppercase mb-1 text-tcolor text-gray-500">Choose your Routine and proritizes them</p>
            <div className='flex flex-row items-center space-x-5'>
            <img src={(image=="")?`./morning-routine.png`:image} className='h-[90px] w-[90px] rounded-full bg-white shadow p-1 mt-2'/>
            <button className='shadow p-2 rounded-xl flex flex-row space-x-1 bg-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
<p>Upload Image</p></button>
            </div>
            <div className='mt-4'>
            <form>
<label className='font-[500] text-xl' onClick={get_image}>Routine name*</label>
  <input type="text" id="fname" name="fname" value={value} onChange={(e)=>{
    setValue(e.target.value);
  }} onKeyPress={(e)=>{
    handleEnterKeyPress(e);
  }}/>
</form>
            </div>

            <div className='mt-5'>
            <form>
<label className='font-[500] text-xl'>Priority Flag</label>
<div className='grid grid-cols-4 gap-2 mt-4'>
    <div className='relative' onClick={()=>{
  setFlag("red")
}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className={`w-14 h-14 shadow border-[1px] rounded-lg bg-white ${(flag=="red")?'border-black':''} p-2 relative`} style={{
    }}>
  <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
</svg>
{(flag=="red")?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 bg-white rounded-full absolute  top-0 right-0 -mt-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>:<></>}
    </div>

    <div className='relative'onClick={()=>{
  setFlag("orange")
}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className={`w-14 h-14 shadow border-[1px] rounded-lg bg-white ${(flag=="orange")?'border-black':''} p-2 relative`}>
  <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
</svg>
{(flag=="orange")?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 bg-white rounded-full absolute  top-0 right-0 -mt-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>:<></>}
    </div>

    <div className='relative'onClick={()=>{
  setFlag("yellow")
}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className={`w-14 h-14 shadow border-[1px] rounded-lg bg-white ${(flag=="yellow")?'border-black':''} p-2 relative`}>
  <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
</svg>
{(flag=="yellow")?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 bg-white rounded-full absolute  top-0 right-0 -mt-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>:<></>}
    </div>


<div className='relative' onClick={()=>{
  setFlag("green")
}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className={`w-14 h-14 shadow border-[1px] rounded-lg bg-white ${(flag=="green")?'border-black':''} p-2 relative`}>
  <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
</svg>
{(flag=="green")?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 bg-white rounded-full absolute  top-0 right-0 -mt-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>:<></>}
    </div>

</div>
</form>
            </div>
            <div className='mt-5'>
                <p className='font-[500] text-xl'>Shedule Time</p>
                <div className='flex flex-row  mt-4 space-x-10'>
                <div className='flex flex-col items-center border-[1px] shadow bg-white border-black p-2 px-5 rounded-lg'>
                    <label>Start-time</label>
                    <img src='clock-logo.png' className='h-20 w-20'/>
                <input type="time" name="time" value={valueTimeS} onChange={(e)=>{
    setValueTimeS(e.target.value);
  }} />
                </div>
                <div className='flex flex-col items-center border-[1px] shadow bg-white border-black p-1 px-5 rounded-lg'>
                    <label>End-time</label>
                    <img src='clock-logo.png' className='h-20 w-20'/>
                <input type="time" name="time" value={valueTimeE} onChange={(e)=>{
    setValueTimeE(e.target.value);
  }}/>  
                </div>
                </div>
            </div>

        </div>
        {/* <div className='w-[0.5px] bg-slate-200 mx-5'></div> */}
        <div className='p-5'>
      <h3 className="font-Rubik text-lg font-medium tracking-wide uppercase  text-tcolor">Select your Superpower:</h3>
      <h3 className="font-Rubik text-xs tracking-wide uppercase mb-1 text-tcolor text-gray-500">What tools would you like to utilize to enhance your efficiency?</h3>
      <div className='h-[0.2px] my-3 w-[100%] m-auto bg-slate-300'></div>
      <div className="grid grid-cols-3 gap-3">
        <input
          id="1000"
          name="uzs"
          type="radio"
          value="1000"
          checked={selectedAmount === '1000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className=" w-full border p-2 px-4 relative flex flex-col rounded-lg shadow items-center" style={{
            borderColor:(selectedAmount === '1000')?"black":""
        }} htmlFor="1000">
          <span className={selectedAmount === '1000' ? 'icon' : 'hidden icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 p-1 absolute top-0 right-0 -m-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
          </span>
          <img src='calender-logo.png' className='h-14 w-14'/>
          <p className=''>SuperScheduler</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />1000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(Calendar)</p>
        </label>

        <input
          id="2000"
          name="uzs"
          type="radio"
          value="2000"
          checked={selectedAmount === '2000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className="w-full border p-2 px-4 relative flex flex-col rounded-lg items-center shadow" htmlFor="2000"style={{
            borderColor:(selectedAmount === '2000')?"black":""
        }}>
          <span className={selectedAmount === '2000' ? 'icon' : 'hidden icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 p-1 absolute top-0 right-0 -m-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
          </span>
          <img src='journal-3.png' className='h-14 w-14'/>
          <p className=''>SoulScript</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />5000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(Journal)</p>
        </label>

        <input
          id="3000"
          name="uzs"
          type="radio"
          value="3000"
          checked={selectedAmount === '3000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className="w-full border p-2 px-4 relative flex rounded-lg flex-col items-center shadow" htmlFor="3000"style={{
            borderColor:(selectedAmount === '3000')?"black":""
        }}>
          <span className={selectedAmount === '3000' ? 'icon' : 'hidden icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 p-1 absolute top-0 right-0 -m-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
          </span>
          <img src='startup-logo1.png' className='h-14 w-14'/>
          <p className=''>HeroicLog</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />5000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(Inspiration)</p>
        </label>

        <input
          id="4000"
          name="uzs"
          type="radio"
          value="4000"
          checked={selectedAmount === '4000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className="w-full border p-2 px-4 relative rounded-lg flex flex-col items-center shadow" htmlFor="4000"style={{
            borderColor:(selectedAmount === '4000')?"black":""
        }}>
          <span className={selectedAmount === '4000' ? 'icon' : 'hidden icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 p-1 absolute top-0 right-0 -m-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
          </span>
          <img src='tree-logo.png' className='h-14 w-14'/>
          <p className=''>TimeTutor</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />5000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(Forest app)</p>
        </label>

        <input
          id="5000"
          name="uzs"
          type="radio"
          value="5000"
          checked={selectedAmount === '5000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className="w-full border p-2 px-4 relative rounded-lg flex flex-col items-center shadow" htmlFor="5000"style={{
            borderColor:(selectedAmount === '5000')?"black":""
        }}>
          <span className={selectedAmount === '5000' ? 'icon' : 'hidden icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 p-1 absolute top-0 right-0 -m-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
          </span>
          <img src={notebook} className='h-14 w-14'/>
          <p className=''>PowerPad</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />5000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(NoteBook)</p>
        </label>

        <input
          id="6000"
          name="uzs"
          type="radio"
          value="6000"
          checked={selectedAmount === '6000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className="w-full border p-2 px-4 relative rounded-lg flex flex-col items-center shadow" htmlFor="6000"style={{
            borderColor:(selectedAmount === '6000')?"black":""
        }}>
          <span className={selectedAmount === '6000' ? 'icon' : 'hidden icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 p-1 absolute top-0 right-0 -m-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
          </span>
          <img src={budget_logo} className='h-14 w-14'/>
          <p className=''>SuperSaver</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />5000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(BudgetTracker)</p>
        </label>

        <input
          id="7000"
          name="uzs"
          type="radio"
          value="7000"
          checked={selectedAmount === '7000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className="w-full border p-2 px-4 relative rounded-lg flex flex-col items-center shadow" htmlFor="7000"style={{
            borderColor:(selectedAmount === '7000')?"black":""
        }}>
          <span className={selectedAmount === '7000' ? 'icon' : 'hidden icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 p-1 absolute top-0 right-0 -m-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
          </span>
          <img src={goals_logo} className='h-14 w-14'/>
          <p className=''>EpicDreams</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />5000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(S.A.V.E.R.S)</p>
        </label>

        <input
          id="8000"
          name="uzs"
          type="radio"
          value="8000"
          checked={selectedAmount === '8000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className="w-full border p-2 px-4 relative rounded-lg flex flex-col items-center shadow" htmlFor="8000"style={{
            borderColor:(selectedAmount === '8000')?"black":""
        }}>
          <span className={selectedAmount === '8000' ? 'icon' : 'hidden icon'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 p-1 absolute top-0 right-0 -m-[10px]">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>
          </span>
          <img src='todo_logo.png' className='h-14 w-14'/>
          <p className=''>TaskForce</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />5000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(Todo List)</p>
        </label>


      </div>
      <div className='h-[0.2px] my-3 w-[100%] m-auto bg-slate-300'></div>

      <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row space-x-1'>
        <p className=''>Balance:</p>
        <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />10000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p>
      </div>
        <div className='flex flex-row space-x-5'>
        <button className="border-2 border-slate-200 p-2 px-4 rounded-lg"onClick={onClose}>Go back</button>
        <button className="bg-black text-white p-2 px-4 rounded-lg" onClick={()=>{submit();onClose();}}>Continue</button>
        </div>
      </div>
    </div>
    <div>
<div className="overflow-auto rounded-r-xl bg-slate-100 h-[586px] w-[250px] scrollbar-hide no-scrollbar flex flex-row flex-wrap gap-5 justify-center items-center py-5">
{(image_list.length>0)?
<h1 className="text-lg w-full px-5 self-start" style={{fontFamily:"poppins"}}>Find your perfect design🤩</h1>:<div>
  <h1 className='text-center'><span className='text-xl text-red-500'>W</span>hen you enter your Routine name and press enter, automatically related images will be displayed!!</h1></div>}
{
  image_list.map((i)=>{
    return(
      <div onClick={(event) => {
        event.preventDefault();
        setImage(i);
      }}>
        <img src={i} className='h-[190px] w-[200px] rounded-sm' />
      </div>
    )
  })
}</div>
    </div>
    </div>
  );
}

