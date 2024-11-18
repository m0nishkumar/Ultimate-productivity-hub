import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "@react-three/fiber";
import { gsap } from "gsap";
import { Tween } from "react-gsap";

export function Computer(props) {
    const reff=useRef(null)
  const { nodes, materials } = useGLTF("/moderntv.glb");
  const vidoes=["vid6","Lamborghini-status-video-Aventador-Sound-Status-Video-whatsapp-status-video-shorts1080P-HD720P_HD"]
  const [statee,setStatee]=useState(false)
  console.log(props.state)
  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);
  const tween=gsap.to(scene.rotation,{y:0.5,duration:2})
  console.log(props.st)
  const videoTexture=useVideoTexture(`./${vidoes[props.st]}.mp4`)
//   const photoTexture=useTexture(`./page.jpg`)
  useEffect(()=>{
    if(props.state){
        console.log("in")
        materials["Screen.001"].map=videoTexture 

    }
    else{
        // materials["Screen.001"].map=photoTexture
    }

  },[props.state,videoTexture])





  return (
    <group {...props} dispose={null} ref={reff}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0.33, 8.07, 9.9]} scale={0.33}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.TV_low_TV001_0.geometry}
              material={materials["TV.001"]}
            />
          </group>
          <group position={[0.33, 54.5, 5.03]} scale={0.33}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Screen_low_Screen001_0.geometry}
              material={materials["Screen.001"]}
            />
          </group>
          <group position={[0.33, 6.31, 6.74]} scale={0.33}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Footer_low_TV001_0.geometry}
              material={materials["TV.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/moderntv.glb");
