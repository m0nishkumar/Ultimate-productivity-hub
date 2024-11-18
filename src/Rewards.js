import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import { LoginUI } from './LoginUI'
import { RewardsPage } from './RewardsPage'
import {motion} from 'framer-motion'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Rewards({isOpenLogin,setIsOpenLogin}) {
  const onClose=()=>{
    setIsOpenLogin(false)
  }  
  // useEffect(()=>{
  //   setIsOpenLogin(true);
  // },[])  
   if (!isOpenLogin) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} className='' />
      <div class="element element-1 z-[1100]"></div>
      <div class="element element-2 z-[1100]"></div>
<div class="element element-3 z-[1100]"></div>
<div class="element element-4 z-[1100]"></div>
      <motion.div  style={MODAL_STYLES}  className='rounded-2xl'>
        <div className='relative'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute -top-10 -right-10 text-white z-[2000]" onClick={onClose}>
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>
            <RewardsPage onClose={onClose} />
        </div> 
      </motion.div>
    </>,
    document.getElementById('portal')
  )
}