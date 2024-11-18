import React, { useEffect, useState } from 'react';
import goals_logo from './goals_logo.png'
import budget_logo from "./budget_logo.png"
import notebook from "./notebook.png"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeClockList, changeCustomClose } from './counterSlice';
import { Slideshow } from './Slideshow';

export function PowerCustom({onClose,start,end,setClock_events,clock_events,list_change,setList_change}) {
  const [input_img,setInput_img]=useState("morning routine");
  const [value,setValue]=useState("");
  const [valueTimeS,setValueTimeS]=useState((start/10<=1)?`0${start}:00`:`${start}:00`);
  const [valueTimeE,setValueTimeE]=useState((end/10<=1)?`0${end}:00`:`${end}:00`);
  const [image_list,setImage_list]=useState([]);
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [image,setImage]=useState("");
  const {clock_list_back}=useSelector((state)=>state.counter);
  const [flag,setFlag]=useState(3);
  const change_items={
    "1000":"calender-logo","2000":"journal-3","3000":"startup-logo1","4000":"tree-logo","5000":"notebook1","6000":"budget_logo","7000":"goals_logo","8000":"newsAPI"
  }
//   const [list_change,setList_change]=useState(["tree-logo","calender-logo","startup-logo1","journal-3","notebook1","budget_logo","goals_logo","newsAPI"])
  useEffect(()=>{
    if(selectedAmount in change_items){
    console.log(change_items[selectedAmount]);
    let a=list_change.filter((i)=>i!=change_items[selectedAmount]);
    if(a.length==list_change.length){
        a.push(change_items[selectedAmount]);
    }
    setList_change(a)}
    else{

    }
  },[selectedAmount])
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
    <div className='flex flex-row h-fit w-[68vw]'>
        <div className=''>
            <Slideshow value={1} />
        </div>
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
          <img src="./newsAPI.png" className='h-14 w-14'/>
          <p className=''>News Feed</p>
          {/* <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />5000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p> */}
          <p className='text-sm text-gray-500'>(News Feed)</p>
        </label>

        <input
          id="9000"
          name="uzs"
          type="radio"
          value="9000"
          checked={selectedAmount === '9000'}
          onChange={handleAmountChange}
          className="hidden"
        />
        <label className="w-full border p-2 px-4 relative rounded-lg flex flex-col items-center justify-center shadow" htmlFor="9000"style={{
            
        }}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </label>


      </div>
      <div className='h-[0.2px] my-3 w-[100%] m-auto bg-slate-300'></div>

      <div className='flex flex-row items-center justify-end'>
      {/* <div className='flex flex-row space-x-1'>
        <p className=''>Balance:</p>
        <p><img className="h-5 w-5 inline-block"src="coin-logo.png" />10000<span className="text-uzs text-xs font-Rubik font-normal">UZS</span></p>
      </div> */}
        <div className='flex flex-row space-x-5'>
        <button className="border-2 border-slate-200 p-2 px-4 rounded-lg"onClick={()=>{
            dispatch(changeCustomClose())
        }}>Go back</button>
        <button className="bg-black text-white p-2 px-4 rounded-lg" onClick={()=>{ dispatch(changeCustomClose())}}>Continue</button>
        </div>
      </div>
    </div>
    <div className=''>
    {/* <h1>Selected Bundle:</h1> */}
<div className="overflow-auto rounded-r-xl bg-slate-100 h-[560px] w-[100px] scrollbar-hide no-scrollbar flex flex-col gap-5 justify-center items-center py-5">
    
{
  list_change.map((i)=>{
    return(
      <div onClick={(event) => {
        event.preventDefault();
        setImage(i);
      }}>
        <img src={`${i}.png`} className='h-12 w-12  rounded-full border-[2px] opacity-80 p-1' />
      </div>
    )
  })
}</div>
    </div>
    </div>
  );
}

