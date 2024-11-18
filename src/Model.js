import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Model(props) {
  const model=useRef();
  const { nodes, materials } = useGLTF("/monish_model.gltf");
  console.log(materials)
  const colors=["brown"]
  const [index,setIndex]=useState(0);

  useFrame((state, delta) =>{ 
    model.current.rotation.y+=0.005
    easing.dampC(materials.Humano_01Business_01.color,"brown",1,delta)
    setTimeout(() => {
      setIndex((index + 1) % colors.length)
      easing.dampC(materials.Humano_01Business_01.color,colors[index],0.25,delta)
    },20000);
  });


//   useFrame((state, delta) =>{ 
//     model.current.rotation.y+=0.005
//     console.log(Math.floor(model.current.rotation.y))
// if((Math.floor(model.current.rotation.y))%6==0){
//       setIndex((index + 1) % colors.length)
//       console.log(index)
//       easing.dampC(materials.Humano_01Business_01.color,colors[index],0.25,delta)
//     }
//   });
let camera = useThree((state) => state.camera);
let scene = useThree((state) => state.scene);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(()=>{
  let t1=gsap.timeline({
    scrollTrigger:{
      trigger:"#model",
      start:"top top",
      endTrigger:"#projects",
      end:"bottom bottom",
      scrub:true,
    }
  })
   t1.to(camera.position, { x: 0})
   .to(camera.position, { y: 120 },"<")
   .to(scene.rotation,{y:5},"<")
   .to(camera.position, { x: -400 })
   .to(camera.position, { z: 410 },"<")
   .to(camera.position, { y:225 },"<")
},[])

useLayoutEffect(()=>{
  console.log("ij")
  let t2=gsap.timeline({
    defaults:{
      trigger:"#model",
      duration:2
    }
  })
  t2.fromTo(camera.position,{z:-200},{z:230})
  .to(camera.position,{x:-120},"<")
  .to(camera.position,{y:100},"<")

},[])

  return (
    <group {...props} dispose={null} ref={model}>
      <mesh
      
        castShadow
        receiveShadow
        geometry={nodes.Humano_01Business_01_100K_001.geometry}
        material={materials.Humano_01Business_01}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/monish_model.gltf");