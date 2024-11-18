import React from 'react'
import {motion} from 'framer-motion'

export const RewardsPage = ({onClose}) => {
  return (
    <motion.div className='flex flex-col justify-center items-center space-y-2 p-7'>
      <div className='my-2 flex flex-col items-center justify-center'>
      <motion.div className='flex flex-row justify-center items-center my-2'>
      <motion.svg initial={{ opacity: 2, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1,delay:0.2,ease:"linear", 
        }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[90px] h-[90px] text-yellow-200">
  <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
</motion.svg>
      <motion.svg initial={{ sacle: 2, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1,delay:0.9,ease:"linear", 
        }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[115px] h-[115px] text-yellow-300">
  <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
</motion.svg>
<motion.svg  initial={{ opacity: 2, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1,delay:0.5,ease:"linear", 
        }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[90px] h-[90px] text-yellow-200">
  <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
</motion.svg>
</motion.div>
<div className='flex flex-row items-end justify-center'>
<motion.h1 className='text-xl' initial={{ sacle: 2, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4,delay:1.3,type:"spring"
        }}>+450</motion.h1>
<motion.img initial={{ sacle: 2, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4,delay:1.3,type:"spring", 
        }} src='https://img.freepik.com/premium-vector/colorful-water-logo-design-gradien_476121-164.jpg' className='h-8 w-8'/>
</div>
</div>


        <motion.h1 className=' text-3xl font-[500]'initial={{ sacle: 2, y: 1000 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4,delay:1.5,type:"spring", 
        }}>Task Completed!</motion.h1>
        <motion.p className='text-xl text-gray-500'initial={{ sacle: 2, y: 1000 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4,delay:1.7,type:"spring", 
        }}>Routine completed in <span className='text-gray-700 font-[600]'>30:25 mins</span></motion.p>
    </motion.div>
  )
}
