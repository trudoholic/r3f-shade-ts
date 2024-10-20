import { ContactShadows, OrbitControls } from "@react-three/drei"
// import * as THREE from "three"

const Model = () => {
  return (
    <mesh
      position={[0, 0, 0]}
      // position={[1, 1, 0]}
      // rotation={[0, THREE.MathUtils.degToRad(90), 0]}
      scale={[1, .75, 1]}
    >
      <boxGeometry />
      <meshStandardMaterial color="grey" />
    </mesh>
  )
}

export const Experience = () => {
  return (
    <>
      <OrbitControls maxPolarAngle={Math.PI / 2} />

      <Model />

      {/*<ContactShadows position={[0, -1, 0]} blur={3} opacity={0.42} />*/}
      <ContactShadows position={[0, -1, .1]} blur={2} opacity={0.75} />
    </>
  )
}
