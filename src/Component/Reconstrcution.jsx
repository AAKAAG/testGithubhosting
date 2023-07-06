import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { MeshReflectorMaterial, useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'

extend(geometry)
const z=-2;
export const Reconstruction = () => (
    
  <Canvas style={{width: "100vw", height: "100vh",   display: "block",
  position: "fixed",  top: 0, left: 0}} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
    <color attach="background" args={['#546ccf']} />
    <fog attach="fog" args={['#97bbfe', 0, 15]} />
    <group position={[0, -0.8, 0]}>
   
    <Frame id="00" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" position={[-2.30, 0.81, z]} rotation={[0, 0.5, 0]}>
      <Gltf src="./glb/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
    </Frame>

    <Frame id="01" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" position={[-1.15, 0.81, z]} rotation={[0, 0.5, 0]}>
      <Gltf src="./glb/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
    </Frame>
    <Frame id="02" name="tea" author="Omar Faruq Tawsif" position={[0, 0.81, z]}>
      <Gltf src="./glb/fiesta_tea-transformed.glb" position={[0, -2, -3]} />
    </Frame>
    <Frame id="03" name="still" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.15, 0.81, z]} rotation={[0, -0.5, 0]}>
      <Gltf src="./glb/still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
    </Frame>
   
    <Frame id="04" name="tea" author="Omar Faruq Tawsif" position={[2.30, 0.81, z]} rotation={[0, -0.5, 0]}>
      <Gltf src="./glb/fiesta_tea-transformed.glb" position={[0, -2, -3]} />
    </Frame>
   
    
    <Rig />
      
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
    </group>
   
    <Environment preset="city" />
  </Canvas>

)

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
  const portal = useRef()
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
     
      <Text  fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
        /{id}
      </Text>
      <Text  fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
        {author}
      </Text>
      <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree()
  const [, params] = useRoute('/item/:id')
  useEffect(() => {
    const active = scene.getObjectByName(params?.id)
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  })
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}
