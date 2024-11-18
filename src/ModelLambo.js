import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { easing } from "maath";

export function ModelLambo(props) {
  // useFrame((state, delta) =>{ 
  //   car.current.rotation.y+=0.005;
  //   easing.dampC(materials.MetalDark.color,props.color,1,delta);
  // });
    let camera = useThree((state) => state.camera);
let scene = useThree((state) => state.scene);
useLayoutEffect(()=>{
    console.log("ij")
    let t2=gsap.timeline({
      defaults:{
        trigger:"#model",
        duration:2
      }
    })
    t2.fromTo(camera.position,{z:-100},{z:160})
    .to(camera.position,{x:-120},"<")
    .to(camera.position,{y:30},"<")
  
  },[])
    const car=useRef()
    useFrame((state,delta)=>{
        car.current.rotation.y+=0.004
    })
  const { nodes, materials } = useGLTF(
    "/lamborghini_aventador_svj_-_sc20_carbon_edition.glb"
  );
  return (
    <group position={[0, -1.1, 0]} {...props} dispose={null}  ref={car}>
      <group rotation={[-1.572, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.MetalDark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.MetalExhaustTextured}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.GlassLights}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.CARROSSERIE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.intTexButtonsGlossy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials["Material.044"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.GLASS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.PRFD_LBACK}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.BLEU_DETAILS}
            />
          </group>
          <group
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.CARROSSERIE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.CARBONE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.MetalDark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.GLASS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.BLEU_DETAILS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[0, 1.049, -0.641]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.MetalDark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.PRFD_LBACK}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.BLEU_DETAILS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.CARBONE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials.Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials.HdLightsLens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials.MetalExhaustTextured}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={materials.GlassLights}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.LightEmissiveWhite}
            />
          </group>
          <group
            position={[0.002, 0.054, -0.028]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials.GLS_MR}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials.CARBONE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_41.geometry}
              material={materials.MetalDark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={materials.Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_43.geometry}
              material={materials.GlassLights}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials.GlassRedLights}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials.GlassOrangeLights}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_46.geometry}
              material={materials.GlassWhite}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials.Aluminum}
            />
          </group>
          <group
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_51.geometry}
              material={materials.CARROSSERIE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_52.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={[1.06, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_54.geometry}
              material={materials.CARROSSERIE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_57.geometry}
              material={materials.BLEU_DETAILS}
            />
          </group>
          <group position={[0, 0.432, -0.041]} rotation={[1.562, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_60.geometry}
              material={materials.BLEU_DETAILS}
            />
          </group>
          <group position={[0, -0.044, -0.015]} rotation={[1.562, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_62.geometry}
              material={materials["Black_Texture.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials.BLEU_DETAILS}
            />
          </group>
          <group position={[0, 2.113, -0.034]} rotation={[1.562, 0, 0]}>
            <group position={[-0.001, 1.626, 1.499]} scale={0.951}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_67.geometry}
                material={materials.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_68.geometry}
                material={materials.BLEU_DETAILS}
              />
            </group>
          </group>
          <group position={[0, 1.404, -0.028]} rotation={[1.562, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_72.geometry}
              material={materials.BLEU_DETAILS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_73.geometry}
              material={materials.material}
            />
          </group>
          <group position={[0, 0.433, -0.019]} rotation={[1.562, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials.Grille_2_Texture}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_80.geometry}
              material={materials.Textured_2_Texture}
            />
          </group>
          <group
            position={[0, -0.032, -0.015]}
            rotation={[-0.009, Math.PI / 2, 0]}
            scale={9.186}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_88.geometry}
              material={materials["Material.065"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_89.geometry}
              material={materials.BLACK}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_90.geometry}
              material={materials.CRBN_JANTE}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_91.geometry}
              material={materials["pneu.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_92.geometry}
              material={materials["pneu.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_93.geometry}
              material={materials["pneu.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_94.geometry}
              material={materials["pneu.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_95.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_96.geometry}
              material={materials["Material.013"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_97.geometry}
              material={materials["Material.014"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_98.geometry}
              material={materials.PZEO}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_99.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_100.geometry}
              material={materials.Rim_Texture}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_101.geometry}
              material={materials["plaquette_de_frein.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_102.geometry}
              material={materials["visse.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_103.geometry}
              material={materials.BLEU_DETAILS}
            />
          </group>
          <group
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={[1.06, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_109.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_110.geometry}
              material={materials.BLEU_DETAILS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_111.geometry}
              material={materials["Material.069"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_37.geometry}
            material={materials.PRFD_LBACK}
            position={[0, 0.059, -0.023]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.CARBONE}
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_70.geometry}
            material={materials.CARROSSERIE}
            position={[0, 0.723, 1.302]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_75.geometry}
            material={materials["Material.068"]}
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_77.geometry}
            material={materials["Material.005"]}
            position={[-0.001, 1.062, -1.619]}
            rotation={[-0.009, 0, 0]}
            scale={[1.036, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials["Black_Texture.001"]}
            position={[0, 0.433, -0.019]}
            rotation={[1.562, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_84.geometry}
            material={materials.GLASS}
            position={[0, 1.049, -0.641]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_86.geometry}
            material={materials["Material.006"]}
            position={[0, -0.044, -0.015]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials.BLEU_DETAILS}
            position={[0, 0.545, 2.541]}
            rotation={[-1.579, -Math.PI / 2, 0]}
            scale={9.186}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials["Material.006"]}
            position={[0.002, 0.054, -0.028]}
            rotation={[-0.009, 0, 0]}
            scale={0.001}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lamborghini_aventador_svj_-_sc20_carbon_edition.glb");
