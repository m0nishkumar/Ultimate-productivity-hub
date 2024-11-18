import React, { useEffect } from 'react'
import pic1 from './login_pic1.png'
import twitter from './twitter.png'
import apple from './apple.png'
import { Link } from 'react-router-dom'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import { gapi } from 'gapi-script'
import { useDispatch } from 'react-redux'
import { changeLogin } from './counterSlice'
import axios from 'axios'

export const LoginUI = ({onClose}) => {
  const clientId ="879729452506-8kot7diltnpk2h010u0mcah93kpou31m.apps.googleusercontent.com";
  const dispatch=useDispatch();
  const onSuccess=(res)=>{
    console.log("Login Success!",res.profileObj);
    dispatch(changeLogin(res.profileObj));

    axios.get("http://localhost:5000/login",{ params: { name: res.profileObj.name , email: res.profileObj.email } })
    .then(()=>{
      console.log("created!!");
    })
  }
  const onSuccessOut=(res)=>{
    console.log("Logout Success!");
  }
  const onFailure=(res)=>{
    console.log("Login Failed!",res);
  }
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start)
  },[])
  return (
    <div className='h-[75vh] w-[60vw]  rounded-2xl flex flex-row relative'>
       <div onClick={onClose}> <Link to='/dashboard'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-[100%] -top-7 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg></Link></div>
        <div className='w-[50%] h-full rounded-l-2xl bg-slate-100 relative overflow-hidden pr-10'style={{
        // backgroundImage:'url("https://images.pexels.com/photos/7078717/pexels-photo-7078717.jpeg?auto=compress&cs=tinysrgb&w=600")'
    }}>
        <h1 className='outline_text2 absolute z-0 top-[42%] right-[10%] font-extrabold' style={{
            fontWeight:"900",fontSize:"80px"
        }}>ROUTINES</h1>
        <h1 className='absolute top-5 left-5'>WELCOME TO,</h1>
        <h1 className='text-[45px] font-[700] p-5 pb-0 pt-10 text-slate-500 '>ULTIMATE <br/> <span className='text-[45px]'>PRODUCTIVITY TOOL!</span></h1>
        <img src={pic1} className='p-2 absolute z-0 -bottom-12'/>
    </div>
        <div className='flex flex-col items-center w-[47%] h-[90%] rounded-2xl m-auto'>
            <h1 className='text-3xl w-fit font-semibold'>Portal Sign-in</h1>
            <p className='w-[300px] text-lg m-2 text-slate-500 text-center'>Hey enter the details to get sign in to your account</p>
            <div className='flex flex-col space-y-5 mt-8 mb-3'>
            <input className='w-[320px] h-[45px] border-2 px-3 border-slate-200 rounded-xl' placeholder='Enter Email/Phone Number'/>
            <input className='w-[320px] h-[45px] border-2 px-3 border-slate-200 rounded-xl'placeholder='Password'/>  
            </div>
            {/* <p className='font-semibold mr-0'>Having trouble in sign in? <span className='text-blue-500'>TroubleShoot</span></p> */}
            <button className='w-[320px] m-2 my-5 text-white p-2 font-semibold bg-yellow-400 rounded-2xl'>Sign up</button>
            <div className='signin-google-hr'>
            <hr id="hr"style={{width:"50px",border:"none",height:"1.3px"}}/>
            or sign in with 
            <hr id="hr"style={{width:"50px",border:"none",height:"1.3px"}}/>
        </div>
        <div className='login-logo flex flex-row items-center justify-center mt-5'>
        {/* <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
        <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"/>
        <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src={twitter}/> */}
        <GoogleLogin clientId={clientId} buttonText="Login"
        onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'}
        />
        {/* <GoogleLogout clientId={clientId} buttonText={"Logout"} onLogoutSuccess={onSuccessOut}/> */}
        </div>
        <h1 className='mt-5'>Dont have an account? <span className='font-semibold'>Request Now</span></h1>
        </div>
    </div>
  )
}
