import {useRef} from 'react'
import {Mesh} from 'three'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
// import {Sphere} from '@react-three/drei'

const Cylinder = (props) => {
  const cylinderMesh = useRef<Mesh>(null!)
  useFrame(
    () => void 0
    // () => (cylinderMesh.current.rotation.y = cylinderMesh.current.rotation.y += .005)
    // () => (cylinderMesh.current.rotation.z = cylinderMesh.current.rotation.z += .005)
  )
  return (
    <mesh
      {...props}
      ref={cylinderMesh}
      castShadow={true}
      receiveShadow={true}
    >
      <cylinderGeometry attach="geometry" args={[1,1,2]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  )
}

const Intro = () => {
  return (
    <Canvas
      camera={
        {position: [-5,5,5],fov: 30}
        //{ position: [1, 1.5, 2.5], fov: 50 }
      }
      shadows
    >
      <color attach="background" args={["#ececec"]} />

      {/*from 0 to 1*/}
      <ambientLight intensity={0.3} />

      {/*Enabling Shadows on the directionalLight*/}
      <directionalLight
        castShadow={true}
        position={[10,10,0]}
        // position={[[-5, 5, 5]]}
        intensity={1.5}
        shadow-mapSize-width={1024} shadow-mapSize-height={1024}
        // shadow-mapSize-width={512} shadow-mapSize-height={512}
      />

      {/*<spotLight position={[0,5,10]}/>*/}

      {/*<Cylinder/>*/}
      <Cylinder position={[0, -1, 0]} />

      <mesh
        receiveShadow={true}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
      >
        <planeGeometry attach='geometry' args={[100,100]}/>
        {/*<shadowMaterial attach="material" color="blue"/>*/}
        <shadowMaterial
          transparent={true}
          opacity={0.2}
          // color="orange"
        />
      </mesh>

      <OrbitControls/>
    </Canvas>
  )
}
export default Intro
