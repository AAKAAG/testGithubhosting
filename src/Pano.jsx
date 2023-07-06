
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from 'three'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const cursor = {
  x: 0,
  y: 0
};

const mesh = {
  position: null
};

const Box = (props) => {
  
  const box = useRef();
  mesh.position = box;
  const texture = useLoader(THREE.TextureLoader, props.name)
  
  return (
    <mesh ref={box}>
       <sphereGeometry attach="geometry" args={[700, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
  
    </mesh>
  );
};

const Camera = (props) => {
  const camera = useRef();

  window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
  });
  useFrame(() => {
    if (camera.current && mesh.position.current) {
      camera.current.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
      camera.current.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
      camera.current.position.y = cursor.y * 3;
      
      camera.current.lookAt(mesh.position.current.position);

      
   
    }
  });
  return (
    <perspectiveCamera
      ref={camera}
      fov={75}
      aspect={sizes.width / sizes.height}
      near={0.9}
      far={100}
    >
      <Box 
      name={props.name} 
        
      />
    </perspectiveCamera>
  );
};

export default function Pano(props) {
  return (
     <Canvas className="canvas" style={{width: "100%", height: "50vh", zIndex: "-9999",  display: "block",
     position: "fixed",  top: 0, left: 0 }}>
      <Camera 
      name={props.name}/>
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <ambientLight />
    </Canvas>
    
  );
}
