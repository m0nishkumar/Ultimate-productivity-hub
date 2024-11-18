import React, { useEffect } from 'react'

import {Decal,OrbitControls,useGLTF,useTexture} from '@react-three/drei'



export const Shirt = ({stat,mat}) => {

    const { nodes, materials } = useGLTF('/shirt_baked.glb');

  
  
    return (
      <group >
        <mesh 
          castShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          material-roughness={1}
          dispose={null}
        >
          
        </mesh>
{/* <mesh
    castShadow
    geometry={pant2.nodes["default_default_0"].geometry}
    material={pant2.materials.default}
    material-roughness={1}
    dispose={null}
  >

  </mesh> */}
      </group>
    )
  }
