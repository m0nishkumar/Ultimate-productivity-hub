import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Cube() {
  const cubeRef = useRef();

  // Rotate the cube using the useFrame hook
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="green" />
    </mesh>
  );
}

export function SimpleCube() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}


