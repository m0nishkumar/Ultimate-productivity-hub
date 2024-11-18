import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function World(props) {
  const { nodes, materials } = useGLTF("/earthmemo.glb");
  const world=useRef()
  useFrame((state,delta)=>{
      world.current.rotation.y+=0.002
  })
  return (
    <group {...props} dispose={null} ref={world}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={3}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Earth_Diffuse_6K}
            />
          </group>
          <group scale={3.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/earthmemo.glb");