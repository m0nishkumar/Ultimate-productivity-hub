import React, { useEffect } from "react";
import { useState } from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import Axios from "axios";
import { AuthContext } from "./Authcontext";
import { useContext } from "react";
import { useSelector } from "react-redux";


export const Community=()=>{
    const [loading,setLoading]=useState(true);
    const {currentUserr}=useContext(AuthContext);   
    const {name,email,imageUrl}=useSelector((state)=>state.counter);
    const user={
        userName:"Monish kumar C",
        photoURL:imageUrl,
        email:currentUserr.email,
        uid:currentUserr.uid
    }
    const getFile =async (url)=>{
        const response =await fetch(url);
        const data=await response.blob();
        return new File([data],"userPhoto.jpg",{type:'image/jpeg'})
    }
    useEffect(()=>{
        if(currentUserr.displayName==undefined){
            console.log("siufghiuhgiusfngiojsfgnijsbgij")
        }
        else{
            console.log("im in")
        Axios.get('https://api.chatengine.io/users/me',{
            headers:{
                projectID:"ccca89be-9c88-4e1e-87ae-566d61dec138",
                userName:name,
                userSecret:email
            }
        })
        .then(()=>{
            setLoading(false);
        })
        .catch(()=>{
            console.log("hii");
            let formdata =new FormData();
  
            formdata.append('username',name);
            formdata.append('secret',email);

            getFile(user.photoURL)
            .then((avatar)=>{
                formdata.append("avatar",avatar,avatar.name);

                Axios.post("https://api.chatengine.io/users",
                formdata,{
                    headers:{
                        'Private-Key':'{{2c0c130d-9c82-421f-a5b8-2267aedb64d4}}'
                    }
                }
                ).then(()=>{
                    setLoading(false)
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
        })}
    },[currentUserr.displayName])
    return(
        <div>
        {(currentUserr.displayName)? 
            <div className="chat-page">
            <ChatEngine
            height="calc(93vh)"
            projectID="ccca89be-9c88-4e1e-87ae-566d61dec138"
            userName={name}
            userSecret={email}
            />
        </div>:<h1 style={{position:"relative",textAlign:"center"}}>Loading...</h1>}
        </div>
    )
}