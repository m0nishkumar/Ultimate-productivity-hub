import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
export const CameraRigS = ({children}) => {
    const group = useRef();

    console.log(children)
  
    useFrame((state, delta) => {
      const isBreakpoint = window.innerWidth <= 1260;
      const isMobile = window.innerWidth <= 600;
  
      let targetPosition = [0, 0, 250];


      easing.damp3(state.camera.position, targetPosition, 0.25, delta)
  

      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      )
    })
  
  
    return <group ref={group}>{children}</group>
  }
